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
    
  "halfinput": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(0, 0, 0, 0.043137254901960784)",
    "width": wp("42%"),
    "marginTop": hp(hrp(5)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)) 
  },
  "halfinputLabel": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(34, 171, 226, 1)",
    "fontSize": wp(wrp(14)),
    "fontWeight": "500",
    "fontFamily": "Roboto-Medium",
    "textAlign": "left",
    "marginTop":hp(hrp(10)),
    "marginLeft":wp(wrp(10))
  },
  "halfinputLabelIcon": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "flexDirection":"row",
    "alignItems":'center',
    "justifyContent":"space-between"
  },
  "halfinputInput": {
    "opacity": 1,
    "position": "relative",
    "color": "rgba(0, 0, 0, 0.6)",
    "fontSize": wp(wrp(16)),
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto-Medium",
    "textAlign": "left",
    "paddingTop":0,
    "paddingBottom":0,
    "paddingRight":wp(wrp(20)),
    "paddingLeft":10,
  },
  "halfinputLabelIconColor":{
    "width":wp(wrp(24)),
    "height":hp(hrp(24)),
    "marginRight":10,
  },
  "halfinputLayer2Indicator": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "width": wp(("42%")),
    "height": hp(hrp(2)),
    "bottom":0
  },
  //dropdown
  dropdown: {
    height: hp(hrp(24)),
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    width:"100%",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'black',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.4)",
    "marginLeft":wp(wrp(10))
  },
  selectedTextStyle: {
    fontSize: wp(wrp(16)),
    "color": "rgba(0, 0, 0, 0.6)",
    "marginLeft":wp(wrp(10))
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  inputSearchStyle: {
    height: hp(hrp(40)),
    fontSize: wp(wrp(16)),
    "color": "rgba(0, 0, 0, 0.6)",

  },
});