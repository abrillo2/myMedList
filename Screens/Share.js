import React, {Suspense,useEffect,useState} from 'react';
import {Text, View} from 'react-native';
import {Image as ReactImage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Bullets} from 'react-native-easy-content-loader';

//components import
import HeaderSection from '../components/HeaderSection';
//import styles
import styles from '../assets/styles/ShareStyles'
import { useRef } from 'react/cjs/react.development';


export default function Share(){


    const state = {
      itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"],
      dataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
                 '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]'],
      interactionsComplete: false
    }

    let ScrollabelItemContainer= React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
          () => import("../components/ScrollabelItemContainer")
        );
      });

    const [listOfdata,setlistOfdata] = useState(null)
    const [dataFetched, setdataFetched] = useState(false)
    //import item list
    async function getData(){
                try {
                    const jsonValue = await AsyncStorage.getItem('@myMedList')
                    setlistOfdata(JSON.parse(jsonValue));
                    setdataFetched(true)
                } catch(e) {
                // error reading value
                }
    }


    useEffect(() => {
        getData()
        return () => {
            ScrollabelItemContainer = null; 
        }
      }, []);
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
                 {dataFetched ? <ScrollabelItemContainer  listButton={false}
                 data={listOfdata["slipInfo"]}
    dataKeys={state.dataKeys}/>:null}
            </Suspense>
          
            
        </View>
    );
  }