import {getData, saveData} from './AsyncHelper'
import { getItem } from './editItemHelper'
import appObjects from '../../assets/static_resources/objects'



export async function listOfSlips(){
    const rawData = await getData('@myMedListSlipInfo')
    let data = null
    if(rawData != null){
        data =rawData["slipInfo"]
        return loadListofItems(data)
    }else{
        return []
    }


}


export async function listOfPdf(){
    const rawData = await getData('@sharedPDF')
    if(rawData != null){
        return [{data:rawData}]
    }else{
        return [{data:[]}]
    }


}



function loadListofItems(data){
        
    let dataKeys = appObjects.dataKeysReview;
    let headerVals = appObjects.labelsReview

    let filteredData = [];
    let rootDataList = []
        
       
    for (let index = 0; index <data.length; index++) {
        let item = data[index]
        Object.keys(item).forEach( rootKey => {
            let tempFilteredData = {}
            for (let index2 = 0; index2 < headerVals.length; index2++) {
                
                let elementVal = byString(item[rootKey],dataKeys[index2])
                    
               tempFilteredData= {...tempFilteredData,[headerVals[index2]]:elementVal?elementVal:""}
            }
            rootDataList.push({...tempFilteredData,key:rootKey})    
        })
        
    }
    filteredData.push({data:rootDataList})
    
    return filteredData
}

function byString(o, s){
    let kk = s.split("][");
    let rK = kk[0].replace('[','').replace('"','').replace('"','')
    let lK = kk[1].replace(']','').replace('"','').replace('"','')

    return (o[rK]?o[rK][lK]:"undefiend") 
}






