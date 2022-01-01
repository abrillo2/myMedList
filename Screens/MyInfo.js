import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

  getData=async()=>{
    try {
      const jsonValue = await AsyncStorage.getItem("@myMedListMyInfo")
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  getDataCurrent=async(parent,child)=>{
    let sateData = await this.getData()
    sateData = {...sateData["myInfo"]}
    let parentData = {...sateData[parent]}
    let result =  parentData[child] ? parentData[child] :null
    console.log("wtf",parent)
    
    return result
    
  }

  saveData=async(data,currentData)=>{
    let slipInfo = null;
    try{
      if(data == null){
        slipInfo = {"myInfo":{}}
        slipInfo["myInfo"]={...currentData}
      }else{
        data["myInfo"]={...currentData}
        slipInfo = data
      }
      const jsonValue = JSON.stringify(slipInfo)
      await AsyncStorage.setItem("@myMedListMyInfo", jsonValue)
      this.props.navigation.navigate("Home")
    }catch (e) {
    // saving error
      console.log(e)
    }
  }

  componentDidMount=async()=>{

    let data = await this.getData();
    this.setState({
        savedData:{...data["myInfo"]}
    })
  }

  render() {
    
    return (

      <MyInfoCall 
                  rootKey={this.state.rootKey}
                  childKey={this.state.childKey}
                  value={this.state.value}
                  navigation={this.props.navigation}
                  requiredItems={this.state.requiredItems}
                  savedData={this.saveData}
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
          </ScrollView>
        </MyInfoCall>
      );
  }
}