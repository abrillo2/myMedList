import React, {Component} from 'react';
import {Text, View,BackHandler,ImageBackground} from 'react-native';
//component import
import HomeButton from '../components/HomeButton';
import TwinButtonContainer from '../components/TwinButtonContainer';
//Style import
import styles from '../../assets/styles/HomeStyle'
import appLabels,{appDescription} from '../../assets/static_resources/strings';

export default class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }
  
  render() {
    
    return (

      <View  style={styles.Home}>


          <ImageBackground resizeMode="cover"  imageStyle={{opacity:0.6}}  source={require('../../assets/img/bgIcon.android.png')} style={styles.homeBgStyle}>
                <Text style={styles.homeTitleTextStyle}  >{appDescription.homeDesccription}</Text>
                <HomeButton iconName="add" buttonLabel={appLabels.addSlipButton} navigation={this.props.navigation}/>
                <HomeButton iconName="autorenew" buttonLabel={appLabels.reconcileButton} navigation={this.props.navigation}/>
                <HomeButton iconName="share" buttonLabel={appLabels.share} navigation={this.props.navigation}/>

                
                    <View style={styles.twinButtonContainer}>
                      <TwinButtonContainer onPress={()=>{this.props.navigation.navigate("MyInfo")}}label={appLabels.myInfoButton}/>
                        <TwinButtonContainer onPress={()=>{BackHandler.exitApp()}} label={appLabels.exit}/>
                    </View>


          </ImageBackground>

       </View>

    );
  }
}