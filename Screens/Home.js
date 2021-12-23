import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ImageBackground } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
//component import
import HomeButton from '../components/HomeButton';
import TwinButtonContainer from '../components/TwinButtonContainer';
//Style import
import styles from '../assets/styles/HomeStyle'

export default class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }
  
  render() {
    
    return (

      <View  style={styles.Home}>


          <ImageBackground resizeMode="cover"  imageStyle={{opacity:0.6}}  source={require('../assets/bgIcon.android.png')} style={styles.homeBgStyle}>
                <Text style={styles.homeTitleTextStyle}  >MY MED LIST</Text>
                <HomeButton iconName="add" buttonLabel="ADD SLIP" navigation={this.props.navigation}/>
                <HomeButton iconName="autorenew" buttonLabel="RECONCILE" navigation={this.props.navigation}/>
                <HomeButton iconName="share" buttonLabel="SHARE" navigation={this.props.navigation}/>

                <View style={{"position":"absolute","bottom":10}}>
                    <View style={styles.twinButtonContainer}>
                      < TwinButtonContainer rLabel label="MY INFO"/>
                        <TwinButtonContainer rLabel label="EXIT"/>
                    </View>

                </View>

          </ImageBackground>

       </View>

    );
  }
}