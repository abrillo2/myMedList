import React from 'react';
import {Text, View,Image} from 'react-native';
//component import


//static res
import { appDescription} from '../../assets/static_resources/strings';
//component
//drawer list
//Style import
import styles from '../../assets/styles/drawerStyle'

export default function Logo(props){



return(
    <View style={styles.drawerHeader}>
    <Image
        style={styles.drawerHeaderIcon}
        source={require("../../assets/img/logo.png")}
    />
    
    {props.home?
    
                <View style={{backgroundColor:'white',borderColor:"black",borderWidth:1,padding:2,marginTop:5}}>
                    <Text style={[styles.drawerHeaderText,{fontSize:props.fontSize,fontWeight:'700'}]}>
                    {appDescription.drawerTitleDescription}
                  </Text>
                </View>
    :<Text style={props.home?styles.drawerHeaderText2:styles.drawerHeaderText}>
      {appDescription.drawerTitleDescription}
    </Text>}
</View>
)
}