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
        medicationDetails:{
          "dateRefilled": new Date(),
          "dateAppointed": new Date(),
          "refillsLeft": 0,
          "name":null,
          "strength":null,
          "direction":null,
          "diagnosis":null
        },
        pharmacyDetails:{
          "name":null,
          "phone":null,
        },
        physicianDetails:{
          "name":null,
          "phonee":null
        },
        opendateAppointed : false,
        opendateRefilled : false,
        openDatePicker : false,
        disabled:true,

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

  /****************************************************** 
   * Date picker functions
  */
  dateRefilledPicker=()=>{
    this.setState({opendateRefilled:true,openDatePicker:true})
  }
  dateAppointedPicker=()=>{
    this.setState({opendateAppointed:true,openDatePicker:true})
  }
  /**************************************************
   * Increment decrement function
   */
  increamentRefillsLeft=()=>{
    let items = {...this.state.medicationDetails};
    items.refillsLeft= items.refillsLeft+1;
    this.setState({medicationDetails:items})
  }
  decrementRefillsLeft=()=>{
    let items = {...this.state.medicationDetails};
    items.refillsLeft = items.refillsLeft - 1
    items.refillsLeft >= 0 ? this.setState({medicationDetails:items}) : null
  }

  datePicker=()=>{
      //open modal
      let items = {...this.state.medicationDetails}
      return (<><DatePicker
          modal
          mode='date'
          textColor='white'
          open={this.state.openDatePicker}
          date={this.state.opendateRefilled?this.state.medicationDetails["dateRefilled"]:this.state.medicationDetails["dateAppointed"]}
          onConfirm={(date) => {
            if(this.state.opendateRefilled){
              items["dateRefilled"] = date 
            }else if(this.state.opendateAppointed){
              items["dateAppointed"] = date
            }
            this.setState({openDatePicker:false,
                           opendateAppointed:false,
                           opendateRefilled:false,
                           medicationDetails:items
            })
            
          }}
          onCancel={() => {
            this.setState({openDatePicker:false})
          }}
      /></>)
  }

  //handel other text input changes for medicationDetils
  onChangeMedicationDetails=(objectKey,value)=>{
    let item = {...this.state.medicationDetails}
    item[objectKey] = value
    this.setState(prevState => ({
      medicationDetails: {         
             ...item,
      }
    }))
  }
  //handel other text input changes for pharmacyDetails
  onchangePharmacyDetails=(objectKey,value)=>{
    let item = {...this.state.pharmacyDetails}
    item[objectKey] = value
    this.setState(prevState => ({
      pharmacyDetails: {         
             ...item,
      }
    }))
  }

  //handel other text input changes for physicianDetails
  onChangePhysicianDetails=(objectKey,value)=>{
    let item = {...this.state.physicianDetails}
    item[objectKey] = value
    this.setState(prevState => ({
      physicianDetails: {         
             ...item,
      }
    }))
  }

  //check if required field vaues are fullfilled
  requiredFieldsFullfilled = () =>{

    if(this.state.medicationDetails["name"] == null && this.state.medicationDetails["strength"] == null){
      return false;
    }else if(this.state.disabled){

        this.setState({disabled:false})
      }
  }

 componentDidUpdate(){
   this.requiredFieldsFullfilled()
  }


  render() {
    
    return (

      <View style={styles.singlereconcile}>
            {/** Header Section */}
            
          <HeaderSection Title={"Add Slip Details"}/>
          <ScrollView style={styles.bodycontainer}
                      contentContainerStyle={    {
                        justifyContent:"flex-start",
                      alignItems:"center"}} >
              {/*******************************
                  * MEDICATION DETAILS
              */}
             <LabelContainer Title="MEDICATION DETAILS"/>
             <View style={styles.hallfInputContainer}>
                <HalfInputContainer 
                inputLabel={"Name of medicine"}
                keyboard="default"
                input
                onChangeText={this.onChangeMedicationDetails}
                objectKey="name"
                inputContent={this.state.medicationDetails["name"]}/>
                <HalfInputContainer inputLabel={"Strength"}/>
             </View>
             <View style={styles.hallfInputContainer}>
                <HalfInputContainer inputLabel={"Date filled"} 
                                    iconName={"dateRange"}
                                    onPress={this.dateRefilledPicker}
                                    editAble={false}
                                    inputContent={this.state.medicationDetails.dateRefilled.toLocaleDateString("en-US")}/>
                                                 {this.state.openDatePicker? this.datePicker():null}
                <HalfInputContainer
                    iconName = "arrowRightBlack"
                    iconName2 = "arrowLefttBlack"
                    onPress = {this.increamentRefillsLeft}
                    onPress2 = {this.decrementRefillsLeft}
                    inputLabel={"Refills Left"}
                    inputContent={this.state.medicationDetails.refillsLeft+""}
                    editAble={false}/>
             </View>
             <FullInputContainer inputLabel={"Medicine directions"}
                                 keyboard="default"/>
             {/*******************************
              * PHARMACY DETAILS
              */}
             <LabelContainer Title = {"PHARMACY DETAILS"}/>
             <FullInputContainer inputLabel={"Name of pharmacy"}
                                 keyboard="default"
                                 inputContent={this.state.pharmacyDetails["name"]}
                                 onChangeText={this.onchangePharmacyDetails}
                                 objectKey={"name"}/>
             <FullInputContainer inputLabel={"Pharmacy Phone"}
                                 keyboard="phone-pad"
                                 inputContent={this.state.pharmacyDetails["phone"]}
                                 onChangeText={this.onchangePharmacyDetails}
                                 objectKey={"phone"}/>
             {/*******************************
              * PHYICIAN DETAILS
              */}
             <LabelContainer Title = {"PHYSICIAN DETAILS"}/>
             <FullInputContainer  inputLabel={"Name of physician"}
                                  inputContent={this.state.physicianDetails["name"]}
                                  onChangeText={this.onChangePhysicianDetails}
                                  key={"name"}/>
             <FullInputContainer  inputLabel={"Phone"}
                                  keyboard="phone-pad"
                                  inputContent={this.state.physicianDetails["phone"]}
                                  onChangeText={this.onChangePhysicianDetails}
                                  objectKey={"phone"}/>         
             <FullInputContainer  inputLabel={"Next Appointment"}
                                  iconName={"dateRange"}
                                  onPress={this.dateAppointedPicker}
                                  editAble={false}
                                  inputContent={this.state.medicationDetails.dateAppointed.toLocaleDateString("en-US")}                   
             />
              {/*******************************
              * ADDITIONAL DETAILS
              */}        
             <LabelContainer     Title = {"ADDITIONAL DETAILS"}/>
             <FullInputContainer inputLabel={"Reason for taking/ Diagnosis"}
                                 keyboard="phone-pad"
                                 keyboard="default"
                                 onChangeText={this.onChangeMedicationDetails}
                                 objectKey="dianosis"
                                 inputContent={this.state.medicationDetails["diagnosis"]}/>
             <View style={styles.twinButtonContainer}>
                <TwinButtonContainer label="Cancel" disabled={false}/>
                <TwinButtonContainer label="Save" disabled={this.state.disabled}/>
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