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

    contentBody:{
        backgroundColor:"#3685b5",
        position:"relative",
        marginTop:-4,
        paddingTop:hp(hrp(15)),
        shadowColor: "rgb(0,  0,  0)",
        shadowOpacity: 0.2,
        elevation: wp(wrp(8)),
        shadowOffset: {
          width: wp(wrp(0)),
          height: hp(hrp(2))}
    },
    drawerHeader:{
        position:"relative",
        flexDirection:'column',
        alignItems:"center",
    },
    drawerHeaderIcon:{
        position:"relative",
        width:wp(wrp(72)),
        height:hp(hrp(64)),
    },
    drawerHeaderText:{
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "#00bfe9",
        fontSize: wp(wrp(20)),
        fontWeight: "400",
        fontFamily: "Roboto-Medium",
        textAlign: "center",
    },
    cpContianer:{
        marginTop:hp(hrp(10)),
        marginBottom:hp(hrp(10))
    },
    labelStyle:{
        color: '#3685b5', 
        fontSize: 15
    },
    separator:{
        opacity: 1,
        position: "relative",
        backgroundColor: "rgba(34, 171, 226, 0.5)",
        width: wp(("70%")),
        height: hp(hrp(1)),
        bottom:0
    },
    drawerItems:{
        paddingTop:hp(hrp(10))
    }
    
});