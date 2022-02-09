//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp,color} from './Dim';

export default StyleSheet.create ({
    share: {
           opacity: 1,
           position: "relative",
           backgroundColor: "rgba(255, 255, 255, 1)",
           width:("100%"),
           height:("100%"),
      },
      shareNavContainer: {
           opacity: 1,
           position: "relative",
           backgroundColor: "transparent",
           width:("100%"),
           flexDirection: "row",
           justifyContent: 'space-between',
           padding:'2%'
      },
    
      toggelLabel: {
           opacity: 1,
           position: "relative",
           color: "rgba(56, 156, 196, 1)",
           fontSize: 20,
           fontWeight: "400",
           fontStyle: "normal",
           fontFamily: "Roboto",
           width:'100%',
           textAlign: "center",
      },
    });