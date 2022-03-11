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
    <Text style={props.home?styles.drawerHeaderText2:styles.drawerHeaderText}>
      {appDescription.drawerTitleDescription}
    </Text>
</View>
)
}