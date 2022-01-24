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

    required=()=>{
       let val =  this.props.required(this.props.childKey,this.props.rootKey)
       console.log("val is ",val," ",this.props.childKey," ",this.props.rootKey)
       return val
    }

    componentDidMount(){
        let val = this.props.inputContent(this.props.rootKey,this.props.childKey)
        if(val){
            this.setState({
                value:val+""
            })
        }
    }
    
    render() {
    return(
                    <View pointerEvents={this.props.updateAble ? 'auto' : 'none'} style={[styles.halfinput,{width:this.props.width},
                        {opacity:this.props.updateAble?1:0.3}]}>
                        
                         <Text  style={[styles.halfinputLabel]}>
                            {this.props.inputLabel}
                            {this.required() && this.state.value==null?<Text style={[styles.halfinputLabel,
                             {color:"red"}]}> *</Text>:null}
                        </Text>
                         <View  style={styles.halfinputLabelIcon}>
                         {this.props.iconName2? <TouchableOpacity onPress={this.onPressLeft}>
                              {Icon(this.props.iconName2,styles.halfinputLabelIconColor)}
                            </TouchableOpacity> : null}
                            <InputType {...this.props} setVal={this.setValue} getval={this.state.value}/>
                         {this.props.iconName?<TouchableOpacity onPress={this.onPress}>
                                 {Icon(this.props.iconName,styles.halfinputLabelIconColor)}    
                            </TouchableOpacity>: null}     
                        </View>                   
                        <View  style={[styles.halfinputLayer2Indicator,{width:"100%"}]}></View>
                        {this.state.openDatePicker?<DatePickerHelper open={this.state.openDatePicker} setVal={this.setValue}/>:null}
                    </View>
    )
  }
}
/**End of header section */