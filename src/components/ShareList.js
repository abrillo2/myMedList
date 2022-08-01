import React, {useEffect,useRef,useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import InputModal from '../hooks/InputModal';
//components import
import ReconcileItems from './ReconcileItems';
import HeaderSection from './HeaderSection';
//import styles
import styles from '../../assets/styles/ShareStyles'
//import notification modal
import  Notification from '../hooks/Notification'
//static
import appLabels,{appDescription} from '../../assets/static_resources/strings';


export default function ShareList(props){
  
    const [openModal, setopenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)

    const client = useRef('email')
    const sortIndex = useRef(0)
    const notificationTitle = useRef(null)
    

    const [opacity,setOpacity] = useState(1)
    const [refresh, setRefresh] = useState(true)


   function getSavedData(){ 

        if (props.data != null){
           
        }else{
            setOpacity(0.2)
            notificationTitle.current=(appDescription.reconcileListAddItemDescription)
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

        if(props.data == null){
            props.navigation.navigate(appLabels.addPhotoTitle)
        }else if(props.personalData == null){
            props.navigation.navigate(appLabels.myInfoTitle)
        }
    }

    function iconPressed(cl){
            
            if(cl == appLabels.active){

                props.refreshHandler()

            }else if(props.personalData == null){
                notificationTitle.current=(appDescription.shareSetPersonalDataDescription)
                setOpenModal2(true)
            }else{
                    setopenModal(true)
                    client.current=cl
            }
    }

    function sort(index){
        
        sortIndex.current=(index)

        let Temprefresh = !refresh
        setRefresh(Temprefresh)
    }

    useEffect(() => {
          getSavedData()
        return () => {
        }
      }, [props.data]);
    return (
         <View  style={styles.share}>
             <HeaderSection navigation={props.navigation} Title={appLabels.shareTitle} 
                    iconPressed={iconPressed}
                    disabled = {props.data.length <= 0}
            />
        
        <ScrollView
                    horizontal={false}
                >
            <View style={{opacity:opacity}}>
                <View  style={styles.shareNavContainer}>
              
                  
                         <Text  style={styles.toggelLabel}>{props.title.toUpperCase()}</Text>
                
                </View>

                <ReconcileItems      
                                    refreshHandler={props.refreshHandler}
                                    listButton={false}
                                     sortIndex={sortIndex.current}
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
                    client={client.current}
                    status={props.status}
                    listOfdata={props.data}
                    navigation={props.navigation}
                />
            <Notification
                    modalVisible={openModal2}
                    onPress={dialogConfirmed}
                    pTitle={notificationTitle.current}
                    lTitle={appLabels.ok}
                    rTitle={appLabels.cancel}
                    showTwin={true}
                    sTitle={appLabels.ok}
                />
        </ScrollView>
        </View>
    );
  }