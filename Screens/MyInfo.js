import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


//components import
import HeaderSection from '../components/HeaderSection';
import FullInputContainer from '../components/FullInputContainer';
import HalfInputContainer from '../components/HalfInputContainer';
import TwinButtonContainer from '../components/TwinButtonContainer';
import Fold from '../components/callBacks/Fold';
import SolidInput from '../components/SolidInput';
//styles
import styles from '../assets/styles/AddSlipInfoStyle';


export default class MyInfo extends Component {

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
    //this.onChangeMedicationDetails("imageData",this.props.route.params.response)
  }

 componentDidUpdate(){
   //this.requiredFieldsFullfilled()
  }


  render() {
    
    return (

      <View style={styles.singlereconcile}>
            {/** Header Section */}
            
          <HeaderSection Title={"My Info"}/>
          <ScrollView style={styles.bodycontainer}
                      contentContainerStyle={    {
                        justifyContent:"flex-start",
                      alignItems:"center"}} >
              {/*******************************
                  * MEDICATION Information
              */}
             <Fold labelTitle = {"PERSONAL INFORMATION"}>
                    <SolidInput width={"98%"}/>

                <View style={styles.hallfInputContainer}>
                    <SolidInput width={"49%"} inputLabel={"Phone"}
                                 iconName = "arrowRightBlack"
                                 onPress = {this.increamentRefillsLeft} 
                                 editAble={false}
                    />
                    <SolidInput width={"49%"}/>
                </View>
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