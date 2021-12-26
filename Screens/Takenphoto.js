import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//local components import
import HeaderSection from '../components/HeaderSection';
import TwinButtonContainer from '../components/TwinButtonContainer'


export default class Takenphoto extends Component {

  constructor(props) {
      super(props);
      this.state = {
          imageData: null
      };
  }

  componentDidMount(){

    console.log(this.props.route.params.response.assets[0].uri)
    this.setState({imageData:this.props.route.params.response.assets[0]})
    
  }

  componentWillUnmount(){
    this.setState({imageData:null})
  }

  //retake photo
  retake = ()=>{

    console.log("take photo")
    launchCamera({mediaType:'photo',cameraType:'back'}, (response)=>{
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({imageData:response.assets[0]})
      }
    
    });

  }

  //cancel
  cancel = ()=>{
    this.props.navigation.navigate("Home")
  }

  //save slip image
  save = () =>{
    console.log("save")
    this.props.navigation.navigate("AddSlipInfo")
  }


  render() {
    
    return (
    <ScrollView  style={styles.takenphoto}>
            <HeaderSection Title="Slip Photo"/>
            <View style ={styles.takenPhotoBody}>
                    {
                      this.state.imageData != null ? <ReactImage  source={{uri:this.state.imageData.uri}} style={styles.slipimagecontainer} /> :
                      <ReactImage  source={require('../assets/xImage.png')} style={styles.slipimagecontainer} />
                    }
                    
                    <View style={styles.twinButtonContainer}>
                      <TwinButtonContainer label="Cancel" onPress={this.cancel}/>
                      <TwinButtonContainer label="Save"  onPress={this.save}/>
                      <TwinButtonContainer label="Retake"  onPress={this.retake}/>
                    </View>
            </View>
    </ScrollView>
    );
  }
}
function hrp(value){
  return value*100 / 736;
}

function wrp(value){
  return value*100 / 414;
}

const styles = StyleSheet.create({
  "takenphoto": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "width":"100%",
    "height":"100%"
  },
  "slipimagecontainer": {
    "position": "relative",
    "width": wp("90%"),
    "height": hp(hrp(400)),
  },
  "takenPhotoBody":{
    "position":"relative",
    "marginTop":hp(hrp(10)),
    "flex":1,
    "justifyContent":"center",
    "alignItems":"center"
  },
  "twinButtonContainer":{
     "marginTop":hp(hrp(10)),
     "flexDirection":"row",
     "width" : wp("90%"),
     "justifyContent":"space-between",

  }

});