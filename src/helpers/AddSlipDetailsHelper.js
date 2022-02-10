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
     
    //console.log('current data being refreshed ', currentData)
    if(currentData){
      let parentData = {...currentData[parent]}
      let result =  parentData[child] ? parentData[child] :(child == 'refillsLeft'?0:null)
      return result
    }else{
      return null 
    }
  }

    /******************************
   * save/update slip info
   */
   export async function prepSaveData(currentData,itemKey){

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
    console.log("params at loadSaved: ",{...tempData})
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