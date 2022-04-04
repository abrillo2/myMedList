import React, { useRef, useState } from 'react';
import {TextInput, View,FlatList, ScrollView ,Text} from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import drawerStyle from '../../assets/styles/drawerStyle.js';
import icon from '../hooks/Icon.js';
//import heaader style
import styles from '../../assets/styles/HalfInputStyle.js'
import colors from '../../assets/static_resources/colors.js';
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import remove suggestion
import { removeSuggestion } from '../helpers/AddSlipDetailsHelper.js';
import { hrp } from '../../assets/styles/Dim.js';
//setInputType
export default  function InputType(props){
    const [loading,setloading] = useState(false)
    const [data,setData] = useState([])
    const removeList = useRef([])

    const diagSuggestions=['Cholesterol', 'Diabetes', 'Heart disease', 'Hypertension']

    const onSelectItem= (item) => {
      if(item){                

           item['phone']? props.onChangeText(props.rootKey,'phone',item['phone']+"",true):null
      
           removeList.current=[]
      }
         
    }
    const renderItem = (item,index) => {
      
      return (removeList.current.includes(item.title)?null:
        <View style={[drawerStyle.drawerItems,{flex:1,paddingTop:0,height:hrp(30)},index == data.length -1?{marginBottom:hrp(15)}:null,
              index%2==0?{backgroundColor:'white'}:null]}>
          <View style={{flex:1,flexDirection:'row',justifyContent:"space-between",alignItems:'center',paddingLeft:5}}>
         
          <TouchableOpacity onPressIn={()=>
                  {
                    props.setVal(item.title)
                    onSelectItem(item)
                  }
                  
            }>
            <Text style={[drawerStyle.labelStyle,{marginLeft:'5%'}]}>{item.title}</Text></TouchableOpacity> 
          <TouchableOpacity 
          disabled={diagSuggestions.includes(item.title) | (item.ex && item.ex.includes(item.title))}
          style={{backgroundColor:colors.primary,justifyContent:'center',alignItems:'center',height:"100%",opacity:diagSuggestions.includes(item.title) | (item.ex && item.ex.includes(item.title))?0:1}} onPressIn={()=>{
                        setloading(true)
                        if(props.rootKey == "physicianDetails" && props.childKey == "name"){
                             removeSuggestion("doc",item.title)
                        }else if(props.rootKey == "pharmacyDetails"){
                          removeSuggestion("pharma",item.title)
                        }else if(props.rootKey == "pharmacyDetails" && props.childKey=="diagnosis"){
                          removeSuggestion("diag",item.title)
                        }

                       

                        
                       
                        props.suggessions.then((result) => {
                            let rlist = [...removeList.current]
                            rlist.push(item.title) 
                            removeList.current=[...rlist]
                            setData(result);
                            setloading(false)
                            
                        })
                       
                  }}>{icon("close",{marginLeft:'5%'},24,"#3685b5")}</TouchableOpacity>
          </View>
          <View  style={[drawerStyle.separator,{width:'100%'}]}></View>
        </View>
      );
    };

    
    if(props.inputType =="dropDown"){
      return (
          <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              searchPlaceholder={props.inputLabel}
              iconStyle={styles.iconStyle}
              data={props.data}
              labelField="id"
              valueField="title"
              disable={false}
              value={props.getval()}
              maxHeight={150}
              placeholder={props.inputLabel}
              onFocus={() => {}}
              onBlur={() =>{}}
              onChange={item => {
                  props.setVal(item.title)
              }}
              
        />)
  }else if(props.inputType =="dropDown" || props.suggessions){

       props.suggessions.then((result) => {
          setData(result);
       })

        return (
            <View style={{flex:1,position:'relative'}}>
            <AutocompleteDropdown
                clearOnFocus={true}
                closeOnBlur={true}
                closeOnSubmit={true}
                bottomOffset={10000}
                showClear={false}
                showChevron={true}
                emptyResultText={null}
                loading={loading}
                textInputProps={{
                    placeholder:props.inputLabel,
                    autoCorrect: false,
                    editAble:false,
                    autoCapitalize: "none",
                    color:colors.inputTextColor,
                    placeholderTextColor:colors.placeHolderTextColor,
                   

                    onChangeText:(text)=>props.setVal(text),
                    value:props.getval()
                    
                  }
                }
                ScrollViewComponent={
                 
                 ()=> {return (<View style={{elevation:7,shadowColor:colors.activeColor}}>
                   
                      <FlatList
                          data={data}
                        
                          extraData={loading}
                          contentContainerStyle={{flex:1}}
                          nestedScrollEnabled={true}
                          scrollEnabled={true}
                          removeClippedSubviews={false}
                          renderItem={({ item, index }) => (
                            
                              (item.title.includes(props.getval()) && item.title != props.getval())  | (props.getval() == null | props.getval() == "") ?renderItem(item,index):null
                            
                            
                                
                      )}/>  
                  </View>)}
                 
                }
                  
                  
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