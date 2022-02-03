//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';


export default StyleSheet.create({
    takenphoto: {
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 1)",
        width:"100%",
        height:"100%"
  },
    slipimagecontainer: {
        position: "relative",
        width: '90%',
        height:hrp(600),
  },
    takenPhotoBody:{
        position:"relative",
        marginTop:(hrp(10)),
        marginBottom:(hrp(10)),
        flex:1,
        justifyContent:"center",
        alignItems:"center",
  },
    twinButtonContainer:{
         marginTop:(hrp(10)),
         marginTop:(hrp(10)),
         flexDirection:"row",
         width : ("90%"),
         justifyContent:"space-between",

  }

});