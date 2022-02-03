//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';


export default StyleSheet.create({

    buttonLayer : {
        position : "relative",
        backgroundColor : "#22bee2",
        borderTopLeftRadius : (wrp(4)),
        borderTopRightRadius : (wrp(4)),
        borderBottomLeftRadius : (wrp(4)),
        borderBottomRightRadius : (wrp(4)),
        width : (wrp(120)),
        height : (hrp(35)),
        shadowColor : "rgb(0,  0,  0)",
        shadowOpacity : 0.2,
        elevation : (wrp(7)),
        shadowOffset : {
          width : 0,
          height : (wrp(1))
    },
        shadowRadius : (wrp(5)),
        justifyContent :"center"
  },
    buttonLabel : {
        position : "relative",
        color : "rgba(255, 255, 255, 1)",
        fontSize : (wrp(16)),
        fontWeight : "500",
        fontFamily : "Roboto-Medium",
        letterSpacing: 1,
        textAlign :"center"
  },
});