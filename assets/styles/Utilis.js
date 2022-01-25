//imports
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//helper functions
function hrp(value){
    return value*100 / 736;
  }
  
function wrp(value){
    return value*100 / 414;
}


export default StyleSheet.create({
    cpTitle:{
        position: "relative",
        color: "rgba(255, 255, 255, 1)",
        fontSize: wp(wrp(15)),
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
        fontSize: wp(wrp(20)),
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