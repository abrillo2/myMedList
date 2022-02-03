//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';
export default StyleSheet.create({

    solidInputContainer: {
        paddingTop:(hrp(10)),
        opacity: 1,
        position: "relative",
        marginTop:(hrp(10))
  },
    solidInputBorderContainer: {
        opacity: 1,
        position: "relative",
        backgroundColor: "transparent",
        borderTopWidth:(wrp( 1)),
        borderTopColor: "rgba(0, 0, 0, 0.5019607843137255)",
        borderRightWidth:(wrp( 1)),
        borderRightColor: "rgba(0, 0, 0, 0.5019607843137255)",
        borderBottomWidth:(wrp( 1)),
        borderBottomColor: "rgba(0, 0, 0, 0.5019607843137255)",
        borderLeftWidth:(wrp( 1)),
        borderLeftColor: "rgba(0, 0, 0, 0.5019607843137255)",
        borderTopLeftRadius: (wrp( 4)),
        borderTopRightRadius: (wrp( 4)),
        borderBottomLeftRadius: (wrp( 4)),
        borderBottomRightRadius: (wrp( 4)),
        height: (hrp(56)),
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"space-between"
  },
    labelContainer: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "white",
        left: (wrp(10)),
        paddingLeft: (wrp(5)),
        paddingRight: (wrp(5)),
        top: (hrp(0))
  },
    labelTextStyle: {
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: (wrp(15)),
        fontWeight: "400",
        fontFamily: "Roboto-Bold",
        textAlign: "left",
  },
    textInputStyle: {
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgba(0, 0, 0, 0.7372549019607844)",
        fontSize: wrp(16),
        fontWeight: "400",
        fontFamily: "Roboto-Medium",
        textAlign: "left",
        width: "80%",
        height: "100%",
        paddingLeft: (wrp(12))
  }
});