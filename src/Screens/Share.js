import React, {Suspense,useEffect,useState} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import { getData } from '../helpers/AsyncHelper';
import { Bullets} from 'react-native-easy-content-loader';
import InputModal from '../hooks/InputModal';
//components import
//import styles
import styles from '../../assets/styles/ShareStyles'
import { useIsFocused } from '@react-navigation/native';
//import notification modal
import  Notification from '../hooks/Notification'
//static
import colors from '../../assets/static_resources/colors';
import appLabels,{appDescription} from '../../assets/static_resources/strings';


export default function Share(props){
    const isFocused = useIsFocused();
    const [state,setState] = useState({
      itemLabels : ["Medicine", "Date filled", "Doctor", "Refills left","Strength","Direction","Disease",""],
      dataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
                 '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]',
                 '["medicationDetails"]["strength"]','["medicationDetails"]["direction"]',
                 '["medicationDetails"]["diagnosis"]'],
      interactionsComplete: false
    })

    let ScrollabelItemContainer= React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 5 * 100)).then(
          () => import("../components/ScrollabelItemContainer")
        );
      });

    const [listOfdata,setlistOfdata] = useState(null)
    const [dataFetched, setdataFetched] = useState(false)
    const [activeToggel, setActiveToggel] = useState(true)
    const [openModal, setopenModal] = useState(false)
    const [client,setCllient] = useState("email")
    const [sortIndex,setSortIndex] = useState(0)
    const [personalData,setPersonalData] = useState(null)
    //for notification
    const [openModal2, setOpenModal2] = useState(false)
    const [opacity,setOpacity] = useState(1)
    const [showTwin, setShowTwin] = useState(true)
    const [notificationTitle,setNotificationTitle] = useState(null)
   //import item list
    async function getSavedData(){
        const jsonValue = await getData('@myMedListSlipInfo')
        let personalData = await getData("@myMedListMyInfo")

        if (jsonValue != null){
            let currentData = activeToggel ? jsonValue["slipInfo"] : (jsonValue["slipInfoDiscontinued"]?jsonValue["slipInfoDiscontinued"]:[] )
            
            let itemState = {...state}
            let labelItem = activeToggel ? "Date added" : "Stop date"
            let keyItem = activeToggel ? '["medicationDetails"]["dateAdded"]' : '["medicationDetails"]["stopDate"]'
            
            itemState.itemLabels[7] = labelItem
            itemState.dataKeys[7] = keyItem
            setlistOfdata(currentData);
            setdataFetched(true)
            setState(itemState)
            setPersonalData(personalData)

        }else{
            setOpacity(0.2)
            setNotificationTitle(appDescription.reconcileListAddItemDescription)
            setOpenModal2(true)
        }
    }

    async function modalData(){
        setopenModal(false)
        setOpacity(1)
    }

    function dialogConfirmed(data,confirmed){
        setOpenModal2(false)
        setOpacity(1)
    }

    function iconPressed(client){
        setOpacity(0.2)
        let status=activeToggel ? appLabels.active : appLabels.discontinued
        setNotificationTitle(appDescription.shareToggelDescription+status+" list")
        setShowTwin(false)
        if(listOfdata !== null){
            if(listOfdata.length >= 1){

                if(personalData == null){
                    setNotificationTitle(appDescription.shareSetPersonalDataDescription)
                    setOpenModal2(true)
                }else{
                    setopenModal(true)
                    setCllient(client)
                }
            }else{
                setOpenModal2(true)
            }
        }else{
            setOpenModal2(true)
            
        }
    }

    function sort(index){
        setSortIndex(index)
      }

    useEffect(() => {
        if(isFocused){
          getSavedData()
        }
        return () => {
        }
      }, [activeToggel,useIsFocused()]);
    return (
        <View  style={styles.share}>
            <View style={{opacity:opacity}}>
                <View  style={styles.shareNavContainer}>
                    <View  style={styles.shareNavToggelContainer}>
                        <TouchableOpacity
                            onPressIn={()=>{setActiveToggel(true)}}
                            style={styles.toggelContainer}>
                            <View  style={activeToggel ? [styles.leftTogelInner,{
                                backgroundColor: colors.activeColor,borderRightWidth: ((1))}]:[styles.leftTogelInner]}>
                                <Text  style={styles.toggelLabel}>{appLabels.active}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPressIn={()=>{setActiveToggel(false)}}  
                            style={styles.toggelContainer}>
                            <View  style={!activeToggel ? [styles.righttogelinner,{
                                backgroundColor: colors.activeColor,borderLeftWidth: ((1))}]:
                                [styles.righttogelinner]}>
                                <Text  style={styles.toggelLabel}>{appLabels.discontinued}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.shareNavSocialMediaContainer}>
                        <TouchableOpacity
                                onPress={()=> iconPressed(appLabels.whatsApp)}
                            >
                            <ReactImage  source={require('../../assets/img/whatsupIcon.png')} style={styles.iconContainer} />
                        </TouchableOpacity>
                    
                        <TouchableOpacity
                                onPress={()=> iconPressed(appLabels.email)}
                            >
                        <ReactImage  source={require('../../assets/img/gmailIcon.png')} style={styles.iconContainer} />
                        </TouchableOpacity>
                        <TouchableOpacity
                                onPress={()=> iconPressed(appLabels.sms)}
                            >
                        <ReactImage  source={require('../../assets/img/smsIcon.png')} style={styles.iconContainer} />
                        </TouchableOpacity>
                    </View>
                
                </View>
                <Suspense fallback={<Bullets active listSize={dataFetched ? listOfdata.length:10}  />}>
                    {dataFetched ? <ScrollabelItemContainer  listButton={false}
                    data={listOfdata}
                    itemlen={state.itemLabels.length}
                    itemLabels={state.itemLabels}
                    dataKeys={state.dataKeys}
                    onPress={sort}
                    sortIndex={sortIndex}/>:null}
                </Suspense>

            </View>
            <InputModal
                    modalVisible={openModal}
                    onPress={modalData}
                    client={client}
                    status={activeToggel ? appLabels.active : appLabels.discontinued}
                    listOfdata={listOfdata}
                    navigation={props.navigation}
                />
            <Notification
                    modalVisible={openModal2}
                    onPress={dialogConfirmed}
                    pTitle={notificationTitle}
                    lTitle={appLabels.ok}
                    rTitle={appLabels.cancel}
                    showTwin={showTwin==null ? true:false}
                    sTitle={appLabels.ok}
                />
        </View>
    );
  }