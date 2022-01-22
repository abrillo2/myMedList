//imports
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
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
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgba(255, 255, 255, 1)",
        fontSize: wp(wrp(35)),
        fontWeight: "500",
        letterSpacing: 1,
        fontStyle: "normal",
        fontFamily: "Roboto-Medium",
        textAlign: "center",
      //"lineHeight: hp(hrp(33)),
        marginTop: hp(hrp(100)),
        marginRight: 0,
        marginBottom: hp(hrp(100)),
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
      //"width: wp(wrp(273)),
      //"height: hp(hrp(40)),
      //"left: wp(wrp(71)),
      //"top: hp(hrp(90))
    },
    homeBgStyle: {
      //"opacity: 0.6000000238418579,
      //"position: "absolute",
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        borderTopLeftRadius: wp(wrp(0)),
        borderTopRightRadius: wp(wrp(0)),
        borderBottomLeftRadius: wp(wrp(0)),
        borderBottomRightRadius: wp(wrp(0)),
        width: wp('100%'),
        height: hp('100%'),
        flex:1,
      //justifyContent:"center",
        alignItems:"center"
    },
    twinButtonContainer:{
        flexDirection:"row",
        width : wp("90%"),
        justifyContent:"space-between",
        position:"absolute",
        bottom:hp(hrp(35))
 
   }
  
  });