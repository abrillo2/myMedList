import appObjects from '../../assets/static_resources/objects';
import { saveData } from './AsyncHelper';
const requiredItems =appObjects.myInfoRequiredItems


export function getUserInfo(parent,child,data){
    if(data != null){
      let currentData = data

      
      let parentData = {...currentData[parent]}
      let result =  parentData[child] ? parentData[child] :null
      
      if(child == 'pin'){
        if((result === "" | result===null)){ 
          return "0000" 
        }else if(result.length < 2){
          return '0000'
        }else{
          return result
        }
      }else{
          return result
      }
      
    }else if(child==="pin"){
      return "0000"
    }else{  
     return null 
    }
    
}

export async function saveUserProfile(currentData){

    if(currentData != null){
      let slipInfo = null;
   
      slipInfo = {"myInfo":{}}
      slipInfo["myInfo"]={...currentData}
      
      const jsonValue = JSON.stringify(slipInfo)
      saveData(jsonValue,"@myMedListMyInfo")
    }
   

}

export function required(child,parent){
    
    let result = false
    
    requiredItems.forEach(element => {
       let childKey = element[1]
       let parentKey = element[0]

      
       if(child == childKey && parent == parentKey){
        result =  true
       }
    });
    return result
    
  }

  export function onchangeInput(data,rootKey,childKey,value){
    
    let tempData = data != null  ? {...data} : {}
    if(data != null){
      tempData[rootKey] = {...tempData[rootKey],[childKey]:value}
    }
    
    

    return tempData;  
  }

  export function requiredFieldsFullfilled(data){

    let requiredItemsLen = Number(requiredItems.length)
    if(data != null){
      let item = {...data}
     
      requiredItems.forEach(element => {
         let rootKey = element[0]
         let childKey = element[1]
         let data = {...item[rootKey]}
         
         if(data[childKey]){
            requiredItemsLen =Number(requiredItemsLen)- 1;
         }
      });
    }

  
    if(requiredItemsLen==0){
      return true
    }else{
      return false
    }
  }