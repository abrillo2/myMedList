import React from "react";
import { View ,FlatList} from "react-native";
import { formInputLabel } from "../../assets/static_resources/strings";
import styles from "../../assets/styles/NotficationModalStyle";
import SolidInput from "../components/SolidInput";
//static resources
import appObjects,{slipInfoFormLabels} from '../../assets/static_resources/objects'
import appLabels,{appDescription} from '../../assets/static_resources/strings'
import Fold from "../callBacks/Fold";

const ItemReviewList = (props) => {

  let halfList=[]
  return (




    <FlatList
      data={[1]}
      removeClippedSubviews={false}
      renderItem={({ item, index }) => (    
        
        
      <View>
            <FlatList
                data={props.data}
                nestedScrollEnabled={true}
                scrollEnabled={false}
                removeClippedSubviews={false}
                renderItem={({ item, index }) => (

                  <Fold labelTitle = {item.title} expand={index==0?true:false}>
                    {
                      <FlatList
                       data={item.content}
                       renderItem={({ item, index }) => 

                         
                        item.group ? 
                        
                       
                        item.group.map((item,index)=>{

                            

                            return <SolidInput  
                              width={"100%"}
                              func={item.func?item.func:null}
                              inputLabel={item.inputLabel}
                              childKey={item.childKey}
                              rootKey ={item.rootKey}
                              editAble={false}
                              inputContent={props.getDataCurrent}
                              required = {()=>{return false}}/>
                              
                            

                            })
                        :( <View style={styles.hallfInputContainer}><SolidInput  
                              width={"100%"}
                              inputLabel={item.inputLabel}
                              childKey={item.childKey}
                              rootKey ={item.rootKey}
                              editAble={false}
                              inputContent={props.getDataCurrent}
                              updateAble={true}
                              required = {()=>{return false}}/>
                            </View>
                        )}/>}
                  </Fold>
                )}/></View>
  )}/>
         
    );

}

export default ItemReviewList;