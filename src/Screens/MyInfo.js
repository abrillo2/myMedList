import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {getData,saveData} from '../helpers/AsyncHelper'


//components import
import HeaderSection from '../components/HeaderSection';
import Fold from '../callBacks/Fold';
import SolidInput from '../components/SolidInput';
import MyInfoCall from '../callBacks/MyInfoCall';
//styles
import styles from '../../assets/styles/AddSlipInfoStyle';
//static resources
import appLabels,{formInputLabel} from '../../assets/static_resources/strings'
import appObjects from '../../assets/static_resources/objects';


export default class MyInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rootKey:null,
      childKey:null,
      value:null,
      savedData:null,
      sexChoice: appObjects.myInfoSexChoices,
      stateData: require("../../assets/data/states.json"),
      requiredItems: appObjects.myInfoRequiredItems
    }
  }
  onChangeData=(rootKey,childKey, value)=>{
    this.setState({
      rootKey,
      childKey,
      value
    })
  }

  getDataCurrent=async(parent,child)=>{
    let currentData = await getData("@myMedListMyInfo")
    currentData = JSON.parse(currentData)
    if(currentData){
      currentData = currentData["myInfo"]
      let parentData = {...currentData[parent]}
      let result =  parentData[child] ? parentData[child] :null
      
      if(child==="pin" && result === ""){
        return "0000" 
      }else{
        return result
      }
      
    }else if(child==="pin"){
      return "0000"
    }else{  
     return null
    }
    
  }

  saveDataCurrent=(data,currentData)=>{
    let slipInfo = null;
   
    slipInfo = {"myInfo":{}}
    slipInfo["myInfo"]={...currentData}
    
    const jsonValue = JSON.stringify(slipInfo)
    saveData(jsonValue,"@myMedListMyInfo")
    this.props.navigation.navigate("Home")
  }

  componentDidMount=async()=>{

    let data = await getData("@myMedListMyInfo");
    data = JSON.parse(data)
    console.log("my info data ",data)
    if(data){
      this.setState({
        savedData:{...data["myInfo"]}
    })
    }
  }

  render() {
    return (
      
      <MyInfoCall 
                  rootKey={this.state.rootKey}
                  childKey={this.state.childKey}
                  value={this.state.value}
                  navigation={this.props.navigation}
                  requiredItems={this.state.requiredItems}
                  saveData={this.saveDataCurrent}
                  savedData={this.state.savedData}
                  saveKey={"@myMedListMyInfo"}>
            {/** Header Section */}
          <HeaderSection back={true} Title={"My Info"}/>
          <ScrollView style={styles.bodycontainer}
                      contentContainerStyle={    {
                        justifyContent:"flex-start",
                      alignItems:"center"}} >
              {/*******************************
                  * PERSONAL Information
              */}
            <Fold labelTitle = {appLabels.myInfoPersonalInformationLabel}>
                {/* First name and last name input*/}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.firstName}
                                 onChangeText={this.onChangeData}
                                 childKey={"firstName"}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}/>
                                 
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.lastName}
                                 onChangeText={this.onChangeData}
                                 childKey={"lastName"}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}/>
                </View>
                {/* Birth Date and Sex input */}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.birthDate}
                                 childKey={"birthDate"}
                                 rootKey = {"personalInformation"}
                                 iconName={"dateRange"}
                                 func="datePicker"
                                 editAble={false}
                                 onChangeText={this.onChangeData}
                                 inputContent={this.getDataCurrent}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.sex}
                                 onChangeText={this.onChangeData}
                                 childKey={"sex"}
                                 inputType={"dropDown"}
                                 data={this.state.sexChoice}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}/>
                </View>
             </Fold>
             <Fold labelTitle = {appLabels.myInfoStreetAddressLabel}>
                {/* Street# and City inputs*/}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.streetAddress}
                                 onChangeText={this.onChangeData}
                                 childKey={"street"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"City"}
                                 onChangeText={this.onChangeData}
                                 childKey={"city"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}/>
                </View>

                                {/* state and zipcode inputs*/}
                                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.state}
                                 onChangeText={this.onChangeData}
                                 childKey={"state"}
                                 rootKey = {"address"}
                                 inputType={"dropDown"}
                                 data={this.state.stateData}
                                 inputContent={this.getDataCurrent}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.zipCode}
                                 onChangeText={this.onChangeData}
                                 childKey={"zipCode"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}/>
                </View>
                <View style={styles.hallfInputContainer}>

                <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.phone}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}/>

                <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.email}
                                 onChangeText={this.onChangeData}
                                 childKey={"email"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}/>

                </View>
              </Fold>
              
              <Fold labelTitle = {appLabels.myInfoPPrimaryCarePhysician}>
                {/* First name and last name input*/}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.firstName}
                                 onChangeText={this.onChangeData}
                                 childKey={"firstName"}
                                 rootKey = {"physicianDetails"}
                                 inputContent={this.getDataCurrent}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.lastName}
                                 onChangeText={this.onChangeData}
                                 childKey={"lastName"}
                                 rootKey = {"physicianDetails"}
                                 inputContent={this.getDataCurrent}/>
                </View>
                
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                    inputLabel={formInputLabel.phone}
                                    onChangeText={this.onChangeData}
                                    childKey={"phone"}
                                    rootKey = {"physicianDetails"}
                                    inputContent={this.getDataCurrent}/>
                    <SolidInput  width={"49%"} 
                                    inputLabel={formInputLabel.email}
                                    onChangeText={this.onChangeData}
                                    childKey={"email"}
                                    rootKey = {"physicianDetails"}
                                    inputContent={this.getDataCurrent}/>
                </View>
             </Fold>

             <Fold labelTitle = {appLabels.pharmacyDetailsLabel}>
                {/*PHARMACY NAME AND PHONE*/}
                <SolidInput  width={"100%"} 
                                 inputLabel={formInputLabel.name}
                                 onChangeText={this.onChangeData}
                                 childKey={"name"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}/>
                                 
                <SolidInput  width={"100%"} 
                                 inputLabel={formInputLabel.phone}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}/>
             </Fold>
             <Fold labelTitle = {appLabels.pinLabel}>
                {/*PHARMACY NAME AND PHONE*/}
                <SolidInput  width={"100%"} 
                                 inputLabel={formInputLabel.pin}
                                 onChangeText={this.onChangeData}
                                 childKey={"pin"}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}
                                 secureTextEntry={false}/>
             </Fold>
          </ScrollView>
        </MyInfoCall>
      );
  }
}