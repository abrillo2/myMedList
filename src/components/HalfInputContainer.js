//imports
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import InputType from '../hooks/InputType';
import Icon from '../hooks/Icon'
import DatePickerHelper from './DatePicker';
//import heaader style
import styles from '../../assets/styles/HalfInputStyle.js'

//Header section
export default class HalfInputContainer extends React.Component{

    constructor(props) {
        super(props);
        this.isDatePickerOpen = React.createRef(false);
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
                  let val = this.getValue()
                  val = val?val:0
                  val = Number(val)<= 11?  Number(val)+ Number(1): Number(val)
                  this.handelFunc(val);
                  break;
          default:
              break;
              
        }
    }
    

    onPressLeft=()=>{
        let func = this.props.func
        switch(func){
          case "numberPicker":
            let val = this.getValue()

            val = Number(val)> 0 ? Number(val) - Number(1): val
            this.handelFunc(val);
            break; 
        }
    }

    setValue=(val)=>{
        this.isDatePickerOpen.current=false;
        if(this.props.func == 'numberPicker'){
            this.handelFunc(val)
        }else{
          this.state.openDatePicker? this.setState({openDatePicker:false}):null;
          this.props.onChangeText(this.props.rootKey,this.props.childKey,val);
          this.setState({value:val})
        }
        
      }
    
      getValue=()=>{
         let val = this.state.value!=null?this.state.value: this.props.inputContent(this.props.rootKey,this.props.childKey)
        
         return val!=null?val+"":null
      }


  
    handelFunc=(val)=>{

        let value = val;

        if(this.props.func == 'numberPicker'){
            if(Number(val) > 12){
                value = 12
            }else if(Number(val) < 0){
                value = 0
            }else if(!(Number(val)<=12 && Number(val)>=0)){
                value=0
            }
        
        }
        this.props.onChangeText(this.props.rootKey,this.props.childKey,value+"")
        this.setState({value})
    }

    required=()=>{
       let val =  this.props.required(this.props.childKey,this.props.rootKey)
       return val && this.getValue() == null
    }   
    
    showDatePicker=()=>{

        if(this.props.func == 'datePicker' && this.state.openDatePicker && !this.isDatePickerOpen.current){
            this.isDatePickerOpen.current=true;
            return(<DatePickerHelper {...this.props} getVal={this.getValue} open={this.state.openDatePicker} setVal={this.setValue}/>)
        }else{
            return null
        }
       
    }
    

    render() {
    return(
                    <View pointerEvents={this.props.updateAble ? 'auto' : 'none'} style={[styles.halfinput,{width:this.props.width},
                        {opacity:this.props.updateAble?1:0.3}]}>

                        

                        
                         <Text  style={[styles.halfinputLabel]}>
                            {this.props.inputLabel}
                            {this.required()?<Text style={[styles.halfinputLabel,
                             {color:"red"}]}> *</Text>:null}
                        </Text>
                         <View  style={styles.halfinputLabelIcon}>
                         {this.props.iconName2? <TouchableOpacity onPress={this.onPressLeft}>
                              {Icon(this.props.iconName2,styles.halfinputLabelIconColor)}
                            </TouchableOpacity> : null}
                            <InputType {...this.props} setVal={this.setValue} getval={this.state.value!=null?()=>this.state.value+"":this.getValue}/>
                         {this.props.iconName?<TouchableOpacity onPress={this.onPress}>
                                 {Icon(this.props.iconName,styles.halfinputLabelIconColor)}    
                            </TouchableOpacity>: null}     
                        </View>                   
                        <View  style={[styles.halfinputLayer2Indicator,{width:"100%"}]}></View>
                       
                        {this.props.func == 'datePicker' ?this.showDatePicker():null}
                    </View>
    )
  }
}
/**End of header section */