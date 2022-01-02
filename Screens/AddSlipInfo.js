import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {removeItem,getItem} from '../components/helpers/editItemHelper';
import { getData,saveData} from '../components/helpers/AsyncHelper';

//components import
import HeaderSection from '../components/HeaderSection';
import HalfInputContainer from '../components/HalfInputContainer';
import Fold from '../components/callBacks/Fold';
import MyInfoCall from '../components/callBacks/MyInfoCall';
import SlipPicEditContainer from '../components/SlipPicEditContainer';
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
        itemKey:null,
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

  getNavData = ()=>{
    let item=this.props.route.params.item
    let key = this.props.route.params.key
    if(item){
      return item[key]
    }else{
      return false
    }
  }

  getDataCurrent =(parent,child)=>{
    let currentData = this.getNavData()
    if(currentData){
      let parentData = {...currentData[parent]}
      let result =  parentData[child] ? parentData[child] :null
      return result
    }else{
      return null
    }
  }

  componentDidMount=()=>{
    let currentData = this.getNavData()
    if(currentData){
      this.setState({
        savedData:currentData,
        itemKey: this.props.route.params.key
      })
    }else{
      let imageData = this.props.route.params.imageData
      this.onChangeData("medicationDetails","imageData", imageData)
    }
  }

  saveData=async(data,currentData)=>{

    var date = new Date();
    var itemId =   date.getFullYear()+ ""+ date.getMonth()+ "" 
                 + date.getDate()+ ""+date.getHours()+ ""
                 + date.getMinutes()+ "" + date.getSeconds()+ "" + date.getMilliseconds()+"";

    let slipInfo = {"slipInfo":[],"slipInfoDiscontinued":[]};

      if(data == null){
        slipInfo["slipInfo"].push(
          {[itemId]:currentData}
        )
      }else{
        if(this.state.itemKey != null){
           slipInfo = removeItem(data,this.state.itemKey)
           slipInfo["slipInfo"].push({[this.state.itemKey]:currentData})
        }else{
          data["slipInfo"].push({[itemId]:currentData})
          slipInfo = data
        }

      }
      saveData(slipInfo,"@myMedListSlipInfo")
      this.props.navigation.navigate("Home")
  }
  
  render() {
    return (

      <MyInfoCall 
                  rootKey={this.state.rootKey}
                  childKey={this.state.childKey}
                  value={this.state.value}
                  navigation={this.props.navigation}
                  requiredItems={this.state.requiredItems}
                  saveData={this.saveData}
                  savedData={this.state.savedData}
                  saveKey={"@myMedListSlipInfo"}>
            {/** Header Section */}
            
          <HeaderSection Title={"Add Slip Details"}/>
          
          
          <ScrollView style={styles.bodycontainer}
                      contentContainerStyle={    {
                        justifyContent:"flex-start",
                      alignItems:"center"}} >
              {this.state.itemKey?<SlipPicEditContainer
                                    childKey={"imageData"}
                                    rootKey = {"medicationDetails"}
                                    onChangeText={this.onChangeData}
                                    inputContent={this.getDataCurrent}/>:null}
                                    
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
                                          loadSingleItem={this.state.loadSingleItem}
                                          />
                      <HalfInputContainer 
                                          width={"49%"} 
                                          inputLabel={"Strength"}
                                          onChangeText={this.onChangeData}
                                          childKey={"strength"}
                                          rootKey = {"medicationDetails"}
                                          inputContent={this.getDataCurrent}
                                          loadSingleItem={this.state.loadSingleItem}
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
                                    inputContent={this.getDataCurrent}
                                    loadSingleItem={this.state.loadSingleItem}/>
                                                
                <HalfInputContainer
                                     width={"49%"}
                                    iconName = "arrowRightBlack"
                                    iconName2 = "arrowLefttBlack"
                                    func="numberPicker"
                                    inputLabel={"Refills Left"}
                                    childKey={"refillsLeft"}
                                    rootKey = {"medicationDetails"}
                                    editAble={false}
                                    inputContent={this.getDataCurrent}
                                    onChangeText={this.onChangeData}
                                    loadSingleItem={this.state.loadSingleItem}
                                    keyboard="numeric"/>
             </View>
             <HalfInputContainer 
                                 width={"100%"} 
                                 inputLabel={"Medicine directions"}
                                 onChangeText={this.onChangeData}
                                 childKey={"direction"}
                                 rootKey = {"medicationDetails"}
                                 inputContent={this.getDataCurrent}
                                 loadSingleItem={this.state.loadSingleItem}/>
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
                                 inputContent={this.getDataCurrent}
                                 loadSingleItem={this.state.loadSingleItem}/>

             <HalfInputContainer 
                                 width={"100%"} 
                                 inputLabel={"Pharmacy Phone"}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}
                                 keyboard="phone-pad"
                                 loadSingleItem={this.state.loadSingleItem}/>
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
                                  loadSingleItem={this.state.loadSingleItem}/>

             <HalfInputContainer  
                                  width={"100%"} 
                                  inputLabel={"Phone"}
                                  childKey={"phone"}
                                  rootKey = {"physicianDetails"}
                                  inputContent={this.getDataCurrent}
                                  onChangeText={this.onChangeData}
                                  keyboard="phone-pad"
                                  loadSingleItem={this.state.loadSingleItem}/>         
             <HalfInputContainer  
                                  inputLabel={"Next Appointment"}
                                  childKey={"dateAppointed"}
                                  rootKey = {"medicationDetails"}
                                  iconName={"dateRange"}
                                  func="datePicker"
                                  editAble={false}
                                  onChangeText={this.onChangeData}
                                  inputContent={this.getDataCurrent}
                                  loadSingleItem={this.state.loadSingleItem}/>
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
                                 loadSingleItem={this.state.loadSingleItem}/>
             </Fold>
          </ScrollView>
        </MyInfoCall>
      );
  }
}