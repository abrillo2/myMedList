//imports
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//helper functions
function hrp(value){
    return value*100 / 736;
  }
  
function wrp(value){
    return value*100 / 414;
}

export default  StyleSheet.create({
  reconcilelist: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: wp(wrp(414)),
    height: hp(hrp(736)),
    flex:1
  },

scrollr: {
  opacity: 1,
  position: "relative",
  backgroundColor: "transparent",
  marginTop: hp(hrp(10)),
  width: wp("100%"),
  height: hp("100%"),
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
  paddingRight: wp(wrp(10)),
  paddingBottom: hp(hrp(10)),
  paddingLeft: wp(wrp(10)),
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
  width: wp(wrp( 150)),
  height: hp(hrp( 28)),
},
labelContainerR: {
  opacity: 1,
  position: "relative",
  backgroundColor: "rgba(56, 156, 196, 1)",
  borderTopWidth: wp(wrp(2)),
  borderTopColor: "rgba(184, 184, 184, 1)",
  borderRightWidth: wp(wrp(2)),
  borderRightColor: "rgba(184, 184, 184, 1)",
  borderBottomWidth: wp(wrp(2)),
  borderBottomColor: "rgba(184, 184, 184, 1)",
  borderLeftWidth: wp(wrp(2)),
  borderLeftColor: "rgba(184, 184, 184, 1)",
  borderTopLeftRadius: wp(wrp(4)),
  borderTopRightRadius: wp(wrp(4)),
  width: wp(wrp( 150)),
  height: hp(hrp( 28)),
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
  lineHeight: hp(hrp(24)),
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
  borderTopWidth: wp(wrp(2)),
  borderTopColor: "rgba(151, 151, 151, 1)",
  borderRightWidth: wp(wrp(2)),
  borderRightColor: "rgba(151, 151, 151, 1)",
  borderBottomWidth: wp(wrp(2)),
  borderBottomColor: "rgba(151, 151, 151, 1)",
  borderLeftWidth: wp(wrp(2)),
  borderLeftColor: "rgba(151, 151, 151, 1)",
  width: wp(wrp( 150)),
  height: hp(hrp( 28)),
  paddingLeft: wp(wrp(10))
},
itemValStyle: {
  opacity: 1,
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, 0)",
  color: "rgba(0, 0, 0, 0.8)",
  fontSize: wp(wrp(16)),
  fontWeight: "400",
  fontFamily: "Roboto-Medium",
  textAlign: "left",
},
actionButonContainer: {
  opacity: 1,
  position: "relative",
  backgroundColor: "transparent",
  marginLeft: wp(wrp( -5)),
  flexDirection:"row"
},
butonIconContainer: {
  opacity: 1,
  position: "relative",
  backgroundColor: "rgba(34, 171, 226, 1)",
  borderTopLeftRadius: wp(wrp(4)),
  borderTopRightRadius: wp(wrp(4)),
  borderBottomLeftRadius: wp(wrp(4)),
  borderBottomRightRadius: wp(wrp(4)),
  width: wp(wrp( 48)),
  height: hp(hrp(26)),
  justifyContent:"center",
  alignItems:"center",
  marginRight:wp(wrp(10))
},

butonIconContainer2: {
  flexDirection:"row",
  justifyContent:"space-between",
  marginLeft:wp(wrp(5))
},

iconStyle: {
  opacity: 1,
  position: "relative",
  width: wp(wrp( 24)),
  height: hp(hrp( 24)),
},
});