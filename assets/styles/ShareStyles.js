//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';

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
      shareNavSocialMediaContainer: {
           flex:0.4,
           position: "relative",
           height:hrp(50),
           flexDirection: "row",
           alignItems: "center",
           justifyContent:'space-around',
           borderLeftWidth: 1,
           borderTopWidth: (wrp(1)),
           borderTopColor: "rgba(0, 0, 0, 0.5)",
           borderRightColor: "rgba(0, 0, 0, 0.5)",
           borderBottomWidth: (wrp(1)),
           borderBottomColor: "rgba(0, 0, 0, 0.5)",
           borderLeftColor: "rgba(0, 0, 0, 0.5)",
           borderRadius:(wrp(5)),
      },
      iconContainer: {
           opacity: 1,
           position: "relative",
           borderColor:'black',
           width:24,
           height:24,
      },
      toggelLabel: {
           opacity: 1,
           position: "relative",
           color: "rgba(56, 156, 196, 1)",
           fontSize: 17,
           fontWeight: "400",
           fontStyle: "normal",
           fontFamily: "Roboto",
           textAlign: "center",
      },
      righttogelinner: {
           opacity: 1,
           position: "relative",
           flex:0.6,
           padding:'1%',
           paddingBottom:'1%',
           paddingTop:'1%',
           justifyContent: "center",
      },
      iconContainerB:{
          borderRightWidth: (wrp(1)),
          flex:0.4,
          padding:5,
          height:'100%',
          justifyContent:'center',
          alignItems:'center',
          borderRightColor: "rgba(0, 0, 0, 0.5)",
         
      }
    });