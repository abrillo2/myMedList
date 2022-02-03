//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';

export default StyleSheet.create({
    
    labelContainer: {
        opacity: 1,
        position: "relative",
        backgroundColor: "red",
        marginTop: (hrp(0)),
        marginRight: (wrp(0)),
        marginBottom: (hrp(-5)),
        marginLeft: (wrp(0)),
        paddingTop: (hrp(0)),
        paddingRight: (wrp(0)),
        paddingBottom: (hrp(0)),
        paddingLeft: (wrp(0)),
        width: ('100%'),
        height: (hrp(36)),
  },
    labelItemContainer: {
        opacity: 1,
        backgroundColor:"#189AB4",
        position: "relative",
        width: ('100%'),
        height: (hrp(36)),
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
  },
  
    labelText: {
        opacity: 1,
        position: "relative",
        color: "rgba(252, 244, 244, 1)",
        fontSize: (wrp(17)),
        fontWeight: "500",
        fontStyle: "normal",
        fontFamily: "Roboto-Medium",
        textAlign:"center",
        marginLeft:(hrp(5))
  },
    iconStyle: {
        opacity: 1,
        position: "relative",
        width: (wrp(24)),
        height: (hrp(24)),
        backgroundColor: "transparent",
  },
});