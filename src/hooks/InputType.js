import React, { useRef, useState } from 'react';
import {TextInput, View} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
//import heaader style
import styles from '../../assets/styles/HalfInputStyle.js'
import colors from '../../assets/static_resources/colors.js';
//setInputType
export default  function InputType(props){

    const focused = useRef(false)
    const [inputVal,setVal] = useState(null)
    if(props.inputType =="dropDown" || props.suggessions){
    
        const data = props.data?props.data:props.suggessions

        return (
            <View style={{flex:1,position:'relative'}}>
            <AutocompleteDropdown
                clearOnFocus={true}
                closeOnBlur={true}
                closeOnSubmit={true}
                bottomOffset={10000}
                showClear={false}
                showChevron={true}
                
                onFocus={()=>{focused.current=true;setVal(null);}}
                onBlur={()=>{focused.current=false;setVal(props.getval());}}
                textInputProps={{
                    placeholder:props.inputLabel,
                    autoCorrect: false,
                    autoCapitalize: "none",
                    placeholderTextColor:colors.placeHolderTextColor,
                    ...(inputVal!=null | !focused.current &&{value:props.getval()})
                    
                  }
                }

                onChangeText={(text)=>props.setVal(text)}
                onSelectItem={(item) => {
                    if(item){                
                       if(props.childKey == 'firstName'){
                         props.setVal(item['firstName']+"")
                         props.onChangeText(props.rootKey,'lastName',item['lastName']+"",true)
                       }else{
                         props.setVal(item.title+"");
                       }

                       
                       item['phone']? props.onChangeText(props.rootKey,'phone',item['phone']+"",true):null
                    
                       focused.current=false
                       setVal(props.getval())
                    }
                       
                  }}
                  
                  
                  inputContainerStyle={{ 
                    backgroundColor: "transparent"
                  }}
                dataSet={data}
            /></View>)
    }else{
        return(
            <TextInput  style={props.iconName ? styles.halfinputInput2 : styles.halfinputInput}
                editable= {props.editAble}
                placeholder={props.inputLabel}
                secureTextEntry={props.secureTextEntry}
                value={props.getval()}
                placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                keyboardType={props.keyboard}
                onChangeText={ text => {props.onChangeText ? 
                    props.setVal(text):console.log("item null")}}
                >
             </TextInput>
        )
    }
}