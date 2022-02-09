//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp,color} from './Dim';


export default StyleSheet.create({

    
    buttonTextIconContainer:{
        position: "relative",
        flexDirection:"row",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
      },
    buttonContainer: {
        position: "relative",
        backgroundColor: color.primary,
        borderTopLeftRadius: (wrp(4)),
        borderTopRightRadius: (wrp(4)),
        borderBottomLeftRadius: (wrp(4)),
        borderBottomRightRadius: (wrp(4)),
        shadowColor: color.shadowColorPrimary,
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
        color: color.bgColorPrimary,
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
      },
});