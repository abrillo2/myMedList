import appObjects from '../../assets/static_resources/objects'
import { updateItem } from './editItemHelper'
import { saveData ,getData} from './AsyncHelper'
/*********************************
* track drawer navigation params
*/
export function getNavData(route){
    let item=route.params.item
    let key =route.params.key
    if(item){
      return item[key]
    }else{
      return false
    }
}


  /*******************************
   * parse data from navigation params
   * or return image or null
   */
   export function getCurrentData(currentData,parent,child){
     
    if(currentData){
      let parentData = {...currentData[parent]}
      let result =  parentData[child] ? parentData[child] :(child == 'refillsLeft'?0:null)
      return result
    }else{
      return null 
    }
  }

  export function getSuggesion(suggessions,key){ 
    let suggession = []
    
    if(suggessions){
    
    if(key=='doc'){
       let doc = suggessions.docs.physicianDetails['name']
       let docPhone = suggessions.docs.physicianDetails['phone']
       let docLast = suggessions.docs.physicianDetails['lastName']
       let docFirst = suggessions.docs.physicianDetails['firstName']

       
       for (let index = 0; index < doc.length; index++) {
         const element = doc[index];
         const docLastName =docLast ? docLast[index]: element.split(" ").length > 0?element.split(" ")[0]:element
         const docFirstName =docFirst? docFirst[index]:element.split(" ").length > 1?element.split(" ")[1]:element
         element?suggession.push({id:index,title:element,phone:docPhone[index],lastName:docLastName,firstName:docFirstName}):null
         
       }
    }else if(key == 'pharma'){
      let pharma =suggessions.pharmas.pharmacyDetails['name']
      let pharmaPhone = suggessions.pharmas.pharmacyDetails['phone']
      for (let index = 0; index < pharma.length; index++) {
        const element = pharma[index];
        element?suggession.push({id:index,title:element,phone:pharmaPhone[index]}):null
        
      }
    }else if(key == 'diag'){
      let diag = suggessions.diags?suggessions.diags.medicationDetails['diagnosis']:[]
      diag = [...diag,'Hypertension', 'Diabetes', 'Heart disease']
      for (let index = 0; index < diag.length; index++) {
        const element = diag[index];
        element? suggession.push({id:index,title:element}) :null
      }
    }
  }
    return suggession;
  }

  // save suggestions
  export async function saveSuggession(currentData){

      let tempPhysicianName =getCurrentData(currentData,'physicianDetails','name')
      let tempPhysicianphone =getCurrentData(currentData,'physicianDetails','phone')
      let docLast = []
      let docFirst = []

      let tempPharmaName =getCurrentData(currentData,'pharmacyDetails','name')
      let tempPharmaphone =getCurrentData(currentData,'pharmacyDetails','phone')

       let diagnosisName = getCurrentData(currentData,'medicationDetails','diagnosis')

       let suggessions = await getData('@suggession')

       let doc = []
       let docPhone = []
       let diag = []
       let pharma = []
       let pharmaPhone = []

       if(suggessions){
         
          doc = suggessions.docs.physicianDetails['name']
          docPhone = suggessions.docs.physicianDetails['phone']
          docLast = suggessions.docs.physicianDetails['lastName']?suggessions.docs.physicianDetails['lastName']:[]
          docFirst = suggessions.docs.physicianDetails['firstName']?suggessions.docs.physicianDetails['firstName']:[]
            
          pharma = suggessions.pharmas.pharmacyDetails['name']
          pharmaPhone = suggessions.pharmas.pharmacyDetails['phone']

          diag = suggessions.diags?suggessions.diags.medicationDetails['diagnosis']:[]
      }
      
        //append doc sugesstion
       if(tempPhysicianName){ 
         if(doc.includes(tempPhysicianName)){
            let index = doc.indexOf(tempPhysicianName)
            docPhone[index] = tempPhysicianphone
        }else{
            let fullName = tempPhysicianName.split(" ");
            doc.push(tempPhysicianName)
            docPhone.push(tempPhysicianphone)
            docLast.push(fullName.length>1?fullName[1]:tempPhysicianName)
            docFirst.push(fullName.length>0?fullName[0]:tempPhysicianName)
        }
      }

        //append pharma sugesstion
       if(tempPharmaName){
            if(pharma.includes(tempPharmaName)){
            let index = pharma.indexOf(tempPharmaName)
            pharmaPhone[index] = tempPharmaphone
          }else{
            pharma.push(tempPharmaName)
            pharmaPhone.push(tempPharmaphone)
          }   
        }   
          

      if(diagnosisName)  {
          let tempDiag = [...diag,'Hypertension', 'Diabetes', 'Heart disease']
          if(!tempDiag.includes(diagnosisName)){
              diag.push(diagnosisName)
        }
      }
      


        const docs = {physicianDetails:{'name':[...doc],'phone':[...docPhone],'lastName':[...docLast],'firstName':[...docFirst]}}
        const pharmas = {pharmacyDetails:{'name':[...pharma],'phone':[...pharmaPhone]}}
        const diags = {medicationDetails:{'diagnosis':[...diag]}}

        let AddSlipSuggessions = {docs,pharmas,diags}
        await saveData(AddSlipSuggessions,'@suggession')

  }

    /******************************
   * save/update slip info
   */
   export async function prepSaveData(currentData,itemKey){

        await saveSuggession(currentData)
      
        let data = await  getData('@myMedListSlipInfo')
        var date = new Date();
        var itemId =   date.getFullYear()+ ""+ date.getMonth()+ "" 
                     + date.getDate()+ ""+date.getHours()+ ""
                     + date.getMinutes()+ "" + date.getSeconds()+ "" + date.getMilliseconds()+"";
    
        var slipInfo = {"slipInfo":[],"slipInfoDiscontinued":[]};
    
        if(data == null){
            slipInfo["slipInfo"].push(
              {[itemId]:currentData}
            )
        }else{
            if(itemKey != null){
               slipInfo = updateItem(data,itemKey,currentData)
               //slipInfo["slipInfo"].push({[this.state.itemKey]:currentData})
            }else{
              data["slipInfo"].push({[itemId]:currentData})
              slipInfo = data
            }
    
        }

        saveData(slipInfo,'@myMedListSlipInfo')
        return slipInfo
      }

        /**************************
   * chec if field is required
   */
  export function required(child,parent){
    
    let requiredItems = appObjects.addSlipInfoRequiredItems
    let result = false;
    requiredItems.forEach(element => {
       let childKey = element[1]
       let parentKey = element[0]
       if(child == childKey && parent == parentKey){
          result =  true;
       }
    });
    return result
  }


    //populate saved data 
    export function loadSavedData(savedData,props) {
      let tempData = {}
      Object.keys(savedData).forEach( rootKey => {
        Object.keys(savedData[rootKey]).forEach(childKey=>{
            
          tempData[rootKey] = {...tempData[rootKey],[childKey]:savedData[rootKey][childKey]}
            
        })
    })
    props.navigation.setParams({slipData:{...tempData}})
      //setDisabled(false)
      //setStaticData(sateData)
      return tempData
    }

      /***************************
   * check updateAble items
   */

  export function isUpdateAble(childKey){ 
      return appObjects.addSlipInfoUpdateableItems.indexOf(childKey) !== -1;  
  }

    //handel other text input changes for slip details
 export function onChangeInputData(data,rootKey,childKey, value){
      let temp = {...data}
      temp[rootKey] = {...temp[rootKey],[childKey]:value}
      
  
      return temp      
  }

  export function requiredFieldsFullfilled(data){

    let requiredItemsLen = Number(appObjects.addSlipInfoRequiredItems.length)
    if(data != null){
      let item = {...data}
     
      appObjects.addSlipInfoRequiredItems.forEach(element => {
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