//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';


export default StyleSheet.create({

    
    buttonTextIconContainer:{
        opacity: 1,
        position: "relative",
        backgroundColor: "transparent",
        flexDirection:"row",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
      },
    buttonContainer: {
        position: "relative",
        backgroundColor: "#22bee2",
        borderTopLeftRadius: (wrp(4)),
        borderTopRightRadius: (wrp(4)),
        borderBottomLeftRadius: (wrp(4)),
        borderBottomRightRadius: (wrp(4)),
        shadowColor: "rgb(0,  0,  0)",
        shadowOpacity: 0.1,
        elevation: (wrp(5)),
        shadowOffset: {
          width: 0,
          height: (wrp(1))
        },
        shadowRadius: (wrp(2)),
        margin:(wrp(1))
      },
    homeButtonLabel: { 
        opacity: 0.8,
        position: "relative",
        marginLeft:(hrp(5)),
        backgroundColor: "transparent",
        color: "rgba(255, 255, 255, 1)",
        fontSize: (wrp(16)),
        fontWeight: "400",
        letterSpacing: 1,
        fontFamily: "Roboto-Regular"
      }, 
    iconStyle: {
        opacity: 1,
        position: "relative",
        width: (wrp(24)),
        height: (hrp(24)),
        backgroundColor: "transparent",
      },
});