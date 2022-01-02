export function getItem(items,itemId) {
    for (let index = 0; index < items.length; index++) {
      let item = items[index]
      
      let rootKey = Object.keys(item)[0]
      if(rootKey == itemId){
            return item
      }
    }
    return {}
  }
  
export function removeItem(slipData,itemId) {

    let discontiuedList = slipData["slipInfoDiscontinued"];
    let updatedItems = {"slipInfo":[], "slipInfoDiscontinued":discontiuedList?discontiuedList:[]}
    let items = slipData["slipInfo"]

    for (let index = 0; index < items.length; index++) {
      let item = items[index]
      let rootKey = Object.keys(item)[0]
      if(rootKey != itemId){
            updatedItems["slipInfo"].push(item)
      }else{
            updatedItems["slipInfoDiscontinued"].push(item)
      }
    }

    
    return updatedItems
    
  }