import React from 'react';
import DatePicker from 'react-native-date-picker';
  //handel date picker
export default function DatePickerHelper(props){

    //open modal
    
    return (<><DatePicker
        modal
        mode='date'
        textColor='black'
        open={true}
        date={new Date()}
        onConfirm={(date) => {
            let dateFormatted =  date.toLocaleDateString("en-US");
            props.setVal(dateFormatted)
        }}
        onCancel={() => {
        }}
    /></>)
}