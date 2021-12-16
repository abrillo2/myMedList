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
    
  "labelContainer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(-5)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(366)),
    "height": hp(hrp(36)),
    //"left": wp(wrp(4)),
    //"top": hp(hrp(220))
  },
  "labelElevation": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(12)),
    "height": hp(hrp(7.4)),
    "left": wp(wrp(17)),
    "top": hp(hrp(14.6))
  },
  "labelElevationColor": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(12)),
    "height": hp(hrp(7.4)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "labelContainerLayer2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(366)),
    "height": hp(hrp(36)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "labelContainerLayer3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(366)),
    "height": hp(hrp(36)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "labelContainerLayer3Color": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(366)),
    "height": hp(hrp(36)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "labelContainerLayer3State": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(0)),
    "height": hp(hrp(0)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "labelContainerLayer3StateLight": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(17, 102, 141, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": wp(wrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": wp(wrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "width": wp(wrp(-1)),
    "height": hp(hrp(-1)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "labelText": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(252, 244, 244, 1)",
    "fontSize": wp(wrp(14)),
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto-Medium",
    "textAlign": "left",
    "lineHeight": wp(wrp(16)),
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(157)),
    "height": hp(hrp(21)),
    "left": wp(wrp(40)),
    "top": hp(hrp(11.5))
  },
  "labelIcon": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(12)),
    "height": hp(hrp(7.4)),
    "left": wp(wrp(17)),
    "top": hp(hrp(14.6))
  },
  "labelIconColor": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(12)),
    "height": hp(hrp(7.4)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
});