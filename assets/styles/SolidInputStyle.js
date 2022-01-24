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

    solidInputContainer: {
        paddingTop:hp(hrp(10)),
        opacity: 1,
        position: "relative",
        marginTop:hp(hrp(10))
  },
    solidInputBorderContainer: {
        opacity: 1,
        position: "relative",
        backgroundColor: "transparent",
        borderTopWidth:wp(wrp( 1)),
        borderTopColor: "rgba(0, 0, 0, 0.5019607843137255)",
        borderRightWidth:wp(wrp( 1)),
        borderRightColor: "rgba(0, 0, 0, 0.5019607843137255)",
        borderBottomWidth:wp(wrp( 1)),
        borderBottomColor: "rgba(0, 0, 0, 0.5019607843137255)",
        borderLeftWidth:wp(wrp( 1)),
        borderLeftColor: "rgba(0, 0, 0, 0.5019607843137255)",
        borderTopLeftRadius: wp(wrp( 4)),
        borderTopRightRadius: wp(wrp( 4)),
        borderBottomLeftRadius: wp(wrp( 4)),
        borderBottomRightRadius: wp(wrp( 4)),
        height: hp(hrp(56)),
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"space-between"
  },
    labelContainer: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "white",
        left: wp(wrp(10)),
        paddingLeft: wp(wrp(5)),
        paddingRight: wp(wrp(5)),
        top: hp(hrp(0))
  },
    labelTextStyle: {
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: wp(wrp(15)),
        fontWeight: "400",
        fontFamily: "Roboto-Bold",
        textAlign: "left",
  },
    textInputStyle: {
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgba(0, 0, 0, 0.7372549019607844)",
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Roboto-Medium",
        textAlign: "left",
        width: "80%",
        height: "100%",
        paddingLeft: wp(wrp(12))
  }
});