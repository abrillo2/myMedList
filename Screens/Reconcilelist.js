import React, {Suspense,useEffect,useState} from 'react';
import {View} from 'react-native';
import { Bullets} from 'react-native-easy-content-loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import header section
import  HeaderSection  from '../components/HeaderSection';
//import body style
import ReconcileStyle from '../assets/styles/ReconcileStyle';

export default function Reconcilelist() {


    const state = {
        itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"],
        dataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
                   '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]'],
        interactionsComplete: false
      };

      const [listOfdata,setlistOfdata] = useState(null)
      const [dataFetched, setdataFetched] = useState(false)

    //import lazy component
    const [ScrollabelItemContainer,setScrollabelItemContainer]= useState(null)
    
    function getComponent(){

      setScrollabelItemContainer(React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
          () => import("../components/ScrollabelItemContainer")
        );
      }));

    } 
    //import item list
    async function getData(){
        
        try {
              
              const jsonValue = await AsyncStorage.getItem('@myMedList')
              setlistOfdata(JSON.parse(jsonValue));
              setdataFetched(true)
        } catch(e) {
          // error reading value
          console.log(e)
        }
}

    useEffect(() => {
        getComponent();
        getData();
        return () => {
          setScrollabelItemContainer(null);    
        }
      }, []);

    return (
    <View data-layer="7efa9ff4-a5ac-46ee-9a8f-90047aa52600" style={ReconcileStyle.reconcilelist}>
       
        {/** APP BAR View begins */}
        <HeaderSection Title={"RECONICLE"}/>
        {/** APP BAR View ends */}

        {/** RECONCILE list view begins */}
        <Suspense fallback={<Bullets active  listSize={dataFetched ? listOfdata["slipInfo"].length:10}/>}>
          {dataFetched ? <ScrollabelItemContainer  listButton={true}
                              data={listOfdata["slipInfo"]}
                              dataKeys={state.dataKeys}/>:
          null}
        </Suspense>

    </View>
    );
  
}

