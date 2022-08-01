import React, {Component, useEffect} from 'react';
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
import { UseOrientation } from '../hooks/UserORientation';
export default function Home(props){

  
  const orientation = UseOrientation();

  useEffect(() => {
    
    SplashScreen.hide();
    return () => {
      
      };
    }, []);
    return (

      <View  style={styles.Home}>

          <StatusBarContainer hidden={false}/>
          <ImageBackground resizeMode="cover"  imageStyle={{opacity:0.5}}  source={require('../../assets/img/bgIcon.android.png')} 
          style={[styles.homeBgStyle,orientation === 'PORTRAIT'?{paddingBottom:"15%",paddingTop:'15%'}:{paddingTop:1,paddingBottom:1}]}>
               
               <Logo 
               fontSize={orientation === 'PORTRAIT'?heightPercentageToDP("4%"):widthPercentageToDP("4%")}
               home={true}/>
               <View>
                 <View style={[orientation === 'PORTRAIT'?{marginBottom:"5%"}:{marginBottom:'1%'}]}>
                 <Button
                 home={true}
                 h={orientation === 'PORTRAIT'?heightPercentageToDP("7%"):widthPercentageToDP("10%")}
                 w={ widthPercentageToDP("85%")}
                 iconName="add" buttonLabel={appLabels.addSlipButton} onPress={()=>props.navigation.navigate(appLabels.addPhotoTitle)}/>
               
                 </View>

                 <View style={[orientation === 'PORTRAIT'?{marginBottom:"5%"}:{marginBottom:'1%'}]}>
                           <Button 
                            home={true}
                            h={orientation === 'PORTRAIT'?heightPercentageToDP("7%"):widthPercentageToDP("10%")}
                            w={ widthPercentageToDP("85%")}
                           iconName="update" buttonLabel={appLabels.reconcileButton} onPress={()=>props.navigation.navigate(appLabels.reconcileTitle)}/>
               
                 </View>
                 <View>
                 <Button 
                   home={true}
                   h={orientation === 'PORTRAIT'?heightPercentageToDP("7%"):widthPercentageToDP("10%")}
                   w={ widthPercentageToDP("85%")}
                  iconName="share" buttonLabel={appLabels.share} onPress={()=>props.navigation.navigate(appLabels.shareTitle)}/>
    

                 </View>
            </View>

                <Text style={{color:colors.inputTextColor,fontSize:orientation === 'PORTRAIT'?heightPercentageToDP("3%"):widthPercentageToDP("3%")}}>
                   {appDescription.openDrawerDesctiption}
                </Text>
                
                  <View style={styles.twinButtonContainer}>
                      <Button 
                              
                              h={orientation === 'PORTRAIT'?heightPercentageToDP("5%"):widthPercentageToDP("8%")}
                              w={ widthPercentageToDP("35%")}
                              onPress={()=>{props.navigation.navigate(appLabels.myInfoTitle)}} buttonLabel={appLabels.myInfoButton}/>
                      <Button 
                              h={orientation === 'PORTRAIT'?heightPercentageToDP("5%"):widthPercentageToDP("8%")}
                              w={ widthPercentageToDP("35%")}
                              onPress={()=>{BackHandler.exitApp()}} buttonLabel={appLabels.exit}/>
                  </View>



          </ImageBackground>
       </View>

    );
    
}