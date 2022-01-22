import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { getData } from '../helpers/AsyncHelper';
import Share from 'react-native-share';

export function makeTabelRowData(data){
    let tabelItemList = []

    for (let index = 0; index < data.length; index++) {
        let tempItem = data[index]
        let rootKey = Object.keys(tempItem)[0]

        let currentItem = tempItem[rootKey]
        let tempTabelItemList = {
            "medicine": currentItem["medicationDetails"]["name"],
            "dateRefilled":currentItem["medicationDetails"]["dateRefilled"],
            "doctorName":currentItem["physicianDetails"]["name"],
            "strength":currentItem["medicationDetails"]["strength"],
            "direction":currentItem["medicationDetails"]["direction"],
            "disease":currentItem["medicationDetails"]["diagnosis"],
            "stopDate":currentItem["medicationDetails"]["stopDate"]
        }

        tabelItemList.push(tempTabelItemList)
    }

    return tabelItemList
}

export function makeTabelHeaderData() {
    const header = {
        "medicine":"Medicine",
        "dateRefilled":"Date filled",
        "doctorName":"Doctor",
        "strength":"Strength",
        "direction":"Directions",
        "disease":"Disease",
        "stopDate":"Stop Date"
    }

    return header
}


export async function makeHeaderData(status,sharedWith,client) {

    let data = await getMyInfoData();
    const pdfheader = {
        "headerTitle": status+ " prescription list for "+data["personalInformation"]["firstName"] + " "+data["personalInformation"]["lastName"],
        "Date created": new Date().toLocaleDateString("en-us"),
        "Shared with":sharedWith[0] +" " + '<h2 align="center" style="color:#005c86;">'+client+": "+sharedWith[1]+'</h2>',
        "Primary care doctor": data["physicianDetails"]!= null ? data["physicianDetails"]["firstName"] + " "+data["physicianDetails"]["lastName"] 
                            + ", Phone: " +data["physicianDetails"]["phone"]:"",
        "preferred pharmacy":data["pharmacyDetails"]!=null? data["pharmacyDetails"]["name"] 
                            + ", Phone: " + data["pharmacyDetails"]["phone"]:"",
        
    }
    return pdfheader
}

export function makeTabelHtml(header,row) {
      let tabelHTML = '<table align="center" border=1px solid black; width="100%"> <tr style="background-color:#bacee3">'
      
      Object.keys(header).forEach( rootKey => {
          tabelHTML = tabelHTML+'<th>'+rootKey+'</th>'
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
    let tabelHtml = makeTabelHtml(makeTabelHeaderData(),makeTabelRowData(itemList))
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
    console.log(file.filePath);
    return file.filePath
  }

  export function shareWithWhatsUp(data,Description,recipient){
    const shareOptions = {
        title: Description,
        message:Description,
        social: Share.Social.WHATSAPP,
        filename:"test",
        whatsAppNumber: recipient,  // country code + phone number
        url: data , // only for base64 file in Android
      };
    return shareOptions;
}

export function shareWithSMS(data,Description,recipient){
    const shareOptions = {
        title: Description,
        message:Description,
        social: Share.Social.SMS,
        //filename:"test",
        recipient: recipient,  // country code + phone number
        //url: data , // only for base64 file in Android
      };
    return shareOptions;
}

export function shareWithEmail (data,Description,recipient){
    const shareOptions = {
        title: Description,
        subject:Description,
        social: Share.Social.EMAIL,
        filename:"test",
        email: recipient,  // country code + phone number
        url: data , // only for base64 file in Android
      };
    return shareOptions;
}
