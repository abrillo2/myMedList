import appObjects from '../../assets/static_resources/objects';
import { getCurrentData } from './AddSlipDetailsHelper';
import { getData, saveData } from './AsyncHelper';
const requiredItems =appObjects.myInfoRequiredItems


export function getUserInfo(parent,child,data){
    if(data != null){
      let currentData = data

      
      let parentData = {...currentData[parent]}
      let result =  parentData[child] ? parentData[child] :null
      
      if(child == 'pin'){
        if((result === "" || result===null)){ 
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

      saveSuggession(currentData)
      let slipInfo = null;
   
      slipInfo = {"myInfo":{}}
      slipInfo["myInfo"]={...currentData}
    
      saveData(slipInfo,"@myMedListMyInfo")
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

  // save suggestions
  export async function saveSuggession(currentData){

    let tempPhysicianFirstName =getCurrentData(currentData,'physicianDetails','firstName')
    let tempPhysicianLastName =getCurrentData(currentData,'physicianDetails','lastName')
    let tempPhysicianphone =getCurrentData(currentData,'physicianDetails','phone')

    let tempPharmaName =getCurrentData(currentData,'pharmacyDetails','name')
    let tempPharmaphone =getCurrentData(currentData,'pharmacyDetails','phone')


     let suggessions = await getData('@suggession')
     
     let doc = []
     let docPhone = []
     let docLast = []
     let docFirst = []
     let pharma = []
     let pharmaPhone = []

     
     if(suggessions)

      {
        
        doc = suggessions.docs.physicianDetails['name']
      
        docPhone = suggessions.docs.physicianDetails['phone']
        docLast = suggessions.docs.physicianDetails['lastName']?suggessions.docs.physicianDetails['lastName']:[]
        docFirst = suggessions.docs.physicianDetails['firstName']?suggessions.docs.physicianDetails['firstName']:[]
      
        pharma = suggessions.pharmas.pharmacyDetails['name']
        pharmaPhone = suggessions.pharmas.pharmacyDetails['phone']
    }
      //append doc sugesstion
      if(tempPhysicianFirstName!=null || tempPhysicianLastName!=null){
          if(doc.includes((tempPhysicianFirstName+" "+tempPhysicianLastName))){
            let index = doc.indexOf(tempPhysicianFirstName+" "+tempPhysicianLastName)
            docPhone[index] = tempPhysicianphone
        }else{
            doc.push(tempPhysicianFirstName+" "+tempPhysicianLastName)
            docPhone.push(tempPhysicianphone)
            docLast.push(tempPhysicianLastName)
            docFirst.push(tempPhysicianFirstName)
        }
      }

      //append doc sugesstion
      if(tempPharmaName!=null){
          if(pharma.includes(tempPharmaName)){
            let index = pharma.indexOf(tempPharmaName)
            pharmaPhone[index] = tempPharmaphone
          }else{
            pharma.push(tempPharmaName)
            pharmaPhone.push(tempPharmaphone)
          }
      }


      const docs = {physicianDetails:{'name':[...doc],'phone':[...docPhone],'lastName':[...docLast],'firstName':[...docFirst]}}
      const pharmas = {pharmacyDetails:{'name':[...pharma],'phone':[...pharmaPhone]}}
      let diags = suggessions? suggessions.diags:null

      let AddSlipSuggessions = {docs,pharmas,diags}
      await saveData(AddSlipSuggessions,'@suggession')



}