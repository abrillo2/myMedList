

import React,{useEffect, useState} from 'react';
import {RefreshControl,StyleSheet,Dimensions, View,SectionList,Text,StatusBar } from 'react-native';
import styles from '../../assets/styles/Utilis'
import colors from '../../assets/static_resources/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import appLabels from '../../assets/static_resources/strings';
//helper
import {listOfPdf, listOfSlips} from '../helpers/ReviewHelper'
//component
import Pdf from 'react-native-pdf';

export default function PdfReviewList(props){

    
    const [pdfList,setPdfList] = useState([])
    const [refreshing,setRefreshing] = useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        loadReviewItems();
        setRefreshing(false)
      }, []);

    async function loadReviewItems(){
        setRefreshing(true)
        let tempListofPdf = await listOfPdf()
        setPdfList(tempListofPdf);
        setRefreshing(false)


    }   

    useEffect(() => {
            
        loadReviewItems()
        
        
        return () => {
        }
      }, []);
    
    const PdfItem = ({item,index }) => {
        const source = { uri: item.uri, cache: true };
        return (
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
                    name={'share'}
                    size={24}
                    backgroundColor={'transparent'}
                    color={colors.primary}
                    onPress={()=>{
                        props.navigation.navigate(appLabels.PdfViewerTitle,{
                        pdfURI:item.uri,
                        client:item.client,
                        shareAgain:true
                        }) 
                    }}
                />
            </View>

                  <Pdf
                      source={source}
                      enablePaging={true}
                      onLoadComplete={(numberOfPages,filePath) => {
                          console.log(`Number of pages: ${numberOfPages}`);
                      }}
                      onPageChanged={(page,numberOfPages) => {
                          console.log(`Current page: ${page}`);
                      }}
                      onError={(error) => {
                          console.log(error);
                      }}
                      onPressLink={(uri) => {
                          console.log(`Link pressed: ${uri}`);
                      }}
                      fitPolicy={2}
                      style={stylesPdf.pdf}/>
                 <Text>Shared Via : {item.via}</Text>
          </View>
        );
    }
    
    

    return(
        
        <View style={{ paddingTop: StatusBar.currentHeight,flex:1}}>
            <SectionList
                  sections={pdfList}
                  horizontal={false}
                  nestedScrollEnabled
                  showsVerticalScrollIndicator={false}
                  extraData={pdfList}
                  scrollEnabled={true}
                  keyExtractor={(item, index) => index}
                  renderItem={({ item,index }) => <PdfItem item={item} index={index}/>} 
                  
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }/>
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


