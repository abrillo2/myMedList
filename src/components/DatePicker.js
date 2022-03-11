import React from 'react';
import DatePicker from 'react-native-date-picker';
  //handel date picker
export default function DatePickerHelper(props){

    //open modal
    const today = new Date();
    const dateString = today.getFullYear()+"-"+(today.getMonth() + 1).toString()+"-"+today.getDate()
    
    return (<><DatePicker
        modal
        mode='date'
        textColor='black' 
        locale='en-US'
        open={props.open}
        date={today}

        maximumDate={props.childKey == "birthDate"| props.childKey == "dateRefilled"?new Date(dateString):null}
        minimumDate={props.childKey == "dateAppointed"?new Date(dateString):null}

        onConfirm={(date) => {
            let dateFormatted =  date.toLocaleDateString("en-US");
            props.setVal(dateFormatted)
        }}
        onCancel={() => {
            props.setVal(props.getVal())
        }}
    /></>)
}