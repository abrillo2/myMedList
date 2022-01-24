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

    
    buttonTextIconContainer:{
        opacity: 1,
        position: "relative",
        backgroundColor: "transparent",
        flexDirection:"row",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
      },
    buttonContainer: {
        position: "relative",
        backgroundColor: "#22bee2",
        borderTopLeftRadius: wp(wrp(4)),
        borderTopRightRadius: wp(wrp(4)),
        borderBottomLeftRadius: wp(wrp(4)),
        borderBottomRightRadius: wp(wrp(4)),
        shadowColor: "rgb(0,  0,  0)",
        shadowOpacity: 0.1,
        elevation: wp(wrp(5)),
        shadowOffset: {
          width: 0,
          height: wp(wrp(1))
        },
        shadowRadius: wp(wrp(2)),
        margin:wp(wrp(1))
      },
    homeButtonLabel: { 
        opacity: 0.8,
        position: "relative",
        marginLeft:hp(hrp(5)),
        backgroundColor: "transparent",
        color: "rgba(255, 255, 255, 1)",
        fontSize: wp(wrp(16)),
        fontWeight: "400",
        letterSpacing: 1,
        fontFamily: "Roboto-Regular"
      }, 
    iconStyle: {
        opacity: 1,
        position: "relative",
        width: wp(wrp(24)),
        height: hp(hrp(24)),
        backgroundColor: "transparent",
      },
});