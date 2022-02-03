//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';


export default StyleSheet.create({
  
    editPicContainer : {
        opacity : 1,
        position : "relative",
        backgroundColor : "transparent",
        width : "85%",
        height : (hrp(209)),
        alignSelf:'center'
  },
    slipImage : {
        opacity : 1,
        position : "relative",
        width : "100%",
        height : (hrp(209)),
  },
    editButton : {
        opacity : 1,
        position : "absolute",
        backgroundColor : "transparent",
        width : (wrp(48)),
        height : (hrp(28)),
        right : (wrp(0)),
        top : (hrp(0))
  }
});