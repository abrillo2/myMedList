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


export default StyleSheet.create({
    singlereconcile: {
      opacity: 1,
      position: "relative",
      backgroundColor: "rgba(255, 255, 255, 1)",
      flex:1
    },
    bodycontainer: {
      opacity: 1,
      position: "relative",
      backgroundColor: "transparent",
      marginTop: hp(hrp(10)),
      paddingTop: hp(hrp(0)),
      paddingRight: wp(wrp(0)),
      paddingBottom: hp(hrp(0)),
      paddingLeft: wp(wrp(0)),
  
      shadowColor: "rgb(0,  0,  0)",
      shadowOpacity: 0.2,
      elevation: wp(wrp(7)),
      shadowOffset: {
        width: 0,
        height: wp(wrp(1))
      },
      shadowRadius: wp(wrp(5)),
    },
    twinButtonContainer:{
      position:"relative",
      marginTop:hp(hrp(10)),
      marginBottom:hp(hrp(10)),
      paddingLeft:"5%",
      paddingRight:"5%",
      flexDirection:"row",
      width: wp("100%"),
      justifyContent:"space-between"
   },  
   hallfInputContainer: {
    opacity: 1,
    position: "relative",
    backgroundColor: "transparent",
    width: wp("88.5%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //collapseable view stye
  collapseStyle:{
    position:"relative"
  }
  
  });