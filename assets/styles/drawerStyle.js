//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp,color} from './Dim';


export default StyleSheet.create({

    contentBody:{
        backgroundColor:color.bgColorSecondary,
        position:"relative",
        marginTop:-4,
        paddingTop:(hrp(15)),
        shadowColor: color.shadowColorPrimary,
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
        width:80,
        height:80,
    },
    drawerHeaderText:{
        position: "relative",
        color: color.textColorSeconDary,
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
        color: color.bgColorSecondary, 
        fontSize: 15
    },
    separator:{
        opacity: 1,
        position: "relative",
        backgroundColor: color.bgColortertiary,
        width: (("70%")),
        height: (hrp(1)),
        bottom:0
    },
    drawerItems:{
        paddingTop:(hrp(10))
    }
    
});