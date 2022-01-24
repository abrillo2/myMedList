import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {removeItem} from '../helpers/editItemHelper';
import { saveData} from '../helpers/AsyncHelper';

//components import
import HeaderSection from '../components/HeaderSection';
import HalfInputContainer from '../components/HalfInputContainer';
import Fold from '../callBacks/Fold';
import MyInfoCall from '../callBacks/MyInfoCall';
import SlipPicEditContainer from '../components/SlipPicEditContainer';
//styles
import styles from '../../assets/styles/AddSlipInfoStyle'
//import notification modal
import  Notification from '../hooks/Notification'
//static resources
import appObjects from '../../assets/static_resources/objects'
import appLabels,{appDescription, formInputLabel} from '../../assets/static_resources/strings'

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
        stateData: require("../../assets/data/states.json"),
        requiredItems:appObjects.addSlipInfoRequiredItems,
        
        updateAbleItems:null,
        opendateAppointed : false,
        opendateRefilled : false,
        openDatePicker : false,
        disabled:true,
        openModal:false,
        opacity:1,
        formData:null,
        imageData:null,
        dateAdded:new Date().toLocaleDateString("en-US")
      };
  }
  /****
   * init screen
   */
  componentDidMount=()=>{
    let currentData = this.getNavData()
    if(currentData){
      this.setState({
        savedData:currentData,
        itemKey: this.props.route.params.key,
        updateAbleItems:appObjects.addSlipInfoUpdateableItems,
      })
    }else{
      this.onChangeData("medicationDetails","dateAdded", this.state.dateAdded)

    }
  }

  /***************************
   * check updateAble items
   */

  isUpdateAble = (childKey)=>{
    if(this.state.updateAbleItems){
      return this.state.updateAbleItems.indexOf(childKey) !== -1;
    }else{
      return true
    }  
  }

  /*************************************
   * track form input value change
   */
  onChangeData=(rootKey,childKey, value)=>{
    this.setState({
      rootKey,
      childKey,
      value
    })
  }
  /*********************************
   * track drawer navigation params
   */
  getNavData = ()=>{
    let item=this.props.route.params.item
    let key = this.props.route.params.key
    if(item){
      return item[key]
    }else{
      return false
    }
  }
  /*******************************
   * parse data from navigation params
   * or return image or null
   */
  getDataCurrent =(parent,child)=>{
    let currentData = this.getNavData()
    if(currentData){
      let parentData = {...currentData[parent]}
      let result =  parentData[child] ? parentData[child] :null
      return result
    }else if(child==="imageData"){
      return this.props.route.params.imageData
    }else{
      return null
    }
  }


  /**************************
   * track pop up 
   */
  saveDataConfirmed=(data,confirmed)=>{
    this.setState({
      openModal:false,
      opacity:1
    })
    if(confirmed){
      saveData(this.state.formData,"@myMedListSlipInfo")
      this.props.navigation.navigate("Home")
    }

  }
  /******************************
   * save/update slip info
   */
  saveData=async(data,currentData)=>{
    var date = new Date();
    var itemId =   date.getFullYear()+ ""+ date.getMonth()+ "" 
                 + date.getDate()+ ""+date.getHours()+ ""
                 + date.getMinutes()+ "" + date.getSeconds()+ "" + date.getMilliseconds()+"";

    var slipInfo = {"slipInfo":[],"slipInfoDiscontinued":[]};

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
      this.setState({
        formData:slipInfo,
        openModal:true,
        opacity:0.2
      })
  }

  /**************************
   * chec if field is required
   */
  required=(child,parent)=>{
    
    let result = false;
    this.state.requiredItems.forEach(element => {
       let childKey = element[1]
       let parentKey = element[0]
       if(child == childKey && parent == parentKey){
          result =  true;
       }
    });

    return result
    
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
            
          {<HeaderSection back={true} Title={appLabels.slipDetails}navigation={this.props.navigation}/>}
          
          
          <ScrollView style={[styles.bodycontainer,{opacity:this.state.opacity}]}
                      contentContainerStyle={    {
                        justifyContent:"flex-start",
                      alignItems:"center"}} >
          <SlipPicEditContainer
                                    childKey={"imageData"}
                                    rootKey = {"medicationDetails"}
                                    onChangeText={this.onChangeData}
                                    inputContent={this.getDataCurrent}
                                    updateAble={this.isUpdateAble("imageData")}/>
                                    
                                    
              {/*******************************
                  * MEDICATION DETAILS
              */}
             <Fold
                labelTitle = {appLabels.medicationDetailsLabel}
             
             >
             <View style={styles.hallfInputContainer}>
                      <HalfInputContainer 
                                          width={"49%"} 
                                          inputLabel={formInputLabel.medcineName}
                                          onChangeText={this.onChangeData}
                                          childKey={"name"}
                                          rootKey = {"medicationDetails"}
                                          inputContent={this.getDataCurrent}
                                          loadSingleItem={this.state.loadSingleItem}
                                          updateAble={this.isUpdateAble("name")}
                                          required = {this.required}
                                          />
                      <HalfInputContainer 
                                          width={"49%"} 
                                          inputLabel={formInputLabel.strength}
                                          onChangeText={this.onChangeData}
                                          childKey={"strength"}
                                          rootKey = {"medicationDetails"}
                                          inputContent={this.getDataCurrent}
                                          loadSingleItem={this.state.loadSingleItem}
                                          updateAble={this.isUpdateAble("strength")}
                                          required = {this.required}
                                          />
             </View>
             <View style={styles.hallfInputContainer}>
                <HalfInputContainer 
                                    width={"49%"} 
                                    inputLabel={formInputLabel.dateRefilled}
                                    childKey={"dateRefilled"}
                                    rootKey = {"medicationDetails"}
                                    iconName={"dateRange"}
                                    func="datePicker"
                                    editAble={false}
                                    onChangeText={this.onChangeData}
                                    inputContent={this.getDataCurrent}
                                    loadSingleItem={this.state.loadSingleItem}
                                    updateAble={this.isUpdateAble("dateRefilled")}
                                    required = {this.required}/>
                                                
                <HalfInputContainer
                                     width={"49%"}
                                    iconName = "arrowRightBlack"
                                    iconName2 = "arrowLefttBlack"
                                    func="numberPicker"
                                    inputLabel={formInputLabel.refillsLeft}
                                    childKey={"refillsLeft"}
                                    rootKey = {"medicationDetails"}
                                    editAble={false}
                                    inputContent={this.getDataCurrent}
                                    onChangeText={this.onChangeData}
                                    loadSingleItem={this.state.loadSingleItem}
                                    keyboard="numeric"
                                    updateAble={this.isUpdateAble("refillsLeft")}
                                    required = {this.required}/>
             </View>
             <HalfInputContainer 
                                 width={"100%"} 
                                 inputLabel={formInputLabel.medcineDirection}
                                 onChangeText={this.onChangeData}
                                 childKey={"direction"}
                                 rootKey = {"medicationDetails"}
                                 inputContent={this.getDataCurrent}
                                 loadSingleItem={this.state.loadSingleItem}
                                 updateAble={this.isUpdateAble("name")}
                                 required = {this.required}/>
             </Fold>
             {/*******************************
              * PHARMACY DETAILS
              */}
             <Fold
                labelTitle = {appLabels.pharmacyDetailsLabel}
             >
             <HalfInputContainer 
                                 width={"100%"} 
                                 inputLabel={formInputLabel.pharmacyName}
                                 onChangeText={this.onChangeData}
                                 childKey={"name"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}
                                 loadSingleItem={this.state.loadSingleItem}
                                 updateAble={this.isUpdateAble("name")}
                                 required = {this.required}/>

             <HalfInputContainer 
                                 width={"100%"} 
                                 inputLabel={formInputLabel.pharmacyPhone}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}
                                 keyboard="phone-pad"
                                 loadSingleItem={this.state.loadSingleItem}
                                 updateAble={this.isUpdateAble("phone")}
                                 required = {this.required}/>
             </Fold>
             
             {/*******************************
              * PHYICIAN DETAILS
              */}
             <Fold
                 labelTitle = {appLabels.physiciansDetailsLabel}
             >
             <HalfInputContainer  
                                  width={"100%"} 
                                  inputLabel={formInputLabel.physicianName}
                                  onChangeText={this.onChangeData}
                                  childKey={"name"}
                                  rootKey = {"physicianDetails"}
                                  inputContent={this.getDataCurrent}
                                  loadSingleItem={this.state.loadSingleItem}
                                  updateAble={this.isUpdateAble("name")}
                                  required = {this.required}/>

             <HalfInputContainer  
                                  width={"100%"} 
                                  inputLabel={formInputLabel.phone}
                                  childKey={"phone"}
                                  rootKey = {"physicianDetails"}
                                  inputContent={this.getDataCurrent}
                                  onChangeText={this.onChangeData}
                                  keyboard="phone-pad"
                                  loadSingleItem={this.state.loadSingleItem}
                                  updateAble={this.isUpdateAble("phone")}
                                  required = {this.required}/>         
             <HalfInputContainer  
                                  inputLabel={formInputLabel.nextAppointment}
                                  childKey={"dateAppointed"}
                                  rootKey = {"medicationDetails"}
                                  iconName={"dateRange"}
                                  func="datePicker"
                                  editAble={false}
                                  onChangeText={this.onChangeData}
                                  inputContent={this.getDataCurrent}
                                  loadSingleItem={this.state.loadSingleItem}
                                  updateAble={this.isUpdateAble("dateAppointed")}
                                  required = {this.required}/>
             </Fold>
             
              {/*******************************
              * ADDITIONAL DETAILS
              */}        
             <Fold
                labelTitle = {appLabels.addistionDetailsLabel}>
                <HalfInputContainer 
                
                                 width={"100%"} 
                                 inputLabel={formInputLabel.diagnosis}
                                 onChangeText={this.onChangeData}
                                 childKey={"diagnosis"}
                                 rootKey = {"medicationDetails"}
                                 inputContent={this.getDataCurrent}
                                 loadSingleItem={this.state.loadSingleItem}
                                 updateAble={this.isUpdateAble("diagnosis")}
                                 required = {this.required}/>
             </Fold>
          </ScrollView>
          <Notification
                modalVisible={this.state.openModal}
                onPress={this.saveDataConfirmed}
                pTitle={appDescription.addSlipInfoSaveDescription}
                lTitle={appLabels.yes}
                rTitle={appLabels.no}
                showTwin={true}
            />
        </MyInfoCall>
      );
  }
}