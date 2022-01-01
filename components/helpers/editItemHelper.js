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
  
export function removeItem(items,itemId) {

    let updatedItems = {"slipInfo":[]}
    

    for (let index = 0; index < items.length; index++) {
      let item = items[index]
      let rootKey = Object.keys(item)[0]
      
      if(rootKey != itemId){
            updatedItems["slipInfo"].push(item)
      }
    }

    
    return updatedItems
    
  }