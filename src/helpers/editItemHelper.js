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
  
export function removeItem(slipData,itemId,stopDate) {

    let discontiuedList = slipData["slipInfoDiscontinued"];
    let updatedItems = {"slipInfo":[], "slipInfoDiscontinued":discontiuedList?discontiuedList:[]}
    let items = slipData["slipInfo"]
    
    for (let index = 0; index < items.length; index++) {
      let item = items[index]
      let rootKey = Object.keys(item)[0]
      if(rootKey != itemId){
            updatedItems["slipInfo"].push(item)
      }else{
            console.log(updatedItems["slipInfoDiscontinued"].length)
            item[itemId]["medicationDetails"]={...item[itemId]["medicationDetails"],"stopDate":stopDate}
            updatedItems["slipInfoDiscontinued"].push(item)
      }
    }

    console.log(updatedItems["slipInfoDiscontinued"][28])
    return updatedItems
    
  }