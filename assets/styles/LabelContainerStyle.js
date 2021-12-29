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
    
    labelContainer: {
        opacity: 1,
        position: "relative",
        backgroundColor: "transparent",
        marginTop: hp(hrp(0)),
        marginRight: wp(wrp(0)),
        marginBottom: hp(hrp(-5)),
        marginLeft: wp(wrp(0)),
        paddingTop: hp(hrp(0)),
        paddingRight: wp(wrp(0)),
        paddingBottom: hp(hrp(0)),
        paddingLeft: wp(wrp(0)),
        width: wp(wrp(366)),
        height: hp(hrp(36)),
  },
    labelItemContainer: {
        opacity: 1,
        backgroundColor:"#189AB4",
        position: "relative",
        width: wp(wrp(366)),
        height: hp(hrp(36)),
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
  },
  
    labelText: {
        opacity: 1,
        position: "relative",
        color: "rgba(252, 244, 244, 1)",
        fontSize: wp(wrp(17)),
        fontWeight: "500",
        fontStyle: "normal",
        fontFamily: "Roboto-Medium",
        textAlign:"center",
        marginLeft:hp(hrp(5))
  },
    iconStyle: {
        opacity: 1,
        position: "relative",
        width: wp(wrp(24)),
        height: hp(hrp(24)),
        backgroundColor: "transparent",
  },
});