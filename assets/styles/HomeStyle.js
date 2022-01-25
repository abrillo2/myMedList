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

export default StyleSheet.create ({
    Home: {
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 1)",
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        width: wp('100%'),
        height: hp('100%'),
        left: 0,
        top: 0,
        flex: 1
    },
    homeTitleTextStyle: {
        position: "relative",
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: wp(wrp(35)),
        letterSpacing: 1,
        fontFamily: "Roboto-LightItalic",
        textAlign: "center",
        marginTop: hp(hrp(100)),
        marginBottom: hp(hrp(100)) 
    },
    homeBgStyle: {
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        paddingTop:hp(hrp(150))
    },
    twinButtonContainer:{
        flexDirection:"row",
        width : wp("90%"),
        justifyContent:"space-between",
        position:"absolute",
        bottom:hp(hrp(35))
 
   }
  
  });