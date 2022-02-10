//imports
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import { wrp ,hrp,color} from './Dim';


export default StyleSheet.create({
   addslip: {
     position: "relative",
     backgroundColor: color.bgColorPrimary,
     flex:1,

  },

   bodyContainer:{
     position: "relative",
     backgroundColor:  color.bgColorPrimary,
      width: ("100%"),
      flex:1,
      alignItems:"center",
  },

  cameraIconStyleLandscape: {
    position: "relative",
    width: (wrp(120)),
    height: (hrp(120)),
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
     color: color.textColorPrimary,
     fontSize: (wrp(17)),
     fontFamily: "Roboto-MediumItalic",
     textAlign: "center",
  },
});