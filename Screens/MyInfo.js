import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';


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
      sexChoice: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female'}],
      stateData: require("../assets/data/states.json")
    }
  }
  onChangeData=(rootKey,childKey, value)=>{
    this.setState({
      rootKey,
      childKey,
      value
    })
  }

  render() {
    return (

      <MyInfoCall 
                  rootKey={this.state.rootKey}
                  childKey={this.state.childKey}
                  value={this.state.value}
                  navigation={this.props.navigation}>
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
                                 rootKey = {"personalInformation"}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Last Name"}
                                 onChangeText={this.onChangeData}
                                 childKey={"lastName"}
                                 rootKey = {"personalInformation"}/>
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
                                 />
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Sex"}
                                 onChangeText={this.onChangeData}
                                 childKey={"sex"}
                                 inputType={"dropDown"}
                                 data={this.state.sexChoice}
                                 rootKey = {"personalInformation"}/>
                </View>
             </Fold>
             <Fold labelTitle = {"Address"}>
                {/* Street# and City inputs*/}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Street"}
                                 onChangeText={this.onChangeData}
                                 childKey={"street"}
                                 rootKey = {"address"}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"City"}
                                 onChangeText={this.onChangeData}
                                 childKey={"city"}
                                 rootKey = {"address"}/>
                </View>

                                {/* state and zipcode inputs*/}
                                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"State"}
                                 onChangeText={this.onChangeData}
                                 childKey={"state"}
                                 rootKey = {"address"}
                                 inputType={"dropDown"}
                                 data={this.state.stateData}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Zip code"}
                                 onChangeText={this.onChangeData}
                                 childKey={"zipCode"}
                                 rootKey = {"address"}/>
                </View>
                <SolidInput  width={"100%"} 
                                 inputLabel={"Phone"}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"address"}/>
              </Fold>
              
              <Fold labelTitle = {"PHYSICIAN INFORMATION"}>
                {/* First name and last name input*/}
                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"First Name"}
                                 onChangeText={this.onChangeData}
                                 childKey={"firstName"}
                                 rootKey = {"physicianDetails"}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Last Name"}
                                 onChangeText={this.onChangeData}
                                 childKey={"lastName"}
                                 rootKey = {"physicianDetails"}/>
                </View>
                <SolidInput  width={"100%"} 
                                 inputLabel={"Phone"}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"physicianDetails"}/>
             </Fold>

             <Fold labelTitle = {"PREFERED PHARMACY INFORMATION"}>
                {/*PHARMACY NAME AND PHONE*/}
                <SolidInput  width={"100%"} 
                                 inputLabel={"Name"}
                                 onChangeText={this.onChangeData}
                                 childKey={"name"}
                                 rootKey = {"pharmacyDetails"}/>
                <SolidInput  width={"100%"} 
                                 inputLabel={"Phone"}
                                 onChangeText={this.onChangeData}
                                 childKey={"phone"}
                                 rootKey = {"pharmacyDetails"}/>
             </Fold>
          </ScrollView>
        </MyInfoCall>
      );
  }
}