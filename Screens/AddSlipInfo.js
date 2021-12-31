import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


//components import
import HeaderSection from '../components/HeaderSection';
import FullInputContainer from '../components/FullInputContainer';
import HalfInputContainer from '../components/HalfInputContainer';
import TwinButtonContainer from '../components/TwinButtonContainer';
import LabelContainer from '../components/LabelContainer';
import Fold from '../components/callBacks/Fold';
//styles
import styles from '../assets/styles/AddSlipInfoStyle'

export default class AddSlipInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {
        medicationDetails:{
          "dateRefilled": new Date().toLocaleDateString("en-US"),
          "dateAppointed": new Date().toLocaleDateString("en-US"),
          "refillsLeft": 0,
          "name":null,
          "strength":null,
          "direction":null,
          "diagnosis":null,
          "imageData":null,
        },
        pharmacyDetails:{
          "name":null,
          "phone":null,
        },
        physicianDetails:{
          "name":null,
          "phone":null
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
          date={new Date()}
          onConfirm={(date) => {
            if(this.state.opendateRefilled){
              items["dateRefilled"] = date.toLocaleDateString("en-US") 
            }else if(this.state.opendateAppointed){
              items["dateAppointed"] = date.toLocaleDateString("en-US")
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
    let item = {...this.state.pharmacyDetails}
    let item2 = {...this.state.medicationDetails}
    if(item["name"] !=null && item2["name"] != null &&  item2["dateRefilled"]
        && item2["refillsLeft"]){
          if(this.state.disabled){
              this.setState({disabled:false})
          }

    }
  }
  /*******************************
   *  Handel Form Submission
   *****************************/
  CancelPressed =()=>{
    this.props.navigation.goBack()
  }
  savePressed = async (value,itemId) => {
   //console.log(itemId+"")
   try {
      let data = await  this.getData()
      let slipInfo = null;
      if(data == null){
        slipInfo = {"slipInfo":[]}
        slipInfo["slipInfo"].push(
          {[itemId]:value}
        )
      }else{
        data["slipInfo"].push({[itemId]:value})
        slipInfo = data
      }

      const jsonValue = JSON.stringify(slipInfo)
      await AsyncStorage.setItem("@myMedList", jsonValue)
      this.props.navigation.navigate("Share")
    }catch (e) {
      // saving error
      console.log(e)
    }
  }

  addSlipInfo=()=>{
    var date = new Date();
    var itemId =   date.getFullYear()+ ""+ date.getMonth()+ "" 
                 + date.getDate()+ ""+date.getHours()+ ""
                 + date.getMinutes()+ "" + date.getSeconds()+ "" + date.getMilliseconds()+"";

    let stateData = {
                    medicationDetails: {...this.state.medicationDetails},
                    pharmacyDetails:{...this.state.pharmacyDetails},
                    physicianDetails:{...this.state.physicianDetails}
                }
    this.savePressed(stateData,itemId+"");

  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@myMedList')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  //fold or expand components
  foldExpand = () =>{

  }

  componentDidMount(){
    this.onChangeMedicationDetails("imageData",this.props.route.params.response)
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
             <Fold
                labelTitle = {"MEDICATION DETAILS"}
             
             >
             <View style={styles.hallfInputContainer}>
                <HalfInputContainer 
                inputLabel={"Name of medicine"}
                keyboard="default"
                required={this.state.medicationDetails["name"] == null || this.state.medicationDetails["name"] == ""}
                onChangeText={this.onChangeMedicationDetails}
                objectKey="name"
                inputContent={this.state.medicationDetails["name"]}/>
                <HalfInputContainer inputLabel={"Strength"}
                                    objectKey={"strength"}
                                    onChangeText={this.onChangeMedicationDetails}
                                    required={this.state.medicationDetails["strength"] == null || this.state.medicationDetails["strength"] == ""}
                                    inputContent={this.state.medicationDetails["strength"]}/>
             </View>
             <View style={styles.hallfInputContainer}>
                <HalfInputContainer inputLabel={"Date filled"} 
                                    iconName={"dateRange"}
                                    onPress={this.dateRefilledPicker}
                                    editAble={false}
                                    inputContent={this.state.medicationDetails.dateRefilled+""}/>
                                                 {this.state.openDatePicker? this.datePicker():null}
                <HalfInputContainer
                    iconName = "arrowRightBlack"
                    iconName2 = "arrowLefttBlack"
                    onPress = {this.increamentRefillsLeft}
                    onPress2 = {this.decrementRefillsLeft}
                    inputLabel={"Refills Left"}
                    inputContent={this.state.medicationDetails.refillsLeft+""}
                    required={this.state.medicationDetails["refillsLeft"] == 0 || this.state.medicationDetails["strength"] == ""}
                    editAble={false}/>
             </View>
             <FullInputContainer inputLabel={"Medicine directions"}
                                 keyboard="default"
                                 objectKey={"direction"}
                                 onChangeText={this.onChangeMedicationDetails}
                                 inputContent={this.state.medicationDetails["direction"]}/>
             </Fold>

             {/*******************************
              * PHARMACY DETAILS
              */}
             <Fold
                labelTitle = {"PHARMACY DETAILS"}
             >
             <FullInputContainer inputLabel={"Name of pharmacy"}
                                 required={this.state.pharmacyDetails["name"] == null || this.state.pharmacyDetails["name"] == ""}                
                                 keyboard="default"
                                 inputContent={this.state.pharmacyDetails["name"]}
                                 onChangeText={this.onchangePharmacyDetails}
                                 objectKey={"name"}/>
             <FullInputContainer inputLabel={"Pharmacy Phone"}
                                 keyboard="phone-pad"
                                 inputContent={this.state.pharmacyDetails["phone"]}
                                 onChangeText={this.onchangePharmacyDetails}
                                 objectKey={"phone"}/>
             </Fold>
             
             {/*******************************
              * PHYICIAN DETAILS
              */}
             <Fold
                 labelTitle = {"PHYSICIAN DETAILS"}
             >
             <FullInputContainer  inputLabel={"Name of physician"}
                                  required={this.state.physicianDetails["name"] == null || this.state.physicianDetails["name"] == ""}  
                                  inputContent={this.state.physicianDetails["name"]}
                                  onChangeText={this.onChangePhysicianDetails}
                                  objectKey={"name"}/>
             <FullInputContainer  inputLabel={"Phone"}
                                  keyboard="phone-pad"
                                  inputContent={this.state.physicianDetails["phone"]}
                                  onChangeText={this.onChangePhysicianDetails}
                                  objectKey={"phone"}/>         
             <FullInputContainer  inputLabel={"Next Appointment"}
                                  iconName={"dateRange"}
                                  onPress={this.dateAppointedPicker}
                                  editAble={false}
                                  inputContent={this.state.medicationDetails.dateAppointed+""}                   
             />
             </Fold>
             
              {/*******************************
              * ADDITIONAL DETAILS
              */}        
             <Fold
                labelTitle = {"ADDITIONAL DETAILS"}>
             <FullInputContainer inputLabel={"Reason for taking/ Diagnosis"}
                                 keyboard="phone-pad"
                                 keyboard="default"
                                 onChangeText={this.onChangeMedicationDetails}
                                 objectKey="diagnosis"
                                 inputContent={this.state.medicationDetails["diagnosis"]}/>
             </Fold>
          </ScrollView>
          <View style={styles.twinButtonContainer}>
                <TwinButtonContainer label="Cancel" 
                                     disabled={false}
                                     onPress={this.CancelPressed}/>
                <TwinButtonContainer label="Save" disabled={this.state.disabled}
                                      onPress={this.addSlipInfo}/>
              </View>

        </View>
      );
  }
}