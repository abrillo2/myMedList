import React, {Component} from 'react';
import {Dimensions,View,BackHandler,ImageBackground,Text} from 'react-native';
//component import
import Logo from '../utilis/Logo';
import StatusBarContainer from '../components/StatusBarContainer';
import colors from '../../assets/static_resources/colors';
//Style import
import styles from '../../assets/styles/HomeStyle'
import appLabels, { appDescription } from '../../assets/static_resources/strings';
import SplashScreen from 'react-native-splash-screen'
import Button from '../components/Button';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
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
          style={[styles.homeBgStyle,this.state.orientation === 'portrait'?{paddingBottom:"15%",paddingTop:'15%'}:{paddingTop:1,paddingBottom:1}]}>
               
               <Logo 
               fontSize={this.state.orientation === 'portrait'?heightPercentageToDP("4%"):widthPercentageToDP("4%")}
               home={true}/>
               <View>
                 <View style={[this.state.orientation === 'portrait'?{marginBottom:"5%"}:{marginBottom:'1%'}]}>
                 <Button
                 home={true}
                 h={this.state.orientation === 'portrait'?heightPercentageToDP("7%"):widthPercentageToDP("10%")}
                 w={ widthPercentageToDP("85%")}
                 iconName="add" buttonLabel={appLabels.addSlipButton} onPress={()=>this.props.navigation.navigate(appLabels.addPhotoTitle)}/>
               
                 </View>

                 <View style={[this.state.orientation === 'portrait'?{marginBottom:"5%"}:{marginBottom:'1%'}]}>
                           <Button 
                            home={true}
                            h={this.state.orientation === 'portrait'?heightPercentageToDP("7%"):widthPercentageToDP("10%")}
                            w={ widthPercentageToDP("85%")}
                           iconName="update" buttonLabel={appLabels.reconcileButton} onPress={()=>this.props.navigation.navigate(appLabels.reconcileTitle)}/>
               
                 </View>
                 <View>
                 <Button 
                   home={true}
                   h={this.state.orientation === 'portrait'?heightPercentageToDP("7%"):widthPercentageToDP("10%")}
                   w={ widthPercentageToDP("85%")}
                  iconName="share" buttonLabel={appLabels.share} onPress={()=>this.props.navigation.navigate(appLabels.shareTitle)}/>
    
                 </View>
            </View>

                <Text style={{color:colors.inputTextColor,fontSize:this.state.orientation === 'portrait'?heightPercentageToDP("3%"):widthPercentageToDP("3%")}}>
                   {appDescription.openDrawerDesctiption}
                </Text>
                
                  <View style={styles.twinButtonContainer}>
                      <Button 
                              
                              h={this.state.orientation === 'portrait'?heightPercentageToDP("5%"):widthPercentageToDP("8%")}
                              w={ widthPercentageToDP("35%")}
                              onPress={()=>{this.props.navigation.navigate(appLabels.myInfoTitle)}} buttonLabel={appLabels.myInfoButton}/>
                      <Button 
                              h={this.state.orientation === 'portrait'?heightPercentageToDP("5%"):widthPercentageToDP("8%")}
                              w={ widthPercentageToDP("35%")}
                              onPress={()=>{BackHandler.exitApp()}} buttonLabel={appLabels.exit}/>
                  </View>



          </ImageBackground>
       </View>

    );
  }
}