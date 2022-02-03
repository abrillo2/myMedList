//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';


export default StyleSheet.create({
    cpTitle:{
        position: "relative",
        color: "rgba(255, 255, 255, 1)",
        fontSize: (wrp(15)),
        fontWeight: "400",
        fontFamily: "Roboto-Medium",
        textAlign: "center",
        color:"#464655"
    },   
    aboutBody:{
        flex:0.7,
        position:"relative",
        alignItems:"center",
        justifyContent: 'space-between',
    },
    titleStyle:{
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "#00bfe9",
        fontSize: (wrp(20)),
        fontWeight: "400",
        fontFamily: "Roboto-Medium",
        textAlign: "center"
    },
    cpContianer:{
       position:'relative'
    },
    labelStyle:{
        color: '#3685b5', 
        fontSize: 15
    },
});