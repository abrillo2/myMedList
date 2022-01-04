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
    takenphoto: {
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 1)",
        width:"100%",
        height:"100%"
  },
    slipimagecontainer: {
        position: "relative",
        width: wp("90%"),
        height:hp("80%"),
  },
    takenPhotoBody:{
        position:"relative",
        marginTop:hp(hrp(10)),
        marginBottom:hp(hrp(10)),
        flex:1,
        justifyContent:"center",
        alignItems:"center"
  },
    twinButtonContainer:{
         marginTop:hp(hrp(10)),
         marginTop:hp(hrp(10)),
         flexDirection:"row",
         width : wp("90%"),
         justifyContent:"space-between",

  }

});