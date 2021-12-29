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
    share: {
           opacity: 1,
           position: "relative",
           backgroundColor: "rgba(255, 255, 255, 1)",
           marginTop:hp(hrp(0)),
           marginRight:wp(wrp(0)),
           marginBottom:hp(hrp(0)),
           marginLeft: wp(wrp(0)),
           paddingTop:hp(hrp(0)),
           paddingRight: wp(wrp(0)),
           paddingBottom: wp(wrp(0)),
           paddingLeft: wp(wrp(0)),
           width:wp("100%"),
           height:hp("100%"),
           left: wp(wrp(0)),
           top: hp(hrp(0))
      },
      shareNavContainer: {
           opacity: 1,
           position: "relative",
           backgroundColor: "transparent",
           marginTop:hp(hrp(10)),
           marginRight:wp(wrp(0)),
           marginBottom:hp(hrp(0)),
           marginLeft: wp(wrp(0)),
           paddingTop:hp(hrp(0)),
           paddingRight: wp(wrp(0)),
           paddingBottom: wp(wrp(0)),
           paddingLeft: wp(wrp(0)),
           width:wp("100%"),
        //"height:hp(hrp(48,
        //"left: wp(wrp(0)),
        //"top: hp(hrp(74)),
           flexDirection: "row",
           justifyContent: "space-between"
      },
      shareNavSocialMediaContainer: {
           opacity: 1,
           position: "relative",
           backgroundColor: "transparent",
           marginTop:hp(hrp(0)),
           marginRight:wp(wrp(0)),
           marginBottom:hp(hrp(0)),
           marginLeft: wp(wrp(0)),
           paddingTop:hp(hrp(0)),
           paddingRight: wp(wrp(0)),
           paddingBottom: wp(wrp(0)),
           paddingLeft: wp(wrp(0)),
           flexDirection: "row",
           alignItems: "center"
      },
      iconContainer: {
           opacity: 1,
           position: "relative",
           marginTop:hp(hrp(0)),
           marginRight:wp(wrp(10)),
           marginBottom:hp(hrp(0)),
           marginLeft: wp(wrp(0)),
           borderTopLeftRadius:wp(wrp(0)),
           borderTopRightRadius:wp(wrp(0)),
           borderBottomLeftRadius:wp(wrp(0)),
           borderBottomRightRadius:wp(wrp(0)),
           width:wp(wrp(30)),
           height:hp(hrp(30)),
        //"left: wp(wrp(0)),
        //"top: hp(hrp(0))
      },
      shareNavToggelContainer: {
           opacity: 1,
           position: "relative",
           backgroundColor: "transparent",
           marginTop:hp(hrp(0)),
           marginRight:wp(wrp(0)),
           marginBottom:hp(hrp(0)),
           marginLeft: wp(wrp(10)),
           paddingTop:hp(hrp(0)),
           paddingRight: wp(wrp(0)),
           paddingBottom: wp(wrp(0)),
           paddingLeft: wp(wrp(0)),
        //"width:wp(wrp(269)),
        //"height:hp(hrp(48,
        //"left: wp(wrp(0)),
        //"top: hp(hrp(0)),
           flexDirection: "row"
      },
      toggelContainer: {
           opacity: 1,
           position: "relative",
           backgroundColor: "transparent",
           marginTop:hp(hrp(0)),
           marginRight:wp(wrp(0)),
           marginBottom:hp(hrp(0)),
           marginLeft: wp(wrp(0)),
           paddingTop:hp(hrp(0)),
           paddingRight: wp(wrp(0)),
           paddingBottom: wp(wrp(0)),
           paddingLeft: wp(wrp(0)),
           width:wp(wrp(131)),
           height:hp(hrp(48)),
        //"left: wp(wrp(138)),
        //"top: hp(hrp(0)) 
      },
      leftTogelInner: {
           opacity: 1,
           position: "relative",
           backgroundColor: "transparent",
           borderTopWidth: wp(wrp(1)),
           borderTopColor: "rgba(0, 0, 0, 0.5019607843137255)",
           borderRightColor: "rgba(0, 0, 0, 0.5019607843137255)",
           borderBottomWidth: wp(wrp(1)),
           borderBottomColor: "rgba(0, 0, 0, 0.5019607843137255)",
           borderLeftWidth: wp(wrp(1)),
           borderLeftColor: "rgba(0, 0, 0, 0.5019607843137255)",
           borderTopLeftRadius:wp(wrp(5)),
           borderTopRightRadius:wp(wrp(5)),
           borderBottomLeftRadius:wp(wrp(5)),
           borderBottomRightRadius:wp(wrp(5)),
           justifyContent: "center",
           width:wp(wrp(131)),
           height:hp(hrp(48)),
      },
      toggelLabel: {
           opacity: 1,
           position: "relative",
           backgroundColor: "rgba(255, 255, 255, 0)",
           color: "rgba(56, 156, 196, 1)",
           fontSize: 16,
           fontWeight: "400",
           fontStyle: "normal",
           fontFamily: "Roboto",
           textAlign: "center",
           marginTop:hp(hrp(0)),
           marginRight:wp(wrp(0)),
           marginBottom:hp(hrp(0)),
           marginLeft: wp(wrp(0)),
           paddingTop:hp(hrp(0)),
           paddingRight: wp(wrp(0)),
           paddingBottom: wp(wrp(0)),
           paddingLeft: wp(wrp(0)),
        //"left: wp(wrp(9)),
        //"top: hp(hrp(12.5))
      },
      righttogelinner: {
           opacity: 1,
           position: "relative",
           marginLeft: wp(wrp(-5)),
           borderTopWidth: wp(wrp(1)),
           borderTopColor: "rgba(0, 0, 0, 0.5)",
           borderRightWidth: wp(wrp(1)),
           borderRightColor: "rgba(0, 0, 0, 0.5)",
           borderBottomWidth: wp(wrp(1)),
           borderBottomColor: "rgba(0, 0, 0, 0.5)",
           borderLeftColor: "rgba(0, 0, 0, 0.5)",
           borderTopLeftRadius:wp(wrp(5)),
           borderTopRightRadius:wp(wrp(5)),
           borderBottomLeftRadius:wp(wrp(5)),
           borderBottomRightRadius:wp(wrp(5)),
           width:wp(wrp(137)),
           height:hp(hrp(47)),
           justifyContent: "center",
      },
    });