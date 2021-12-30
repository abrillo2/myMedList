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
      sexChoice: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female'}]
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
                  value={this.state.value}>
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
                                 inputLabel={"Street #"}
                                 onChangeText={this.onChangeData}
                                 childKey={"street"}
                                 rootKey = {"address"}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"City"}
                                 onChangeText={this.onChangeData}
                                 childKey={"city"}
                                 rootKey = {"address"}/>
                </View>

                                {/* Street# and City inputs*/}
                                <View style={styles.hallfInputContainer}>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Street #"}
                                 onChangeText={this.onChangeData}
                                 childKey={"street"}
                                 rootKey = {"address"}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"City"}
                                 onChangeText={this.onChangeData}
                                 childKey={"city"}
                                 rootKey = {"address"}/>
                </View>
              </Fold>
          </ScrollView>

        </MyInfoCall>
      );
  }
}