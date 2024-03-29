//imports
import {Text, View,TouchableOpacity,SectionList} from 'react-native';
import Icon from '../hooks/Icon.js';
//import reconcile items
import ReconcileStyle from '../../assets/styles/ReconcileStyle.js';
import ListActionButton from './ListActionButton.js';
//reconcileitems section
import React, {useEffect,useRef,useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/static_resources/colors.js';

export default function ReconcileItems(props){


    const [dataList, setListofData] = useState(null)
    const sortIndex = useRef(-1)
    const ascending = useRef(true)
    

    
      useEffect(() => {

        loadListofItems()
        
        return () => {
        }
      }, [props.data,props.sortIndex,props.refresh]);


    function byString(o, s){
        let kk = s.split("][");
        let rK = kk[0].replace('[','').replace('"','').replace('"','')
        let lK = kk[1].replace(']','').replace('"','').replace('"','')

        return (o[rK]?o[rK][lK]:"undefiend") 
    }

    function loadListofItems(){
        
        
        
        const data = props.data;
        let columns = props.itemlen;
        let dataKeys = props.dataKeys;
        let headerVals = props.itemLabels

        let filteredData = [];
        if(data !== null && data.length > 0){
          if((props.refresh) | dataList == null){
          let rootDataList = []
            
            for (let index = 0; index <data.length; index++) {
                let item = data[index]
                Object.keys(item).forEach( rootKey => {
                    let tempFilteredData = Array(columns)
                    for (let index2 = 0; index2 < headerVals.length; index2++) {
                        let elementVal = byString(item[rootKey],dataKeys[index2])
                        
                        tempFilteredData[index2] = ({[headerVals[index2]]:elementVal?elementVal:""})
                    }
                    rootDataList.push({data:tempFilteredData,key:rootKey})    
                })
                filteredData.push({data:rootDataList,key:"root"+index})
            }
            sortData(filteredData)
        }else{
           sortData(dataList)
        }
      }else{
          setListofData(null)
      }
    }

    function sortData(data){
        let item = null
        if((Number(props.sortIndex) === Number(sortIndex.current))){
          ascending.current = !ascending.current
        }else{
          ascending.current = true;
        }
        var tempData = data[0].data
        let sorted = tempData.sort(compare)

        sorted = [{data:sorted,key:"root"+0}]      
        item = sorted
        
        sortIndex.current=(props.sortIndex)
        setListofData(item)    

        
        
    }

    function compare( a, b ){
        
        
        let sortIndex = Number(props.sortIndex);
        var vala =a.data[sortIndex][props.itemLabels[sortIndex]];
        var valb =b.data[sortIndex][props.itemLabels[sortIndex]];
      
        vala = Number(vala) ? Number(vala.trim()) : vala.trim().toLowerCase()
        valb = Number(valb) ? Number(valb.trim()) : valb.trim().toLowerCase()


        if ( vala < valb){
          return ascending.current?-1:1;
        }
        if ( vala > valb){
          return ascending.current? 1:-1;
        }
        return 0; 
    }

    const Item = ({ item,index }) => {
      
      const groupIndex = index
      return (
     
     
     <View  style={ReconcileStyle.listItemsContainer}>

{props.listButton?
          <View style={ReconcileStyle.butonIconContainer2}>

              <ListActionButton icon = {"remove-red-eye"}
                  onPress={props.listButtonPressed}
                  action={"view"}
                  itemId={item.key}/>
              <ListActionButton icon = {"edit"}
                  onPress={props.listButtonPressed}
                  action={"edit"}
                  itemId={item.key}/>
              <ListActionButton icon = {"delete"}
                  onPress={props.listButtonPressed}
                  action={"delete"}
                  itemId={item.key}/>
            
          </View>
      :null}
 
      <SectionList
        sections={[item]}
        horizontal={true}
        scrollEnabled={false}
        extraData={dataList}
        keyExtractor={(item, index) => item + index}

        renderItem={({ item,index }) => 
    
                
        < View style={[ReconcileStyle.itemTextContainer,groupIndex%2 == 0 ?{backgroundColor:colors.bgColortertiary}:null]}>
              <Text numberOfLines={1}  style={ReconcileStyle.itemValStyle}>{item[props.itemLabels[index]]}</Text>
        </View>
      }/>
      

      
      </View>

      );
    }
   
        return(   
                   
            dataList == null ?null:
          
           <ScrollView horizontal={true} styles={{flex:1}}>
            <View  style={ReconcileStyle.reconcilelist1_bodycontainerr} >
              <View  style={ReconcileStyle.listlabelcontainerr}>

              {props.listButton?
          <View style={[ReconcileStyle.butonIconContainer2,{opacity:0}]}>
              <ListActionButton icon = {"delete"}
                 onPress={()=>{}}onPress={()=>{}}/>
              <ListActionButton icon = {"delete"}
                 onPress={()=>{}}onPress={()=>{}}/>
                            <ListActionButton icon = {"delete"}
                 onPress={()=>{}}onPress={()=>{}}/>
          </View>
      :null}
                    
                {props.itemLabels.map((item,index)=>{
                    return  <View key={index}  style={ReconcileStyle.labelTopContainerR}>
                              <View  style={ReconcileStyle.labelContainerR}>
                                <Text  style={ReconcileStyle.labelTextStyleR}>{item}</Text>
                                <TouchableOpacity 
                                      onPress={()=>{
                                      props.onPress(index)} 
                                      } key={index+"sort"}
                                  >
                                
                                    {Icon("filter-list",ReconcileStyle.iconStyle)}
                                </TouchableOpacity>
                              </View>
                            </View>
                })}

            </View>
              <View  style={ReconcileStyle.listItemsContainer}>
                <SectionList
                  sections={dataList}
                  horizontal={false}
                  nestedScrollEnabled
                  extraData={dataList}
                  scrollEnabled={true}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item,index }) => <Item item={item} index={index} />}
                  />
                </View>
            </View></ScrollView>
        )
}
