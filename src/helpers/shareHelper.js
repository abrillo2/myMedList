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

        if(statusShare === appLabels.active){
            dateInfo = {"dateAdded":currentItem["medicationDetails"]["dateAdded"]}
        }else{
            dateInfo = {"stopDate":currentItem["medicationDetails"]["stopDate"]}
        }
        let tempTabelItemList = {
            "medicine": currentItem["medicationDetails"]["name"],
            "dateRefilled":currentItem["medicationDetails"]["dateRefilled"],
            "doctorName":currentItem["physicianDetails"]["name"],
            "strength":currentItem["medicationDetails"]["strength"],
            "direction":currentItem["medicationDetails"]["direction"],
            "disease":currentItem["medicationDetails"]["diagnosis"],
            ...dateInfo
            
        }

        tabelItemList.push(tempTabelItemList)
    }

    return tabelItemList
}

export function makeTabelHeaderData(statusShare) {
    let dateInfo;
    if(statusShare === appLabels.active){
        dateInfo = {"dateAdded":"Date added"}
    }else{
        dateInfo = {"stopDate":"Stop date"}
    }
    
    const header = {
        "medicine":"Medicine",
        "dateRefilled":"Date filled",
        "doctorName":"Doctor",
        "strength":"Strength",
        "direction":"Directions",
        "disease":"Disease",
        ...dateInfo
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
    let dfName = dInfo["firstName"]!= null ? dInfo["firstName"] : "";
    let dlName = dInfo["lastName"]!= null ? dInfo["lastName"] : "";
    let dPhone =  dInfo["phone"]!= null ? dInfo["phone"] : "";
    let phName = phInfo["name"]!= null ? phInfo["name"] : "";
    let phPhone =  phInfo["phone"]!= null ? phInfo["phone"] : "";


    const pdfheader = {
        "headerTitle": status+ " prescription list for "
        +'<h2 align="center" style="color:#005c86;">'+fName + " "+lName+ ", "+phone+'</h2>',
        "Date created": new Date().toLocaleDateString("en-us"),
        "Shared with":sharedWith[0] +" " + '<h2 align="center" style="color:#005c86;">'+client+": "+sharedWith[1]+'</h2>',
        "Primary care doctor": dfName + " "+ dlName + ", Phone: " +dPhone,
        "preferred pharmacy":phName+ ", Phone: " + phPhone,
        
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
        if("headerTitle"== rootKey | "Shared with" == rootKey){
            let rootKeyVal = rootKey == "headerTitle" ? "": rootKey+": "
            tabelHTML = tabelHTML+'<h2 align="center" style="color:#005c86;">'+rootKeyVal+" "+ elementVal +'</h2>'
        }else if("Date created"==rootKey){
            tabelHTML = tabelHTML+'<h2 align="center" style="color:#005c86;">'+elementVal +'</h2>'
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
    data = JSON.parse(data)
    data = data["myInfo"]
    return data;
}

export async function createPDF(htmlString,statusInfo) {
    var date = new Date();
    let data = await getMyInfoData()
    let pin = data["personalInformation"]["pin"]
    pin = pin ? pin: "0000"
    var itemId =   date.getMonth()+ ""+ date.getDate()+ "" 
                 + date.getFullYear()+statusInfo+pin
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
    const shareOptions = {
        title: Description,
        message:Description,
        social: Share.Social.WHATSAPP,
        filename:Description,
        whatsAppNumber: recipient,  // country code + phone number
        url: data , // only for base64 file in Android
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
        ...urlOpt  // country code + phone number
      };
    return shareOptions;
}

export function shareWithEmail (data,Description,recipient){
    const shareOptions = {
        title: Description,
        subject:Description,
        social: Share.Social.EMAIL,
        filename:Description,
        email: recipient,  // country code + phone number
        url: data , // only for base64 file in Android
      };
    return shareOptions;
}
