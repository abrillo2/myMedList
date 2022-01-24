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

    buttonLayer : {
        position : "relative",
        backgroundColor : "#22bee2",
        borderTopLeftRadius : wp(wrp(4)),
        borderTopRightRadius : wp(wrp(4)),
        borderBottomLeftRadius : wp(wrp(4)),
        borderBottomRightRadius : wp(wrp(4)),
        width : wp(wrp(120)),
        height : hp(hrp(35)),
        shadowColor : "rgb(0,  0,  0)",
        shadowOpacity : 0.2,
        elevation : wp(wrp(7)),
        shadowOffset : {
          width : 0,
          height : wp(wrp(1))
    },
        shadowRadius : wp(wrp(5)),
        justifyContent :"center"
  },
    buttonLabel : {
        position : "relative",
        color : "rgba(255, 255, 255, 1)",
        fontSize : wp(wrp(16)),
        fontWeight : "500",
        fontFamily : "Roboto-Medium",
        letterSpacing: 1,
        textAlign :"center"
  },
});