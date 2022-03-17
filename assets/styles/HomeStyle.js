//imports
import {StyleSheet} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { wrp ,hrp} from './Dim';

export default StyleSheet.create ({
    Home: {
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: ('100%'),
        height: ('100%'),
        flex: 1
    },
    homeTitleTextStyle: {
        position: "relative",
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: (wrp(35)),
        letterSpacing: 1,
        fontFamily: "Roboto-LightItalic",
        textAlign: "center",
    },
    homeBgStyle: {
        flex:1,
        alignItems:"center",
        justifyContent:'space-between',
    },
    twinButtonContainer:{
        flexDirection:"row",
        width : '80%',
        justifyContent:"space-between",
        position:"relative",
   }
  
  });