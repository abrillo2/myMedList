//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';

export default StyleSheet.create({
    singlereconcile: {
      opacity: 1,
      position: "relative",
      backgroundColor: "rgba(255, 255, 255, 1)",
      flex:1,
    },
    bodycontainer: {
      opacity: 1,
      position: "relative",
      backgroundColor: "transparent",
      marginTop: (hrp(10)),
      paddingTop: (hrp(0)),
      paddingRight: (wrp(0)),
      paddingBottom: (hrp(0)),
      paddingLeft: (wrp(0)),
  
      shadowColor: "rgb(0,  0,  0)",
      shadowOpacity: 0.2,
      elevation: (wrp(7)),
      shadowOffset: {
        width: 0,
        height: (wrp(1))
      },
      shadowRadius: (wrp(5)),
    },
    twinButtonContainer:{
      position:"relative",
      marginTop:(hrp(10)),
      marginBottom:(hrp(30)),
      paddingLeft:"5%",
      paddingRight:"5%",
      flexDirection:"row",
      width: ("100%"),
      justifyContent:"space-between"
   },  
   hallfInputContainer: {
    opacity: 1,
    position: "relative",
    backgroundColor: "transparent",
    width: ("100%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //collapseable view stye
  collapseStyle:{
    position:"relative"
  }
  
  });