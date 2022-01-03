import React, {Suspense,useEffect,useState} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import { getData } from '../components/helpers/AsyncHelper';
import { Bullets} from 'react-native-easy-content-loader';
import { makeHtmlBody, createPDF } from '../components/helpers/shareHelper';
import InputModal from '../components/hooks/InputModal';
//components import
import HeaderSection from '../components/HeaderSection';
//import styles
import styles from '../assets/styles/ShareStyles'


export default function Share(props){
    const state = {
      itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"],
      dataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
                 '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]'],
      interactionsComplete: false
    }

    let ScrollabelItemContainer= React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 5 * 100)).then(
          () => import("../components/ScrollabelItemContainer")
        );
      });

    const [listOfdata,setlistOfdata] = useState(null)
    const [dataFetched, setdataFetched] = useState(false)
    const [activeToggel, setActiveToggel] = useState(true)
    const [openModal, setopenModal] = useState(false)
    //import item list
    async function getSavedData(){
        const jsonValue = await getData('@myMedListSlipInfo')
        let currentData = activeToggel ? jsonValue["slipInfo"] : (jsonValue["slipInfoDiscontinued"]?jsonValue["slipInfoDiscontinued"]:[] )
       
        setlistOfdata(currentData);
        setdataFetched(true)
    }

    async function modalData(data){
        setopenModal(false)
        if(data!=null){

            let shareInfo = data["sharedWith"]
            let saredWithLabel = []

            Object.keys(shareInfo).forEach( key => {
                saredWithLabel.push(shareInfo[key])
            })

            const statusShare = activeToggel ? "ACTIVE" : "DISCONTINUED"
            let htmlString = await makeHtmlBody(statusShare,saredWithLabel,listOfdata)
            let pdfURIString = await createPDF(htmlString)

            props.navigation.navigate("PdfViewer",{
                pdfURI:pdfURIString
            })            

            
            
        }
    }
    useEffect(() => {
        getSavedData()
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
                    <TouchableOpacity
                            onPress={()=> setopenModal(true)}
                        >
                        <ReactImage  source={require('../assets/img/whatsupIcon.png')} style={styles.iconContainer} />
                    </TouchableOpacity>
                    <ReactImage  source={require('../assets/img/gmailIcon.png')} style={styles.iconContainer} />
                    <ReactImage  source={require('../assets/img/smsIcon.png')} style={styles.iconContainer} />
                </View>
            
            </View>
            <Suspense fallback={<Bullets active listSize={dataFetched ? listOfdata.length:10}  />}>
                 {dataFetched ? <ScrollabelItemContainer  listButton={false}
                 data={listOfdata}
                 dataKeys={state.dataKeys}/>:null}
            </Suspense>
          
            
            <InputModal
                modalVisible={openModal}
                onPress={modalData}
            />
        </View>
    );
  }