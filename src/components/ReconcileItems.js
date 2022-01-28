//imports
import {Text, View,FlatList,SectionList,TouchableOpacity} from 'react-native';
import Icon from '../hooks/Icon.js';
//import reconcile items
import ReconcileStyle from '../../assets/styles/ReconcileStyle.js';
import ListActionButton from './ListActionButton.js';
//reconcileitems section
import React, {useEffect,useState} from 'react';
export default function ReconcileItems(props){


    const [dataList, setListofData] = useState(null)
    
    function byString(o, s){
        let kk = s.split("][");
        let rK = kk[0].replace('[','').replace('"','').replace('"','')
        let lK = kk[1].replace(']','').replace('"','').replace('"','')

        return (o[rK][lK]) 
    }

    function loadListofItems(){
        
        
        
        const data = props.data;
        let columns = props.itemlen;
        let dataKeys = props.dataKeys;
        let headerVals = props.itemLabels

        let filteredData = [];

        if(props.data != dataList){
            for (let index = 0; index <data.length; index++) {
                let item = data[index]
                Object.keys(item).forEach( rootKey => {
                    let tempFilteredData = Array(columns)
                    for (let index2 = 0; index2 < headerVals.length; index2++) {
                        let elementVal = byString(item[rootKey],dataKeys[index2])
                        
                        tempFilteredData[index2] = ({[headerVals[index2]]:elementVal?elementVal:""})
                    }
                    filteredData.push({data:tempFilteredData,key:rootKey})    
                })
            }
            setListofData(filteredData)
        }

        let sorted =  props.sortIndex? ()=>{
            let sorted = [...dataList].sort( compare )
            return sorted
        }:null
        sorted != null?setListofData(sorted):null

    }

    function compare( a, b ){
        let sortIndex = Number(props.sortIndex);
        var vala =""+a.data[sortIndex][props.itemLabels[sortIndex]]// byString(a, state.dataKeys[Number(props.sortIndex)]); 
        var valb =""+b.data[sortIndex][props.itemLabels[sortIndex]]// byString(b, state.dataKeys[Number(props.sortIndex)]);
      
        console.log('comparing',vala,":",valb)
        if ( vala.trim() < valb .trim()){
          return -1;
        }
        if ( vala.trim() > valb.trim()){
          return 1;
        }
        return 0; 
    }

    useEffect(() => {
        loadListofItems()
        return () => {
        }
      }, [props.data,props.sortIndex]);
 
    
        return(            
            <FlatList
           
            data={["item1"]}
            horizontal={true}
            renderItem={({ item, index }) => ( 

            <View  style={ReconcileStyle.reconcilelist1_bodycontainerr} >
                <View  style={ReconcileStyle.listlabelcontainerr}>
                    
                {props.itemLabels.map((item,index)=>{
                    return  <TouchableOpacity 
                    onPress={()=>{
                      props.onPress(index)} } 
                    key={index}  style={ReconcileStyle.labelTopContainerR}>
                              <View  style={ReconcileStyle.labelContainerR}>
                                <Text  style={ReconcileStyle.labelTextStyleR}>{item}</Text>
                                {Icon("filter-list",ReconcileStyle.iconStyle)}
                              </View>
                            </TouchableOpacity>
                })}

            </View>

                <FlatList
                scrollEnabled={true}
                data={dataList}
                renderItem={({ item, index }) => 
                
                (
                
                
                <View  style={ReconcileStyle.listItemsContainer}>
                    
                    <FlatList
                    horizontal={true}
                    scrollEnabled={false}
                    data={item.data}
                    renderItem={({ item, index}) => (
                    
                    < View style={ReconcileStyle.itemTextContainer}>
                            {item ? <Text numberOfLines={1}  style={ReconcileStyle.itemValStyle}>{item[props.itemLabels[index]]}</Text>:null}
                    </View>
                    )}/>
                    {props.listButton?
                            <View style={ReconcileStyle.butonIconContainer2}>
                                <ListActionButton icon = {"edit"}
                                                onPress={props.listButtonPressed}
                                                action={"edit"}
                                                itemId={item.key}/>
                                <ListActionButton icon = {"delete"}
                                                onPress={props.listButtonPressed}
                                                action={"delete"}
                                                itemId={item.key}/>
                            </View>:null}
                </View>
                )}/>
</View>

            )}/>
        )
}
