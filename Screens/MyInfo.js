import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {getData,saveData} from '../components/helpers/AsyncHelper'


//components import
import HeaderSection from '../components/HeaderSection';
import Fold from '../components/callBacks/Fold';
import SolidInput from '../components/SolidInput';
import MyInfoCall from '../components/callBacks/MyInfoCall';
//styles
import styles from '../assets/styles/AddSlipInfoStyle';



export default class MyInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rootKey:null,
      childKey:null,
      value:null,
      savedData:null,
      sexChoice: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female'}],
      stateData: require("../assets/data/states.json"),
      requiredItems:[["personalInformation","firstName"],["personalInformation","lastName"],
                     ["physicianDetails","firstName"],["physicianDetails","lastName"]]
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
      
      return result
    }
    return null
    
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
          <HeaderSection Title={"My Info"}/>
          <ScrollView style={styles.bodycontainer}
                      contentContainerStyle={    {
                        justifyContent:"flex-start",
                      alignItems:"center"}} >
              {/*******************************
                  * PERSONAL Information
              */}
            <Fold labelTitle = {"PERSONAL INFORMATION"}>
                {/* First name and last name input*/}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"First Name"}
                                 onChangeText={this.onChangeData}
                                 childKey={"firstName"}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}/>
                                 
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Last Name"}
                                 onChangeText={this.onChangeData}
                                 childKey={"lastName"}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}/>
                </View>
                {/* Birth Date and Sex input */}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Birthdate"}
                                 childKey={"birthDate"}
                                 rootKey = {"personalInformation"}
                                 iconName={"dateRange"}
                                 func="datePicker"
                                 editAble={false}
                                 onChangeText={this.onChangeData}
                                 inputContent={this.getDataCurrent}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Sex"}
                                 onChangeText={this.onChangeData}
                                 childKey={"sex"}
                                 inputType={"dropDown"}
                                 data={this.state.sexChoice}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}/>
                </View>
             </Fold>
             <Fold labelTitle = {"Address"}>
                {/* Street# and City inputs*/}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Street"}
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
                                 inputLabel={"State"}
                                 onChangeText={this.onChangeData}
                                 childKey={"state"}
                                 rootKey = {"address"}
                                 inputType={"dropDown"}
                                 data={this.state.stateData}
                                 inputContent={this.getDataCurrent}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Zip code"}
                                 onChangeText={this.onChangeData}
                                 childKey={"zipCode"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}/>
                </View>
                <SolidInput  width={"100%"} 
                                 inputLabel={"Phone"}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}/>
              </Fold>
              
              <Fold labelTitle = {"PHYSICIAN INFORMATION"}>
                {/* First name and last name input*/}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"First Name"}
                                 onChangeText={this.onChangeData}
                                 childKey={"firstName"}
                                 rootKey = {"physicianDetails"}
                                 inputContent={this.getDataCurrent}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Last Name"}
                                 onChangeText={this.onChangeData}
                                 childKey={"lastName"}
                                 rootKey = {"physicianDetails"}
                                 inputContent={this.getDataCurrent}/>
                </View>
                <SolidInput  width={"100%"} 
                                 inputLabel={"Phone"}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"physicianDetails"}
                                 inputContent={this.getDataCurrent}/>
             </Fold>

             <Fold labelTitle = {"PREFERED PHARMACY INFORMATION"}>
                {/*PHARMACY NAME AND PHONE*/}
                <SolidInput  width={"100%"} 
                                 inputLabel={"Name"}
                                 onChangeText={this.onChangeData}
                                 childKey={"name"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}/>
                                 
                <SolidInput  width={"100%"} 
                                 inputLabel={"Phone"}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}/>
             </Fold>
             <Fold labelTitle = {"PREFERED PHARMACY INFORMATION"}>
                {/*PHARMACY NAME AND PHONE*/}
                <SolidInput  width={"100%"} 
                                 inputLabel={"PIN"}
                                 onChangeText={this.onChangeData}
                                 childKey={"pin"}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}
                                 secureTextEntry={true}/>
             </Fold>
          </ScrollView>
        </MyInfoCall>
      );
  }
}