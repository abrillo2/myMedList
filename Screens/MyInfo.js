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
                                 onChangeText={this.onChangeData}
                                 childKey={"birthDate"}
                                 rootKey = {"personalInformation"}
                                 iconName={"dateRange"}
                                 editAble={false}
                                 onPress={this.dateRefilledPicker}/>
                    <SolidInput  width={"49%"} 
                                 inputLabel={"Birthdate"}
                                 onChangeText={this.onChangeData}
                                 childKey={"birthDate"}
                                 rootKey = {"personalInformation"}/>
                </View>
             </Fold>
          </ScrollView>

        </MyInfoCall>
      );
  }
}