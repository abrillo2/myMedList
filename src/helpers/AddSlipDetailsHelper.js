import appObjects from '../../assets/static_resources/objects'
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
   export function getCurrentData(parent,child,route){
    let currentData = getNavData(route)

    //console.log('current data being refreshed ', currentData)

    if(currentData){
      let parentData = {...currentData[parent]}
      let result =  parentData[child] ? parentData[child] :null
      return result
    }else if(child==="imageData"){
      return route.params.imageData
    }else{
      return null
    }
  }

    /******************************
   * save/update slip info
   */
   export function prepSaveData(data,currentData,itemKey){
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