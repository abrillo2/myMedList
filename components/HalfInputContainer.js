//imports
import React, {Component} from 'react';
import {Text, View, TextInput,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import InputType from './hooks/InputType';
import Icon from './hooks/Icon'
import DatePickerHelper from './DatePicker';

//import heaader style
import styles from '../assets/styles/HalfInputStyle.js'

//Header section
export default class HalfInputContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          openDatePicker:false,
          value:null,
        };
    }
  
    onPress=()=>{
        let func = this.props.func
        switch(func){
         
          case "datePicker":
                  this.setState({
                      openDatePicker:true
                  });
                  break;
          case "numberPicker":
                  let val = this.state.value
                  val = Number(val) + Number(1)
                  this.setValue(val);
                  break;
          default:
                 console.log("default");
              break;
              
        }
    }
    

    onPressLeft=()=>{
        let func = this.props.func
        switch(func){
          case "numberPicker":
            let val = this.state.value

            val = Number(val)> 0 ? Number(val) - Number(1): val
            this.setValue(val);
            break; 
        }
    }


  
    setValue=(val)=>{
        this.setState({
            value:val+"",
            openDatePicker:false
        });
        this.props.onChangeText(this.props.rootKey,this.props.childKey,val)
        
    }

    componentDidMount(){
        let val = this.props.inputContent(this.props.rootKey,this.props.childKey)
        if(val){
            this.setState({
                value:val
            })
        }
    }
    
    render() { 
    return(
                    <View  style={[styles.halfinput,{width:this.props.width}]}>
                        
                         <Text  style={styles.halfinputLabel}>
                            {this.props.inputLabel}
                            {this.props.required?<Text style={[styles.halfinputLabel,
                             {color:"red"}]}> *</Text>:null}
                        </Text>
                         <View  style={styles.halfinputLabelIcon}>
                         {this.props.iconName2? <TouchableOpacity onPress={this.onPressLeft}>
                                <ReactImage style={styles.halfinputLabelIconColor}  source={Icon(this.props.iconName2)}/>     
                            </TouchableOpacity> : null}
                            <InputType {...this.props} setVal={this.setValue} getval={this.state.value}/>
                         {this.props.iconName?<TouchableOpacity onPress={this.onPress}>
                               <ReactImage style={styles.halfinputLabelIconColor}  source={Icon(this.props.iconName)}/>     
                            </TouchableOpacity>: null}     
                        </View>                   
                        {/*<View  style={styles.halfinputLayer2Indicator}></View>*/}
                        {this.state.openDatePicker?<DatePickerHelper open={this.state.openDatePicker} setVal={this.setValue}/>:null}
                    </View>
    )
  }
}
/**End of header section */