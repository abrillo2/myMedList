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
   addslip: {
     position: "relative",
     backgroundColor: "rgba(255, 255, 255, 1)",
     flex:1
  },

   bodyContainer:{
     position: "relative",
     backgroundColor: "rgba(255, 255, 255, 1)",
      width: wp("100%"),
      flex:1,
      alignItems:"center"
  },

   cameraIconStyle: {
     position: "relative",
     width: wp(wrp(223)),
     height: hp(hrp(223)),
     marginTop: hp(hrp(50)),
     marginBottom: hp(hrp(50)),
  },
 addSlipDescription: {
     position: "relative",
     backgroundColor: "rgba(255, 255, 255, 0)",
     color: "rgba(56, 156, 196, 1)",
     fontSize: wp(wrp(17)),
     fontFamily: "Roboto-MediumItalic",
     textAlign: "center",
     marginTop: hp(hrp(50))
  },
});