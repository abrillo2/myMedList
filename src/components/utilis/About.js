//imports
import React from 'react';
import {Text, View,Image} from 'react-native';
//static
import { appDescription } from '../../../assets/static_resources/strings';
import styles from '../../../assets/styles/Utilis'
//componets
import Logo from './Logo';
export default function About(){
    return(<View
                style={{flex:1}}
    >
                <View
                        style={{flex:1,justifyContent:'center'}}
                >
                        <View style={styles.aboutBody}>
                                <View style={{alignItems:"center"}}>
                                        <Logo/>

                                </View>
                                                <Text style={styles.titleStyle}>
                                                        {"App Version: "+appDescription.appVersion}
                                                </Text>
                                
                                        <View style={styles.cpContianer}>
                                        <Text style= {styles.cpTitle}>
                                        {appDescription.appCopyRight}
                                        </Text>
                                        </View>
                        </View>
                </View>
                </View>
            )
        
}
