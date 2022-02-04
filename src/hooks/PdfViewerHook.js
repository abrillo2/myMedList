import React from "react";
import { View,StyleSheet,Dimensions } from "react-native";
import RNFetchBlob from 'react-native-fetch-blob'
import Share from 'react-native-share';
//pdf to img
import RNPdfToImage from 'react-native-pdf-to-image';

import Pdf from 'react-native-pdf';
import Button from '../components/Button';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {shareWithEmail, shareWithSMS, shareWithWhatsUp} from '../helpers/shareHelper.js'
//strings
import appLabels from '../../assets/static_resources/strings'
import { removeFile } from "./FsManager";
import { getData, saveData } from "../helpers/AsyncHelper";
//helper functions
function hrp(value){
    return value*100 / 736;
  }
  
function wrp(value){
    return value*100 / 414;
}100
export default class PdfViewerHook extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
          imgData:null
      }
    }

    pressed=async(params)=>{
      
        let imgData = await this.pdfToImg();
        this.setState({imgData
        });

        let Description = this.props.client[2]+ appLabels.prescriptionList
        if(params){
            this.sharePDFWithAndroid(this.props.pdfURI,Description,this.props.client[1])
            
            let sharedPDF = await getData("sharedPDF")

            sharedPDF = sharedPDF == null ? []: sharedPDF

            console.log('list of shared pdf ',sharedPDF)
            sharedPDF.push(this.props.pdfURI)
            await saveData(sharedPDF,'sharedPDF')
            this.props.navigation.navigate(appLabels.shareTitle)
            
        }else{

            console.log('image ', this.state.imgData)

            removeFile(this.props.pdfURI)
            this.props.navigation.navigate(appLabels.shareTitle)
        }


   }

   pdfToImg=async ()=>{
      let pdfImgUri = await RNPdfToImage.convert("file://"+this.props.pdfURI)
      
      let imgLst = []

      pdfImgUri["outputFiles"].forEach(element => {
        imgLst.push("file://"+element)
      });
      return imgLst

   }

   sharePDFWithAndroid=(fileUrl,Description,recipient)=> {
        RNFetchBlob.fs.readFile(fileUrl, 'base64')
        .then((data) => {
        // handle the data ..
            data = `data:${'application/pdf'};base64,` + data;

            try {
              Share.shareSingle(this.shareData(data,Description,recipient));
            } catch (error) {
              console.log('Error =>', error);
            }

            

        })
    }

    shareData=(data,Description,recipient)=>{
        let inputLabel = null
        switch(this.props.client[0]){
          case appLabels.whatsApp:
            inputLabel =shareWithWhatsUp(data,Description,recipient)
            break;
          case appLabels.email:
            inputLabel =shareWithEmail(data,Description,recipient)
            break;
          case appLabels.sms:
            let imgData = this.state.imgData
            inputLabel =shareWithSMS(imgData,Description,recipient)
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
                <Button buttonLabel={appLabels.share} 
                                     disabled={false}
                                     onPress={()=> this.pressed(true)} 
                                     h={2}
                                     w={120}/>
                <Button buttonLabel={appLabels.cancel}
                                     onPress={()=> this.pressed(false)} 
                                     disabled={false}
                                     h={2}
                                     w={120}/>
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
