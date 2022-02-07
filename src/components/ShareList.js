import React, {useEffect,useState} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import InputModal from '../hooks/InputModal';
//components import
import ReconcileItems from './ReconcileItems';
//import styles
import styles from '../../assets/styles/ShareStyles'
import { useIsFocused } from '@react-navigation/native';
//import notification modal
import  Notification from '../hooks/Notification'
//static
import appLabels,{appDescription} from '../../assets/static_resources/strings';


export default function ShareList(props){
   
    const isFocused = useIsFocused();


    const [listOfdata,setlistOfdata] = useState(null)
  
    const [openModal, setopenModal] = useState(false)
    const [client,setCllient] = useState("email")
    const [sortIndex,setSortIndex] = useState(0)

    const [openModal2, setOpenModal2] = useState(false)
    const [opacity,setOpacity] = useState(1)
    const [showTwin, setShowTwin] = useState(true)
    const [notificationTitle,setNotificationTitle] = useState(null)

   const [refresh, setRefresh] = useState(true)

  

   function getSavedData(){

        if (props.data != null){
            setlistOfdata(props.data)
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

        if(listOfdata == null){
            props.navigation.navigate(appLabels.addPhotoTitle)
        }else if(props.personalData == null){
            props.navigation.navigate(appLabels.myInfoTitle)
        }
    }

    function iconPressed(client){
        if(listOfdata !== null){
            if(listOfdata.length >= 1){

                if(props.personalData == null){
                    setNotificationTitle(appDescription.shareSetprops.personalDataDescription)
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
        setRefresh(false)
        setSortIndex(index)
    }

    useEffect(() => {
        if(isFocused ){
          getSavedData()
        }else{
          setRefresh(true)
        }
        return () => {
        }
      }, [props.data]);
    return (
         <View  style={styles.share}>
            <View style={{opacity:opacity}}>
                <View  style={styles.shareNavContainer}>
              
                    <View  style={styles.righttogelinner}>
                         <Text  style={styles.toggelLabel}>{props.title.toUpperCase()}</Text>
                    </View>
                    <View  style={styles.shareNavSocialMediaContainer}>
                        <TouchableOpacity
                                onPress={()=> iconPressed(appLabels.whatsApp)}
                                style={styles.iconContainerB}
                            >
                            <ReactImage  source={require('../../assets/img/whatsupIcon.png')} style={styles.iconContainer} />
                        </TouchableOpacity>
                    
                        <TouchableOpacity
                                onPress={()=> iconPressed(appLabels.email)}
                                style={styles.iconContainerB}
                            >
                        <ReactImage  source={require('../../assets/img/gmailIcon.png')} style={styles.iconContainer} />
                        </TouchableOpacity>
                        <TouchableOpacity
                                onPress={()=> iconPressed(appLabels.sms)}
                                style={styles.iconContainerB}
                            >
                        <ReactImage  source={require('../../assets/img/smsIcon.png')} style={styles.iconContainer} />
                        </TouchableOpacity>
                    </View>
                
                </View>
                <ReconcileItems      listButton={false}
                                     sortIndex={sortIndex}
                                     listButton={false}
                                     data={props.data}
                                     dataKeys={props.dataKeys}
                                     itemlen={props.itemLabels.length}
                                     itemLabels={props.itemLabels}
                                     listButtonPressed={null}
                                     
                                     onPress={sort}
                                     refresh={refresh}/>

            </View>
            <InputModal
                    modalVisible={openModal}
                    onPress={modalData}
                    client={client}
                    status={props.status}
                    listOfdata={props.data}
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