import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


//components import
import HeaderSection from '../components/HeaderSection';
import HalfInputContainer from '../components/HalfInputContainer';
import Fold from '../components/callBacks/Fold';
import MyInfoCall from '../components/callBacks/MyInfoCall';
//styles
import styles from '../assets/styles/AddSlipInfoStyle'

export default class AddSlipInfo extends Component {

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
        requiredItems:[["medicationDetails","name"],["medicationDetails","strength"],
                       ["medicationDetails","dateRefilled"],["physicianDetails","name"]],
        opendateAppointed : false,
        opendateRefilled : false,
        openDatePicker : false,
        disabled:true,
      };
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
      const jsonValue = await AsyncStorage.getItem("@myMedListSlipInfo")
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  getDataCurrent=async(parent,child)=>{
    let sateData = await this.getData()
    sateData = {...sateData[this.props.itemId]}
    sateData = {...sateData["slipInfo"]}
    let parentData = {...sateData[parent]}
    let result =  parentData[child] ? parentData[child] :null
    return result
    
  }

  saveData=async(data,currentData)=>{

    var date = new Date();
    var itemId =   date.getFullYear()+ ""+ date.getMonth()+ "" 
                 + date.getDate()+ ""+date.getHours()+ ""
                 + date.getMinutes()+ "" + date.getSeconds()+ "" + date.getMilliseconds()+"";

    let slipInfo = null;
    try{
      if(data == null){
        slipInfo = {"slipInfo":[]}
        slipInfo["slipInfo"].push(
          {[itemId]:currentData}
        )
      }else{
        data["slipInfo"].push({[itemId]:currentData})
        slipInfo = data
      }
      const jsonValue = JSON.stringify(slipInfo)
      await AsyncStorage.setItem("@myMedListSlipInfo", jsonValue)
      this.props.navigation.navigate("Home")
    }catch (e) {
    // saving error
      console.log(e)
    }
  }

  componentDidMount=async()=>{

    let data = await this.getData();
    this.setState({
        //savedData:{...data["slipInfo"]}
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
                  saveKey={"@myMedListSlipInfo"}>
            {/** Header Section */}
            
          <HeaderSection Title={"Add Slip Details"}/>
          <ScrollView style={styles.bodycontainer}
                      contentContainerStyle={    {
                        justifyContent:"flex-start",
                      alignItems:"center"}} >
              {/*******************************
                  * MEDICATION DETAILS
              */}
             <Fold
                labelTitle = {"MEDICATION DETAILS"}
             
             >
             <View style={styles.hallfInputContainer}>
                      <HalfInputContainer 
                                          width={"49%"} 
                                          inputLabel={"Name of medicine"}
                                          onChangeText={this.onChangeData}
                                          childKey={"name"}
                                          rootKey = {"medicationDetails"}
                                          inputContent={this.getDataCurrent}

                                          />
                      <HalfInputContainer 
                                          width={"49%"} 
                                          inputLabel={"Strength"}
                                          onChangeText={this.onChangeData}
                                          childKey={"strength"}
                                          rootKey = {"medicationDetails"}
                                          inputContent={this.getDataCurrent}
                                          />
             </View>
             <View style={styles.hallfInputContainer}>
                <HalfInputContainer 
                                    width={"49%"} 
                                    inputLabel={"Date filled"}
                                    childKey={"dateRefilled"}
                                    rootKey = {"medicationDetails"}
                                    iconName={"dateRange"}
                                    func="datePicker"
                                    editAble={false}
                                    onChangeText={this.onChangeData}
                                    inputContent={this.getDataCurrent}/>
                                                
                <HalfInputContainer
                                     width={"49%"}
                                    iconName = "arrowRightBlack"
                                    iconName2 = "arrowLefttBlack"
                                    onChangeText={this.onChangeData}
                                    func="numberPicker"
                                    inputLabel={"Refills Left"}
                                    editAble={false}/>
             </View>
             <HalfInputContainer 
                                 width={"100%"} 
                                 inputLabel={"Medicine directions"}
                                 onChangeText={this.onChangeData}
                                 childKey={"direction"}
                                 rootKey = {"medicationDetails"}
                                 inputContent={this.getDataCurrent}/>
             </Fold>
             {/*******************************
              * PHARMACY DETAILS
              */}
             <Fold
                labelTitle = {"PHARMACY DETAILS"}
             >
             <HalfInputContainer 
                                 width={"100%"} 
                                 inputLabel={"Name of pharmacy"}
                                 onChangeText={this.onChangeData}
                                 childKey={"name"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}/>

             <HalfInputContainer 
                                 width={"100%"} 
                                 inputLabel={"Pharmacy Phone"}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}
                                 keyboard="phone-pad"/>
             </Fold>
             
             {/*******************************
              * PHYICIAN DETAILS
              */}
             <Fold
                 labelTitle = {"PHYSICIAN DETAILS"}
             >
             <HalfInputContainer  
                                  width={"100%"} 
                                  inputLabel={"Name of physician"}
                                  onChangeText={this.onChangeData}
                                  childKey={"name"}
                                  rootKey = {"physicianDetails"}
                                  inputContent={this.getDataCurrent}
                                  keyboard="phone-pad"/>

             <HalfInputContainer  
                                  width={"100%"} 
                                  inputLabel={"Phone"}
                                  onChangeText={this.onChangeData}
                                  childKey={"phone"}
                                  rootKey = {"physicianDetails"}
                                  inputContent={this.getDataCurrent}
                                  keyboard="phone-pad"/>         
             <HalfInputContainer  
                                  inputLabel={"Next Appointment"}
                                  childKey={"dateAppointed"}
                                  rootKey = {"medicationDetails"}
                                  iconName={"dateRange"}
                                  func="datePicker"
                                  editAble={false}
                                  onChangeText={this.onChangeData}
                                  inputContent={this.getDataCurrent}/>
             </Fold>
             
              {/*******************************
              * ADDITIONAL DETAILS
              */}        
             <Fold
                labelTitle = {"ADDITIONAL DETAILS"}>
                <HalfInputContainer 
                
                                 width={"100%"} 
                                 inputLabel={"Reason for taking/ Diagnosis"}
                                 onChangeText={this.onChangeData}
                                 childKey={"diagnosis"}
                                 rootKey = {"medicationDetails"}
                                 inputContent={this.getDataCurrent}
                                 keyboard="phone-pad"/>
             </Fold>
          </ScrollView>
        </MyInfoCall>
      );
  }
}