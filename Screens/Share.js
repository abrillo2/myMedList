import React, {Suspense,useEffect,useState} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Bullets} from 'react-native-easy-content-loader';
//components import
import HeaderSection from '../components/HeaderSection';
//import styles
import styles from '../assets/styles/ShareStyles'


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
    const [activeToggel, setActiveToggel] = useState(true)
    //import item list
    async function getData(){
                console.log("current data: ", activeToggel)
                try {
                    const jsonValue = await AsyncStorage.getItem('@myMedList')
                    let allData = JSON.parse(jsonValue)
                    let currentData = activeToggel ? allData["slipInfo"] : (allData["slipInfoDiscontinued"]?allData["slipInfoDiscontinued"]:[] )
                    setlistOfdata(currentData);
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
      }, [activeToggel]);
    
    return (
        <View  style={styles.share}>

          
            <HeaderSection Title={"SHARE"}/> 
            <View  style={styles.shareNavContainer}>
                <View  style={styles.shareNavToggelContainer}>
                    <TouchableOpacity
                        onPressIn={()=>{setActiveToggel(true)}}
                        style={styles.toggelContainer}>
                        <View  style={activeToggel ? [styles.leftTogelInner,{
                             backgroundColor: "rgba(151, 151, 151, 0.5)",borderRightWidth: ((1))}]:[styles.leftTogelInner]}>
                            <Text  style={styles.toggelLabel}>ACTIVE</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPressIn={()=>{setActiveToggel(false)}}  
                        style={styles.toggelContainer}>
                        <View  style={!activeToggel ? [styles.righttogelinner,{
                             backgroundColor: "rgba(151, 151, 151, 0.5)",borderLeftWidth: ((1))}]:
                             [styles.righttogelinner]}>
                            <Text  style={styles.toggelLabel}>DISCONTINUED</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View  style={styles.shareNavSocialMediaContainer}>
                    <ReactImage  source={require('../assets/img/whatsupIcon.png')} style={styles.iconContainer} />
                    <ReactImage  source={require('../assets/img/gmailIcon.png')} style={styles.iconContainer} />
                    <ReactImage  source={require('../assets/img/smsIcon.png')} style={styles.iconContainer} />
                </View>
            
            </View>
            <Suspense fallback={<Bullets active listSize={dataFetched ? listOfdata.length:10}  />}>
                 {dataFetched ? <ScrollabelItemContainer  listButton={false}
                 data={listOfdata}
    dataKeys={state.dataKeys}/>:null}
            </Suspense>
          
            
        </View>
    );
  }