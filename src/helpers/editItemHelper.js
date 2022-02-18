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

  export function getItemIndex(items,itemId) {
    for (let index = 0; index < items.length; index++) {
      let item = items[index]
      
      let rootKey = Object.keys(item)[0]
      if(rootKey == itemId){
            return index
      }
    }
    return 0
  }

  export function getNextItem(items,itemId,index) {

    if(index <= (items.length - 1) && index >= 0){
      let item = items[index]
      let rootKey = Object.keys(item)[0]
      if(rootKey != itemId){
            let data = {data:item,key:rootKey}
            return data
      }else{
          index = index + 1
          return getNextItem(items,itemId,index)
      }
    }else if(items.length > 1 && index > 0){
       return getNextItem(items,itemId,0)
    }else{
       let item = getItem(items,itemId)
       return {data:item,key:itemId}
    }
 
  }

import { removeFile } from "../hooks/FsManager"
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

            item[itemId]["medicationDetails"]={...item[itemId]["medicationDetails"],"stopDate":stopDate}
            updatedItems["slipInfoDiscontinued"].push(item)
            const uri = item[itemId]["medicationDetails"]["imageData"].uri?item[itemId]["medicationDetails"]["imageData"].uri:null

            uri!=null?removeFile(uri):null
      }
    }
    return updatedItems
    
  }

  export function updateItem(slipData,itemId,updateData) {

    let discontiuedList = slipData["slipInfoDiscontinued"];
    let updatedItems = {"slipInfo":[], "slipInfoDiscontinued":discontiuedList?discontiuedList:[]}
    let items = slipData["slipInfo"]
    
    for (let index = 0; index < items.length; index++) {
      let item = items[index]
      let rootKey = Object.keys(item)[0]
      if(rootKey != itemId){
            updatedItems["slipInfo"].push(item)
      }else{
            item[itemId]=updateData
            updatedItems["slipInfo"].push(item)
      }
    }
    return updatedItems
    
  }