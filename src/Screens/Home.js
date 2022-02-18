import React, {Component} from 'react';
import {Dimensions,View,BackHandler,ImageBackground,Text, ScrollView} from 'react-native';
//component import
import Logo from '../utilis/Logo';
import HomeButton from '../components/HomeButton';
import Button from '../components/Button';
import StatusBarContainer from '../components/StatusBarContainer';
import colors from '../../assets/static_resources/colors';
//Style import
import styles from '../../assets/styles/HomeStyle'
import appLabels, { appDescription } from '../../assets/static_resources/strings';
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';
export default class Home extends Component {

  constructor() {
    super();

    /**
    * Returns true if the screen is in portrait mode
    */
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape'
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });

  }
  

  componentDidMount(){
    SplashScreen.hide();
  }
  
  render() {
    
    return (

      <View  style={styles.Home}>
          <StatusBarContainer hidden={false}/>
          <ImageBackground resizeMode="cover"  imageStyle={{opacity:0.5}}  source={require('../../assets/img/bgIcon.android.png')} 
          style={[styles.homeBgStyle,this.state.orientation === 'portrait'?{paddingBottom:"15%",paddingTop:'30%'}:{paddingTop:'1%',paddingBottom:'1%'}]}>
               <Logo/>
               <View>
                 <View style={[this.state.orientation === 'portrait'?{marginBottom:"5%"}:{marginBottom:'2%'}]}>
                 <HomeButton iconName="add" buttonLabel={appLabels.addSlipButton} navigation={()=>this.props.navigation.navigate(appLabels.addPhotoTitle)}/>
               
                 </View>

                 <View style={[this.state.orientation === 'portrait'?{marginBottom:"5%"}:{marginBottom:'2%'}]}>
                           <HomeButton iconName="update" buttonLabel={appLabels.reconcileButton} navigation={()=>this.props.navigation.navigate(appLabels.reconcileTitle)}/>
               
                 </View>
                 <View>
                 <HomeButton iconName="share" buttonLabel={appLabels.share} navigation={()=>this.props.navigation.navigate(appLabels.shareTitle)}/>
    
                 </View>
            </View>

                <Text style={{color:colors.inputTextColor}}>
                   {appDescription.openDrawerDesctiption}
                </Text>
                
                    {this.state.orientation === 'portrait'?<View style={styles.twinButtonContainer}>
                      <Button w={120} h={2} onPress={()=>{this.props.navigation.navigate(appLabels.myInfoTitle)}} buttonLabel={appLabels.myInfoButton}/>
                      <Button w={120} h={2} onPress={()=>{BackHandler.exitApp()}} buttonLabel={appLabels.exit}/>
                    </View>:null}



          </ImageBackground>

       </View>

    );
  }
}