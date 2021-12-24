import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DatePicker from 'react-native-date-picker'

//components import
import HeaderSection from '../components/HeaderSection';
import SlipPicEditContainer from '../components/SlipPicEditContainer';
import FullInputContainer from '../components/FullInputContainer';
import HalfInputContainer from '../components/HalfInputContainer';
import TwinButtonContainer from '../components/TwinButtonContainer';
import LabelContainer from '../components/LabelContainer';

export default class AddSlipInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {

        date: new Date(),
        open : false,
        refillDropDownData: [
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
          { label: '6', value: '6' },
          { label: '7', value: '7' },
          { label: '8', value: '8' },
        ]
          
      };
  }

  openDatePicker=()=>{
    this.setState({open:true})
  }

  datePicker=()=>{
      return (<><DatePicker
          modal
          mode='date'
          textColor='white'
          open={this.state.open}
          date={this.state.date}
          onConfirm={(date) => {
            this.setState({open:false})
            this.setState({date:date})
          }}
          onCancel={() => {
            this.setState({open:false})
          }}
      /></>)
  }

  render() {
    
    return (

      <View style={styles.singlereconcile}>
            {/** Header Section */}
            
          <HeaderSection Title={"Add Slip Details"}/>
          <ScrollView style={styles.bodycontainer}
            contentContainerStyle={    {justifyContent:"flex-start",
            alignItems:"center"}} >
             <LabelContainer Title="MEDICATION DETAILS"/>
             <View style={styles.hallfInputContainer}>
                <HalfInputContainer inputLabel={"Name of medicine"}
                keyboard="default"/>
                <HalfInputContainer inputLabel={"Strength"}/>
             </View>
             <View style={styles.hallfInputContainer}>
                <HalfInputContainer inputLabel={"Date filled"} 
                                    iconName={"dateRange"}
                                    onPress={this.openDatePicker}
                                    editAble={true}
                                    inputContent={this.state.date.toLocaleDateString("en-US")}/>
                          {this.state.open? this.datePicker():null}


                <HalfInputContainer 
                    inputLabel={"Refills Left"}
                    inputType="dropDown"
                    data={this.state.refillDropDownData}
                />
             </View>
             <FullInputContainer inputLabel={"Medicine directions"}
                                keyboard="default"/>

             <LabelContainer Title = {"PHARMACY DETAILS"}/>
             <FullInputContainer inputLabel={"Name of pharmacy"}
                                 keyboard="default"/>
             <FullInputContainer inputLabel={"Pharmacy Phone"}
                                 keyboard="phone-pad"/>

             <LabelContainer Title = {"PHYICIAN DETAILS"}/>
             <FullInputContainer inputLabel={"Name of pharmacy"}/>
             <FullInputContainer inputLabel={"Phone"}
                                 keyboard="phone-pad"
             />
             <FullInputContainer inputLabel={"Next Appointment"}
                                 inputLabel={"Date filled"} 
                                 iconName={"dateRange"}
                                 onPress={this.openDatePicker}
                                 editAble={true}
                                 inputContent={this.state.date.toLocaleDateString("en-US")}                   
             />

             <LabelContainer Title = {"ADDITIONAL DETAILS"}/>
             <FullInputContainer inputLabel={"Reason for taking/ Diagnosis"}
                                 keyboard="phone-pad"/>
             <View style={styles.twinButtonContainer}>
                <TwinButtonContainer label="Cancel"/>
                <TwinButtonContainer label="Save"/>
             </View>
          </ScrollView>
      </View>
      );
  }
}

function hrp(value){
  return value*100 / 736;
}

function wrp(value){
  return value*100 / 414;
}

const styles = StyleSheet.create({
  "singlereconcile": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "flex":1
  },
  "bodycontainer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(10)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),

    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "elevation": wp(wrp(7)),
    "shadowOffset": {
      "width": 0,
      "height": wp(wrp(1))
    },
    "shadowRadius": wp(wrp(5)),
  },
  "twinButtonContainer":{
    "marginTop":hp(hrp(10)),
    "flexDirection":"row",
    "width" : wp("90%"),
    "justifyContent":"space-between"
 },  
 "hallfInputContainer": {
  "opacity": 1,
  "position": "relative",
  "backgroundColor": "transparent",
  "width": wp("88.5%"),
  "flexDirection": "row",
  "justifyContent": "space-between"
},

});