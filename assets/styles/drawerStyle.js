//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';


export default StyleSheet.create({

    contentBody:{
        backgroundColor:"#3685b5",
        position:"relative",
        marginTop:-4,
        paddingTop:(hrp(15)),
        shadowColor: "rgb(0,  0,  0)",
        shadowOpacity: 0.2,
        elevation: (wrp(8)),
        shadowOffset: {
          width: (wrp(0)),
          height: (hrp(2))}
    },
    drawerHeader:{
        position:"relative",
        flexDirection:'column',
        alignItems:"center",
    },
    drawerHeaderIcon:{
        position:"relative",
        width:(wrp(72)),
        height:(hrp(64)),
    },
    drawerHeaderText:{
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "#00bfe9",
        fontSize: (wrp(20)),
        fontWeight: "400",
        fontFamily: "Roboto-Medium",
        textAlign: "center",
    },
    cpContianer:{
        marginTop:(hrp(10)),
        marginBottom:(hrp(10))
    },
    labelStyle:{
        color: '#3685b5', 
        fontSize: 15
    },
    separator:{
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(34, 171, 226, 0.5)",
        width: (("70%")),
        height: (hrp(1)),
        bottom:0
    },
    drawerItems:{
        paddingTop:(hrp(10))
    }
    
});