import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View,StyleSheet,Dimensions } from "react-native";
import { Linking } from 'react-native'








import RNfs from 'react-native-fs'
import Share from 'react-native-share';

import Pdf from 'react-native-pdf';
import TwinButtonContainer from '../TwinButtonContainer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {shareWithEmail, shareWithSMS, shareWithWhatsUp} from '../helpers/shareHelper.js'
//helper functions
function hrp(value){
    return value*100 / 736;
  }
  
function wrp(value){
    return value*100 / 414;
}
export default class PdfViewerHook extends React.Component {
    
    pressed=(params)=>{

        let Description = this.props.client[2]+" Prescription List"
        if(params){
            this.sharePDFWithAndroid(this.props.pdfURI,Description,this.props.client[1])
            console.log("share")
        }else{
            console.log("cancel")
            this.props.navigation.navigate("Share")
        }


   }

   sharePDFWithAndroid=(fileUrl,Description,recipient)=> {
        console.log("file uri ",fileUrl)

        RNfs.readFile(fileUrl, 'base64')
        .then((data) => {
        // handle the data ..
            data = `data:${'application/pdf'};base64,` + data;
            Share.shareSingle(this.shareData(data,Description,recipient));
        })
    }

    shareData=(data,Description,recipient)=>{
        let inputLabel = null
        console.log(this.props.client)
        switch(this.props.client[0]){
          case "whatsUp":
            inputLabel =shareWithWhatsUp(data,Description,recipient)
            break;
          case "email":
            inputLabel =shareWithEmail(data,Description,recipient)
            break;
          case "sms":
            inputLabel =shareWithSMS(data,Description,recipient)
            break;
          default:
            break;
        }
        return inputLabel;
    }


    render() {
      const resourceType = 'url';
      const source = { uri: this.props.pdfURI, cache: true };
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
