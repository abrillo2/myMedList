//imports
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//helper functions
function hrp(value){
    return value*100 / 736;
  }
  
function wrp(value){
    return value*100 / 414;
}


export default StyleSheet.create({
  
    editPicContainer : {
        opacity : 1,
        position : "relative",
        backgroundColor : "transparent",
        width : "89%",
        height : hp(hrp(209)),
  },
    slipImage : {
        opacity : 1,
        position : "relative",
        width : "99%",
        height : hp(hrp(209)),
  },
    editButton : {
        opacity : 1,
        position : "absolute",
        backgroundColor : "transparent",
        width : wp(wrp(48)),
        height : hp(hrp(28)),
        right : wp(wrp(0)),
        top : hp(hrp(0))
  }
});