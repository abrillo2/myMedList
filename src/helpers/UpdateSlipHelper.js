





import {getData,saveData} from './AsyncHelper'
import { getNextItem,getItem,getItemIndex ,updateItem} from './editItemHelper'
import appLabels from '../../assets/static_resources/strings'
export async function handelOption(option,navigation,itemkey,datakey){
    let action = Number(option.action)
    switch (action) {
      case 0:
        await update(navigation,itemkey,datakey)
        return handelNavigation(navigation,appLabels.reconcileTitle)
        break;

      case 1:

        let data = await update(navigation,itemkey,datakey)
        return handelNavigation(navigation,appLabels.addSlipTitle,data,itemkey)
        break;

      case 2:

        data = await update(navigation,itemkey,datakey)
        return handelNavigation(navigation,appLabels.reconcileTitle,null,itemkey)
        break;

      default:
        return handelNavigation(navigation,appLabels.reconcileTitle,null,itemkey)
        break;
    }
}

async function update(navigation,itemkey,datakey){
    let data = await  getData(datakey)
    let currentData = navigation.getState().routes[navigation.getState().index].params.slipData
    let slipInfo = updateItem(data,itemkey,{...currentData})
    await saveData(slipInfo,datakey)
    return slipInfo
}

function handelNavigation(navigation,screenName,data,itemId){
    
   if(data) {
        let items = [...data['slipInfo']]
        let index = Number(getItemIndex(items,itemId))
        let item = getNextItem(items,itemId,index++)

        navigation.setParams({
          item:item.data,key:item.key})
        return item
   }else{
        navigation.navigate(screenName)
   }
   return null
}