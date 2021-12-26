import React, {Component,Suspense,useEffect,useRef, useState } from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage,InteractionManager} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Bullets, InstagramLoader } from 'react-native-easy-content-loader';

//components import
import HeaderSection from '../components/HeaderSection';
//import styles
import styles from '../assets/styles/ShareStyles'


export default function Share(){


    const state = {
      itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"],
      interactionsComplete: false
    }

    const ScrollabelItemContainer= React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
          () => import("../components/ScrollabelItemContainer")
        );
      });

    useEffect(() => {
        return () => {
            ScrollabelItemContainer = null;
            
        }
      }, []);

    
    //import item list
    function importListOfItems(){
        return
    }

    return (
        <View  style={styles.share}>

          
            <HeaderSection Title={"SHARE"}/>
            <View  style={styles.shareNavContainer}>
                <View  style={styles.shareNavToggelContainer}>
                    <View  style={styles.toggelRightContainer}>
                        <View  style={styles.toggelRightContainerInnerLight}>
                        <Text  style={styles.toggelRightLabel}>ACTIVE</Text>
                        </View>
                    </View>

                    <View  style={styles.toggelRightContainer}>
                        <View  style={styles.toggelleftinnerlight}>
                        <Text  style={styles.toggelRightLabel}>DISCONTINUED</Text>
                        </View>
                    </View>
                </View>
                <View  style={styles.shareNavSocialMediaContainer}>
                    <ReactImage  source={require('../assets/whatsupIcon.png')} style={styles.iconContainer} />
                    <ReactImage  source={require('../assets/gmailIcon.png')} style={styles.iconContainer} />
                    <ReactImage  source={require('../assets/smsIcon.png')} style={styles.iconContainer} />
                </View>
            
            </View>
            <Suspense fallback={<Bullets active listSize={10} />}>
                  <ScrollabelItemContainer  listButton={false}/>
            </Suspense>
          
            
        </View>
    );
  }