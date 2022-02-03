//imports
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import { wrp ,hrp} from './Dim';


export default StyleSheet.create({
   addslip: {
     position: "relative",
     backgroundColor: "rgba(255, 255, 255, 1)",
     flex:1,
  },

   bodyContainer:{
     position: "relative",
     backgroundColor: "rgba(255, 255, 255, 1)",
      width: ("100%"),
      flex:1,
      alignItems:"center",
      justifyContent:"center"
  },

   cameraIconStyle: {
     position: "relative",
     width: (wrp(223)),
     height: (hrp(223)),
     marginTop: (hrp(50)),
     marginBottom: (hrp(50)),
  },
 addSlipDescription: {
     position: "relative",
     backgroundColor: "rgba(255, 255, 255, 0)",
     color: "rgba(56, 156, 196, 1)",
     fontSize: (wrp(17)),
     fontFamily: "Roboto-MediumItalic",
     textAlign: "center",
  },
});