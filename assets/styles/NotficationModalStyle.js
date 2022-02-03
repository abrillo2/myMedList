//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';

export default StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      width:"80%",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      opacity: 1,
      position: "relative",
      backgroundColor: "rgba(255, 255, 255, 0)",
      color: "rgba(34, 171, 226, 1)",
      fontSize: (wrp(17)),
      fontWeight: "500",
      fontFamily: "Roboto-Bold",
      marginBottom:"10%",
      textAlign:"center"
    },
    twinButtonContainer:{
      position:"relative",
      marginTop:(hrp(50)),
      marginBottom:(hrp(20)),
      flexDirection:"row",
      width:"100%",
      justifyContent:"space-evenly",
      alignItems:"center"
   },  
  });