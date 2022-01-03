import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View,StyleSheet,Dimensions } from "react-native";
import Pdf from 'react-native-pdf';
import TwinButtonContainer from '../TwinButtonContainer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//helper functions
function hrp(value){
    return value*100 / 736;
  }
  
function wrp(value){
    return value*100 / 414;
}
export default class PdfViewerHook extends React.Component {

    pressed=(params)=>{
        if(params){
            console.log("share")
        }else{
            console.log("cancel")
            this.props.navigation.navigate("Share")
        }
   }

    render() {
      const resourceType = 'url';
      const source = { uri: this.props.pdfURI, cache: true };

      {}
  
      return (
        <View style={{ flex: 1,backgroundColor:"white" }}>
                <Pdf
                    source={source}
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
                    style={styles.pdf}/>
            <View style={styles.twinButtonContainer}>
                <TwinButtonContainer label="Share" 
                                     disabled={false}
                                     onPress={()=> this.pressed(true)} />
                <TwinButtonContainer label="Cancel"
                                     onPress={()=> this.pressed(false)} 
                                     disabled={false}/>
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },twinButtonContainer:{
        position:"relative",
        marginTop:hp(hrp(50)),
        marginBottom:hp(hrp(20)),
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-evenly",
        alignItems:"center"
     }, 
});
