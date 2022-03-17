

import React,{useEffect, useState} from 'react';
import {RefreshControl,StyleSheet,Dimensions, View,SectionList,Text,Image,StatusBar } from 'react-native';
import styles from '../../assets/styles/Utilis'
import colors from '../../assets/static_resources/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getData } from '../helpers/AsyncHelper';
import { getItem } from '../helpers/editItemHelper';
import appLabels from '../../assets/static_resources/strings';
//helper
import {listOfSlips} from '../helpers/ReviewHelper'
//component

export default function SlipReviewList(props){

    const [data,setData] = useState([])

    const [refreshing,setRefreshing] = useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        loadReviewItems();
        setRefreshing(false)
      }, []);

    async function loadReviewItems(){
        setRefreshing(true);
        let tempData = await listOfSlips()
        setData(tempData)
        setRefreshing(false)
    }   

    useEffect(() => {
            
        loadReviewItems()
        
        
        return () => {
        }
      }, []);
    
    
    const SlipItem = ({item,index }) => (
        

        <View style={[styles.aboutBody,
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
            <Text style={{color:colors.inputTextColor}}>Added on: {item['dateRefilled']}</Text>
        </View>
   
    );

    return(
       
        <View style={{ paddingTop: StatusBar.currentHeight,flex:1}}>

           <SectionList
                  sections={data}
                  horizontal={false}
                  extraData={data}
                  nestedScrollEnabled
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={true}
                  keyExtractor={(item, index) => index}
                  renderItem={({ item,index }) => <SlipItem item={item} index={index}/>}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />}
                  
                  />
            
        </View>
        
        
    )
}



const stylesPdf = StyleSheet.create({
    pdf: {
        flex:1,
        width:'100%',
        height:Dimensions.get('window').height/2,
    } 
});


