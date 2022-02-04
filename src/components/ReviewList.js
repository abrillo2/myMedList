import {listOfSlips} from '../helpers/ReviewHelper'







import React,{useEffect, useState} from 'react';
import { View,SectionList,Text,Image,StatusBar } from 'react-native';
import Spinner from '../helpers/Spinner';
import styles from '../../assets/styles/Utilis'
import colors from '../../assets/static_resources/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getData } from '../helpers/AsyncHelper';
import { getItem } from '../helpers/editItemHelper';
import appLabels from '../../assets/static_resources/strings';
import { useIsFocused } from '@react-navigation/native';

export default function ReviewList(props){

    const [data,setData] = useState(null)
    const isFocused = useIsFocused();

    async function loadReviewItems(){
        let tempData = await listOfSlips()
        {console.log('list of reviews ', tempData, " index: ",data)}
        setData(tempData)
    }   

    useEffect(() => {
        if(isFocused){
            loadReviewItems()
        }
        
        return () => {
        }
      }, [isFocused]);

    
    const Item = ({item,index }) => (
        

        <View key={index} style={[styles.aboutBody,
                    {width:'90%',alignSelf:
                    'center',marginBottom:'4%',
                    backgroundColor:'white',
                    elevation:10,
                    borderColor:'black',
                    borderRadius:5}]}>
           
            <View style={{width:'100%',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'flex-start'}}>
                   
                <Icon.Button
                    name={'more'}
                    size={24}
                    backgroundColor={'transparent'}
                    color={colors.primary}
                    onPress={()=>{

                        setData(null)
                        setTimeout(async()=>{
                            let items = await getData('@myMedListSlipInfo')
                            items = [...items['slipInfo']]
                            let navItem = getItem(items,item.key)
                            props.navigation.navigate(appLabels.addSlipTitle,{
                            item:navItem,key:item.key
                          })
                        },200)
                    }}
                />
                <Text style={{fontSize:24,fontWeight:'600',
                            color:colors.primary}}>{item['name']} 
                </Text>
            </View>
            <Image
                source={{uri:item['imageData'].uri}}
                style={{width:'100%',height:300}}
            />
            <Text>Added on: {item['dateRefilled']}</Text>
        </View>
   
    );

    return(
        null == data ? <Spinner/>:
        
        <View style={{ paddingTop: StatusBar.currentHeight,flex:1}}>

            <SectionList
                  sections={data}
                  horizontal={false}
                  nestedScrollEnabled
                 
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={true}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item,index }) => <Item item={item} index={index}/>} />
        </View>
        
        
    )
}






