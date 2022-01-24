import React, {Component} from 'react';
import {Text, View,BackHandler,ImageBackground} from 'react-native';
//component import
import HomeButton from '../components/HomeButton';
import Button from '../components/Button';
import StatusBarContainer from '../components/StatusBarContainer';
//Style import
import styles from '../../assets/styles/HomeStyle'
import appLabels,{appDescription} from '../../assets/static_resources/strings';
import SplashScreen from 'react-native-splash-screen'
export default class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

  componentDidMount(){
    SplashScreen.hide();
  }
  
  render() {
    
    return (

      <View  style={styles.Home}>
          <StatusBarContainer hidden={false}/>
          <ImageBackground resizeMode="cover"  imageStyle={{opacity:0.6}}  source={require('../../assets/img/bgIcon.android.png')} style={styles.homeBgStyle}>
                <Text style={styles.homeTitleTextStyle}  >{appDescription.homeDesccription}</Text>
                <HomeButton iconName="add" buttonLabel={appLabels.addSlipButton} navigation={this.props.navigation}/>
                <HomeButton iconName="update" buttonLabel={appLabels.reconcileButton} navigation={this.props.navigation}/>
                <HomeButton iconName="share" buttonLabel={appLabels.share} navigation={this.props.navigation}/>

                
                    <View style={styles.twinButtonContainer}>
                      <Button w={120} h={2} onPress={()=>{this.props.navigation.navigate("MyInfo")}} buttonLabel={appLabels.myInfoButton}/>
                      <Button w={120} h={2} onPress={()=>{BackHandler.exitApp()}} buttonLabel={appLabels.exit}/>
                    </View>


          </ImageBackground>

       </View>

    );
  }
}