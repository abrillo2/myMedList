import React, {Suspense,useEffect,useState} from 'react';
import {View} from 'react-native';
import { Bullets} from 'react-native-easy-content-loader';
import {getData, saveData} from '../components/helpers/AsyncHelper';

//import header section
import  HeaderSection  from '../components/HeaderSection';
//import body style
import ReconcileStyle from '../assets/styles/ReconcileStyle';

export default function Reconcilelist(props) {


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

    function listButtonPressed(action,itemId){
          switch (action){
              case "delete":

                let items = {...listOfdata["slipInfo"]}
                let updatedItems = removeItem(items);
                saveData(updatedItems,"@myMedListSlipInfo")
                setlistOfdata(updatedItems)
                break
              case "edit":
                items = {...listOfdata["slipInfo"]}
                props.navigation.navigate("AddSlipInfo",{
                  response:getItem(items,itemId)
                })
                break  
          }    
    }

    function getItem(items,itemId) {
      for (let index = 0; index < items.length; index++) {
        let item = items[index]
        let rootKey = Object.keys(item)[0]
        if(rootKey == itemId){
              return item
        }
      }
      return {}
    }
    
    function removeItem(items,itemId) {

      let updatedItems = {"slipInfo":[]}

      for (let index = 0; index < items.length; index++) {
        let item = items[index]
        let rootKey = Object.keys(item)[0]
        if(rootKey != itemId){
              updatedItems["slipInfo"].push(item)
        }
      }
      return updatedItems
      
    }

    function getComponent(){
      setScrollabelItemContainer(React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
          () => import("../components/ScrollabelItemContainer")
        );
      }));

    } 
    //import item list
    async function getSlipInfoData(){
        const slipInfoData = await getData('@myMedListSlipInfo')
        console.log("slip ", slipInfoData)
        setlistOfdata(slipInfoData);
        setdataFetched(true)
    }

    useEffect(() => {
        getComponent();
        getSlipInfoData();
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
          {dataFetched ? <ScrollabelItemContainer  
                              listButtonPressed={listButtonPressed}
                              listButton={true}
                              data={listOfdata["slipInfo"]}
                              dataKeys={state.dataKeys}/>:
          null}
        </Suspense>

    </View>
    );
  
}

