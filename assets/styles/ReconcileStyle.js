//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';

export default  StyleSheet.create({
  reconcilelist: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: (hrp(736)),
    flex:1
  },

scrollr: {
  opacity: 1,
  position: "relative",
  backgroundColor: "transparent",
  marginTop: (hrp(10)),
  width: ("100%"),
  height: ("100%"),
},

scroll2r: {
  opacity: 1,
  position: "relative",
  backgroundColor: "transparent",
},

reconcilelist1_bodycontainerr: {
  opacity: 1,
  position: "relative",
  backgroundColor: "transparent",
  paddingRight: (wrp(10)),
  paddingBottom: (hrp(10)),
  paddingLeft: (wrp(10)),
  flexDirection: "column"
},
listlabelcontainerr: {
  opacity: 1,
  position: "relative",
  backgroundColor: "transparent",
  flexDirection: "row"
},
labelTopContainerR: {
  opacity: 1,
  position: "relative",
  backgroundColor: "transparent",
  width: (wrp( 150)),
  height: (hrp( 28)),
},
labelContainerR: {
  opacity: 1,
  position: "relative",
  backgroundColor: "rgba(56, 156, 196, 1)",
  borderTopWidth: (wrp(2)),
  borderTopColor: "rgba(184, 184, 184, 1)",
  borderRightWidth: (wrp(2)),
  borderRightColor: "rgba(184, 184, 184, 1)",
  borderBottomWidth: (wrp(2)),
  borderBottomColor: "rgba(184, 184, 184, 1)",
  borderLeftWidth: (wrp(2)),
  borderLeftColor: "rgba(184, 184, 184, 1)",
  borderTopLeftRadius: (wrp(4)),
  borderTopRightRadius: (wrp(4)),
  width: (wrp( 150)),
  height: (hrp( 28)),
  flexDirection:"row",
  justifyContent:"center"
},
labelTextStyleR: {
  opacity: 1,
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, 0)",
  color: "rgba(255, 255, 255, 1)",
  fontSize: 16,
  fontWeight: "400",
  fontStyle: "normal",
  fontFamily: "Roboto-Medium",
  textAlign: "center",
  lineHeight: (hrp(24)),
},
listItemsContainer: {
  opacity: 1,
  position: "relative",
  backgroundColor: "transparent",
  flexDirection:"row"
},

itemTextContainer: {
  opacity: 1,
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, 1)",
  borderTopWidth: (wrp(2)),
  borderTopColor: "rgba(151, 151, 151, 1)",
  borderRightWidth: (wrp(2)),
  borderRightColor: "rgba(151, 151, 151, 1)",
  borderBottomWidth: (wrp(2)),
  borderBottomColor: "rgba(151, 151, 151, 1)",
  borderLeftWidth: (wrp(2)),
  borderLeftColor: "rgba(151, 151, 151, 1)",
  width: (wrp( 150)),
  height: (hrp( 28)),
  paddingLeft: (wrp(10))
},
itemValStyle: {
  opacity: 1,
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, 0)",
  color: "rgba(0, 0, 0, 0.8)",
  fontSize: (wrp(16)),
  fontWeight: "400",
  fontFamily: "Roboto-Medium",
  textAlign: "left",
},
actionButonContainer: {
  opacity: 1,
  position: "relative",
  backgroundColor: "transparent",
  marginLeft: (wrp( -5)),
  flexDirection:"row"
},
butonIconContainer: {
  opacity: 1,
  position: "relative",
  backgroundColor: "rgba(34, 171, 226, 1)",
  borderTopLeftRadius: (wrp(4)),
  borderTopRightRadius: (wrp(4)),
  borderBottomLeftRadius: (wrp(4)),
  borderBottomRightRadius: (wrp(4)),
  width: (wrp( 48)),
  height: (hrp(26)),
  justifyContent:"center",
  alignItems:"center",
  marginRight:(wrp(10))
},

butonIconContainer2: {
  flexDirection:"row",
  justifyContent:"space-between",
  marginLeft:(wrp(5))
},

iconStyle: {
  opacity: 1,
  position: "relative",
  width: (wrp( 24)),
  height: (hrp( 24)),
},
});