import React, {Component} from 'react';
import {FlatList,View, SafeAreaView} from 'react-native';
import {getData,saveData} from '../helpers/AsyncHelper'


//components import
import Fold from '../callBacks/Fold';
import SolidInput from '../components/SolidInput';
import MyInfoCall from '../callBacks/MyInfoCall';
import Spinner from '../helpers/Spinner';
//styles
import styles from '../../assets/styles/AddSlipInfoStyle';
//static resources
import appLabels,{formInputLabel,appMessages} from '../../assets/static_resources/strings'
import appObjects,{myInfoFormLabels} from '../../assets/static_resources/objects';


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
      requiredItems: appObjects.myInfoRequiredItems,
      spinnerOn:false,
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
      
      if(child==="pin" && result === "" | (result.length < 2 | result===null)){
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
    this.setState({
      spinnerOn:true
    })
    let slipInfo = null;
   
    slipInfo = {"myInfo":{}}
    slipInfo["myInfo"]={...currentData}
    
    const jsonValue = JSON.stringify(slipInfo)
    saveData(jsonValue,"@myMedListMyInfo")

    setTimeout(()=>{
      this.props.navigation.navigate(appLabels.homeTitle)},1000)
  }

  componentDidMount=async()=>{

    let data = await getData("@myMedListMyInfo");
    data = JSON.parse(data)
    if(data){
      this.setState({
        savedData:{...data["myInfo"]}
    })
    }
  }

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
      this.state.spinnerOn?<Spinner message={appMessages.savingMyInfo}/> :
      <MyInfoCall 
                  rootKey={this.state.rootKey}
                  childKey={this.state.childKey}
                  value={this.state.value}
                  navigation={this.props.navigation}
                  requiredItems={this.state.requiredItems}
                  saveData={this.saveDataCurrent}
                  savedData={this.state.savedData}
                  saveKey={"@myMedListMyInfo"}>

            <FlatList
                  data={myInfoFormLabels.folds}
                  renderItem={({ item, index }) => (
                    <Fold labelTitle = {item.title}>
                      {
                        <FlatList
                         data={item.content}
                         renderItem={({ item, index }) => 

                           
                          item.group ?
                          <View style={styles.hallfInputContainer}>
                                
                                <SolidInput  width={"49%"} 
                                      inputLabel={item.group[0].inputLabel}
                                      onChangeText={this.onChangeData}
                                      childKey={item.group[0].childKey}
                                      rootKey = {item.group[0].rootKey}
                                      inputContent={this.getDataCurrent}
                                      required = {this.required}
                                      
                                      iconName={item.group[0].iconName? item.group[0].iconName:null}
                                      func={item.group[0].func? item.group[0].func:null}
                                      editAble={item.group[0].editAble? item.group[0].iconName:true}
                                      data={item.group[0].data? item.group[0].data:null}
                                      inputType={item.group[0].inputType? item.group[0].inputType:null}
                                      
                                      />
                                 <SolidInput  width={"49%"} 
                                      inputLabel={item.group[1].inputLabel}
                                      onChangeText={this.onChangeData}
                                      childKey={item.group[1].childKey}
                                      rootKey = {item.group[1].rootKey}
                                      inputContent={this.getDataCurrent}
                                      required = {this.required}
                                      
                                      iconName={item.group[1].iconName? item.group[1].iconName:null}
                                      func={item.group[1].func? item.group[0].func:null}
                                      editAble={item.group[1].editAble? item.group[1].iconName:true}
                                      data={item.group[1].data? item.group[1].data:null}
                                      inputType={item.group[1].inputType? item.group[1].inputType:null}
                                      
                                      />
                          </View>
                          :(<SolidInput  width={item.width} 
                              inputLabel={item.inputLabel}
                              onChangeText={this.onChangeData}
                              childKey={item.childKey}
                              rootKey = {item.rootKey}
                              inputContent={this.getDataCurrent}
                              required = {this.required}
                              
                              iconName={item.iconName? item.iconName:null}
                              func={item.func? item.func:null}
                              editAble={item.editAble? item.iconName:true}
                              data={item.data? item.data:null}
                              inputType={item.inputType? item.inputType:null}/>
                          )}/>}
                    </Fold>
                  )}/>
              {/*******************************
                  * PERSONAL Information
              */}
          {/*  <Fold labelTitle = {appLabels.myInfoPersonalInformationLabel}>
                {// First name and last name input}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.firstName}
                                 onChangeText={this.onChangeData}
                                 childKey={"firstName"}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                                 
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.lastName}
                                 onChangeText={this.onChangeData}
                                 childKey={"lastName"}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                </View>
                {//Birth Date and Sex input}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.birthDate}
                                 childKey={"birthDate"}
                                 rootKey = {"personalInformation"}
                                 iconName={"dateRange"}
                                 func="datePicker"
                                 editAble={false}
                                 onChangeText={this.onChangeData}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.sex}
                                 onChangeText={this.onChangeData}
                                 childKey={"sex"}
                                 inputType={"dropDown"}
                                 data={this.state.sexChoice}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                </View>
             </Fold>
             <Fold labelTitle = {appLabels.myInfoStreetAddressLabel}>
                {//Street# and City inputs}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.streetAddress}
                                 onChangeText={this.onChangeData}
                                 childKey={"street"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"City"}
                                 onChangeText={this.onChangeData}
                                 childKey={"city"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                </View>

                                {//state and zipcode inputs*}
                                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.state}
                                 onChangeText={this.onChangeData}
                                 childKey={"state"}
                                 rootKey = {"address"}
                                 inputType={"dropDown"}
                                 data={this.state.stateData}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.zipCode}
                                 onChangeText={this.onChangeData}
                                 childKey={"zipCode"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                </View>
                <View style={styles.hallfInputContainer}>

                <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.phone}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>

                <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.email}
                                 onChangeText={this.onChangeData}
                                 childKey={"email"}
                                 rootKey = {"address"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>

                </View>
              </Fold>
              
              <Fold labelTitle = {appLabels.myInfoPPrimaryCarePhysician}>
                {//First name and last name input}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.firstName}
                                 onChangeText={this.onChangeData}
                                 childKey={"firstName"}
                                 rootKey = {"physicianDetails"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={formInputLabel.lastName}
                                 onChangeText={this.onChangeData}
                                 childKey={"lastName"}
                                 rootKey = {"physicianDetails"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                </View>
                
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                    inputLabel={formInputLabel.phone}
                                    onChangeText={this.onChangeData}
                                    childKey={"phone"}
                                    rootKey = {"physicianDetails"}
                                    inputContent={this.getDataCurrent}
                                    required = {this.required}/>
                    <SolidInput  width={"49%"} 
                                    inputLabel={formInputLabel.email}
                                    onChangeText={this.onChangeData}
                                    childKey={"email"}
                                    rootKey = {"physicianDetails"}
                                    inputContent={this.getDataCurrent}
                                    required = {this.required}/>
                </View>
             </Fold>

             <Fold labelTitle = {appLabels.pharmacyDetailsLabel}>
                {//PHARMACY NAME AND PHONE}
                <SolidInput  width={"100%"} 
                                 inputLabel={formInputLabel.name}
                                 onChangeText={this.onChangeData}
                                 childKey={"name"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
                                 
                <SolidInput  width={"100%"} 
                                 inputLabel={formInputLabel.phone}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"pharmacyDetails"}
                                 inputContent={this.getDataCurrent}
                                 required = {this.required}/>
             </Fold>
             <Fold labelTitle = {appLabels.pinLabel}>
                {//PHARMACY NAME AND PHONE}
                <SolidInput  width={"100%"} 
                                 inputLabel={formInputLabel.pin}
                                 onChangeText={this.onChangeData}
                                 childKey={"pin"}
                                 rootKey = {"personalInformation"}
                                 inputContent={this.getDataCurrent}
                                 secureTextEntry={false}
                                 required = {this.required}/>
             </Fold>*/}
        </MyInfoCall>
      );
  }
}