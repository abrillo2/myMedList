//imports
import React from 'react';
import {Text, View} from 'react-native';
import Icon from './hooks/Icon';
import { appDescription } from '../../assets/static_resources/strings';
import styles from '../../assets/styles/Utilis'
//Header section
export default function Copyright(){
    return(
            <View style={styles.copyRightContainer}>
               <Text style={styles.coprightText}>
                     {appDescription.appCopyRight}
               </Text>
            </View>            )    
}
