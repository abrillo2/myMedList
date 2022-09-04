import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { getData } from '../helpers/AsyncHelper';
import Share from 'react-native-share';
import appLabels,{} from '../../assets/static_resources/strings';

export function makeTabelRowData(data,statusShare){
    let tabelItemList = []

    for (let index = 0; index < data.length; index++) { 
        let tempItem = data[index]
        let rootKey = Object.keys(tempItem)[0]

        let currentItem = tempItem[rootKey]
        let dateInfo;
        let reFillsLeft;
        let tempTabelItemList;

        if(statusShare === appLabels.active){
            dateInfo = {"dateAdded":currentItem["medicationDetails"]["dateAdded"]}
            reFillsLeft={"refillsLeft":currentItem["medicationDetails"]["refillsLeft"]}

            tempTabelItemList = {
                "medicine": currentItem["medicationDetails"]["name"],
                "dateRefilled":currentItem["medicationDetails"]["dateRefilled"],
                "refillsLeft":currentItem["medicationDetails"]["refillsLeft"],
                "strength":currentItem["medicationDetails"]["strength"],
                "direction":currentItem["medicationDetails"]["direction"],
                "disease":currentItem["medicationDetails"]["diagnosis"],
                "doctorName":currentItem["physicianDetails"]["name"],
                "dateAppointed":currentItem["physicianDetails"]["dateAppointed"],
                "dateAdded":currentItem["medicationDetails"]["dateAdded"]
            }
        }else{
            dateInfo = {"stopDate":currentItem["medicationDetails"]["stopDate"]}

            tempTabelItemList = {
                "medicine": currentItem["medicationDetails"]["name"],
                "stopDate":currentItem["medicationDetails"]["stopDate"],
                "strength":currentItem["medicationDetails"]["strength"],
                "direction":currentItem["medicationDetails"]["direction"],
                "disease":currentItem["medicationDetails"]["diagnosis"],
                "doctorName":currentItem["physicianDetails"]["name"],
                "dateRefilled":currentItem["medicationDetails"]["dateRefilled"],
                
                
            }
        }


        tabelItemList.push(tempTabelItemList)
    }
    tabelItemList.sort(compare)  
    return tabelItemList
}

export function makeTabelHeaderData(statusShare) {
    let header;
    if(statusShare === appLabels.active){

        header = {
            "medicine":"Medicine",
            "dateRefilled":"Date filled",
            "refillsLeft":"Refills",
            "strength":"Strength",
            "direction":"Directions",
            "disease":"Disease",
            "doctorName":"Doctor",
            "dateAppointed":"Next appt.",
            "dateAdded":"Date added"
        }
    }else{

        header = {
            "medicine":"Medicine",
            "stopDate":"Stop date",
            "strength":"Strength",
            "direction":"Directions",
            "disease":"Disease",
            "doctorName":"Doctor",
            "dateRefilled":"Date filled",
            
        }
    }
    


    return header
}


export async function makeHeaderData(status,sharedWith,client) {

    let data = await getMyInfoData();
    let pInfo =  data["personalInformation"];
    let dInfo = data["physicianDetails"];
    let phInfo = data["pharmacyDetails"]?data["pharmacyDetails"]:{};
    
    let fName = pInfo["firstName"] != null ? pInfo["firstName"] : ""
    let lName   = pInfo["lastName"] != null? pInfo["lastName"] : "";
    let phone = pInfo["phone"]!= null ? pInfo["phone"] : "";
    let dName = dInfo["name"]!= null ? dInfo["name"] : "";
    let dPhone =  dInfo["phone"]!= null ? dInfo["phone"] : "";
    let phName = phInfo["name"]!= null ? phInfo["name"] : "";
    let phPhone =  phInfo["phone"]!= null ? phInfo["phone"] : "";


    const pdfheader = {
        "headerTitle": status+ " prescription list for "
        +'<h2 align="center" style="color:#005c86;">'+fName + " "+lName+ ", "+phone+'</h2>',
        "Date created": new Date().toLocaleDateString("en-us"),
        "Shared with":sharedWith[1] +" " + '<h2 align="center" style="color:#005c86;">'+client+": "+sharedWith[0]+'</h2>',
        "Primary care physician": dName+ ", Phone: " +dPhone,
        "Preferred pharmacy":phName+ ", Phone: " + phPhone,
        
    }
    return pdfheader
}

export function makeTabelHtml(header,row) {
      let tabelHTML = '<table align="center" border=1px solid black; width="100%"> <tr style="background-color:#bacee3">'
      
      Object.keys(header).forEach( rootKey => {
          tabelHTML = tabelHTML+'<th>'+header[rootKey]+'</th>'
      })
      tabelHTML= tabelHTML+"</tr>"

      for (let index = 0; index < row.length; index++) {
          const element = row[index];

          if((index % 2)== 0){
            tabelHTML= tabelHTML+'<tr style="background-color:#d1d1d1">'
          }else{
            tabelHTML= tabelHTML+'<tr style="background-color:#ffffff">'
          }
          Object.keys(header).forEach( rootKey => {
            tabelHTML = tabelHTML+'<th>'+element[rootKey]+'</th>'
        })
        tabelHTML= tabelHTML+"</tr>" 
      }
      tabelHTML= tabelHTML+"</table>" 

      return tabelHTML
}

export function makeHeaderHtml(header) {
    let tabelHTML = ""
    Object.keys(header).forEach( rootKey => {
        let elementVal = header[rootKey] != "undefined" ? header[rootKey]:""
        if("headerTitle"== rootKey || "Shared with" == rootKey){
            let rootKeyVal = rootKey == "headerTitle" ? "": rootKey+": "
            tabelHTML = tabelHTML+'<h2 align="center" style="color:#005c86;">'+rootKeyVal+" "+ elementVal +'</h2>'
        }else if("Date created"==rootKey){
            tabelHTML = tabelHTML+'<h2 align="center" style="color:#005c86;">'+elementVal +'</h2>'
        }else if("Primary care physician"==rootKey || "Preferred pharmacy"==rootKey){
            tabelHTML = tabelHTML+'<p><strong>'+rootKey+'</strong> : '+ elementVal +'</p>'
        }else{
            tabelHTML = tabelHTML+'<p>'+rootKey+' : '+ elementVal +'</p>'
        }
    })
    return tabelHTML
}
export async function makeHtmlBody(reportType,sharedWithInfo,itemList,client) {
    let headerHtml = makeHeaderHtml(await makeHeaderData(reportType,sharedWithInfo,client))
    let tabelHtml = makeTabelHtml(makeTabelHeaderData(reportType),makeTabelRowData(itemList,reportType))
    return '<html>'+headerHtml+tabelHtml+"</html>"
}

export async function getMyInfoData() {
    
    let data = await getData("@myMedListMyInfo");
    data = data["myInfo"]
    return data;
}

export async function createPDF(htmlString,statusInfo) {
    var date = new Date();
    let data = await getMyInfoData()
    let pin = data["personalInformation"]["pin"]
    pin = pin ? pin: "0000"
    var itemId =   date.getMonth()+ ""+ date.getDate()+ "" 
                 + date.getFullYear()+date.getUTCDay()+statusInfo+pin
    let options = {
      html: htmlString,
      fileName: itemId,
      directory: 'Documents',
    };
    let file = await RNHTMLtoPDF.convert(options)
    return file.filePath
  }

  export function shareWithWhatsUp(data,Description,recipient){
    recipient = recipient.replace("+","")
    let urlOpt = {}
    if(data.length > 1){
        urlOpt = {urls: data}
    }else{
        urlOpt = {url: data[0]}
    }
    const shareOptions = {
        title: Description,
        message:Description,
        social: Share.Social.WHATSAPP,
        filename:Description,
        whatsAppNumber: recipient,  // country code + phone number
        //url: data , // only for base64 file in Android
        ...urlOpt
      };
    return shareOptions;
}

export function shareWithSMS(data,Description,recipient){ 
    let urlOpt = {}
    if(data.length > 1){
        urlOpt = {urls: data}
    }else{
        urlOpt = {url: data[0]}
    }
    const shareOptions = {
        title: Description,
        message:Description,
        social: Share.Social.SMS,
        recipient: recipient,
        //url: data
        ...urlOpt  // country code + phone number
      };
    return shareOptions;
}3

export function shareWithEmail (data,Description,recipient){

    let urlOpt = {}
    if(data.length > 1){
        urlOpt = {urls: data}
    }else{
        urlOpt = {url: data[0]}
    }

    const shareOptions = {
        title: Description,
        subject:Description,
        social: Share.Social.EMAIL,
        filename:Description,
        email: recipient,  // country code + phone number
        //url: data , // only for base64 file in Android
        ...urlOpt
      };
    return shareOptions;
}

export function selectToggelItem(jsonValue,active){
    return active ? jsonValue["slipInfo"] : 
                       (jsonValue["slipInfoDiscontinued"]?jsonValue["slipInfoDiscontinued"]:
                                                         [] )
}

function compare( a, b ) {
    if ( a["medicine"] < b["medicine"] ){
      return -1;
    }
    if ( a["medicine"] > b["medicine"] ){
      return 1;
    }
    return 0;
  }