//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp} from './Dim';


export default StyleSheet.create({
    
    halfinput: {
     opacity: 1,
     position: "relative",
     backgroundColor: "rgba(0, 0, 0, 0.043137254901960784)",
     marginTop: (hrp(5)),
     marginRight: (wrp(0)),
     marginBottom: (hrp(0)),
     marginLeft: (wrp(0)),
     paddingRight: (wrp(0)),
     paddingBottom: (hrp(0)),
     borderTopLeftRadius: (wrp(4)),
     borderTopRightRadius: (wrp(4)),
     borderBottomLeftRadius: (wrp(0)),
     borderBottomRightRadius: (wrp(0)) 
  },
    halfinputLabel: {
     opacity: 1,
     position: "relative",
     backgroundColor: "rgba(255, 255, 255, 0)",
     color: "rgba(34, 171, 226, 1)",
     fontSize: (wrp(14)),
     fontWeight: "500",
     fontFamily: "Roboto-Medium",
     textAlign: "left",
     marginTop:(hrp(10)),
     marginLeft:(wrp(10))
  },
    halfinputLabelIcon: {
     opacity: 1,
     position: "relative",
     backgroundColor: "transparent",
     flexDirection:"row",
     alignItems:'center',
     justifyContent:"space-between"
  },
    halfinputInput: {
     opacity: 1,
     position: "relative",
     color: "rgba(0, 0, 0, 0.8)",
     fontSize: (wrp(18)),
     fontWeight: "400",
     fontStyle: "normal",
     fontFamily: "Roboto-Medium",
     textAlign: "left",
     paddingTop:0,
     paddingBottom:0,
     paddingRight:(wrp(20)),
     paddingLeft:(wrp(10)),
     width:"100%"
  },  
    halfinputInput2: {
     opacity: 1,
     position: "relative",
     color: "rgba(0, 0, 0, 0.8)",
     fontSize: (wrp(18)),
     fontWeight: "400",
     fontStyle: "normal",
     fontFamily: "Roboto-Medium",
     textAlign: "center",
     paddingTop:0,
     paddingBottom:0,
     paddingLeft:(wrp(7)),
     paddingRight:(wrp(20)),
  },
    halfinputLabelIconColor:{
     width:(wrp(24)),
     height:(hrp(24)),
     marginRight:10,
  },
    halfinputLayer2Indicator: {
     opacity: 1,
     position: "relative",
     backgroundColor: "rgba(34, 171, 226, 1)",
     width: (("42%")),
     height: (hrp(2)),
     bottom:0
  },
  //dropdown
  dropdown: {
    height: (hrp(24)),
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    width:"100%",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'black',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: wrp(14),
  },
  placeholderStyle: {
    fontSize: wrp(16),
    color: "rgba(0, 0, 0, 0.4)",
     marginLeft:(wrp(10))
  },
  selectedTextStyle: {
    fontSize: (wrp(16)),
     color: "rgba(0, 0, 0, 0.6)",
     marginLeft:(wrp(10))
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  inputSearchStyle: {
    height: (hrp(40)),
    fontSize: (wrp(16)),
     color: "rgba(0, 0, 0, 0.6)",

  },
});

