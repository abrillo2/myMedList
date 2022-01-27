import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import DatePickerHelper from './DatePicker';
//import styles
import styles from '../../assets/styles/SolidInputStyle';
import HalfInputStyle from '../../assets/styles/HalfInputStyle';
import Icon from '../hooks/Icon'
import InputType from '../hooks/InputType';
//colors

export default class SolidInput extends Component {

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
                })
            
      }
  }

  setValue=(val)=>{
      this.setState({
          value:val+"",
          openDatePicker:false
      });

      this.props.onChangeText(this.props.rootKey,this.props.childKey,val)
      
  }

  async componentDidMount(){
      let val = await this.props.inputContent(this.props.rootKey,this.props.childKey)

      if(val){
        this.setState({
            value:val
        })
      }

  }

  required=()=>{
    if(this.props.required){
        let val =  this.props.required(this.props.childKey,this.props.rootKey)
        return val
    }else{
        return false
    }
  }

  render() {
    return (
        <View  style={[styles.solidInputContainer,{width:this.props.width}]}>
            <View  style={styles.solidInputBorderContainer}>
                    <InputType {...this.props} setVal={this.setValue} getval={this.state.value}/>
                    {this.props.iconName?<TouchableOpacity onPress={this.onPress}>
                                {Icon(this.props.iconName,HalfInputStyle.halfinputLabelIconColor)}
                    </TouchableOpacity>: null}
            </View>
             <View  style={styles.labelContainer}>
                <Text  style={styles.labelTextStyle}>
                            {this.props.inputLabel}
                            {this.required() && this.state.value == null?<Text style={[styles.halfinputLabel,
                            {color:"red"}]}> *</Text>:null}
                </Text>
            </View>
            {this.state.openDatePicker?<DatePickerHelper open={this.state.openDatePicker} setVal={this.setValue}/>:null}
        </View>
    );
  }
}