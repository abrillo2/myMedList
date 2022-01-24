//imports
import React, {Component} from 'react';
import {Text, View,TouchableOpacity,LayoutAnimation, Platform, UIManager, TouchableWithoutFeedbackBase, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import { color } from 'react-native-reanimated';
//colors/
import colors from '../../assets/static_resources/colors.js';
//import heaader style
import styles from '../../assets/styles/HomeButtonStyle.js'

//Header section
export default class HomeButton extends React.Component{
    //  this.setState(...)
    constructor(props) {
        super(props);
        this.state = {
          buttonLabel : null,
          buttonIcon  : "../../assets/icons/share_white.png",
          pressed : false
        };

        //for layout animation
        if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true); }
    }

    buttonAnimationFinished(){           
            //handel route navigation
            setTimeout(()=>{
                let navigation = this.props.navigation;
                const screenName = this.props.buttonLabel+"";
       
                const properName = screenName.charAt(0).toUpperCase() + screenName.slice(1).toLowerCase();
                navigation.navigate((properName))}
                ,
                200
            )

    }


    //handel button press
    onButtonPress(pressed) {
        LayoutAnimation.configureNext(
         LayoutAnimation.create(
           50,
           LayoutAnimation.Types.linear,
           LayoutAnimation.Properties.scaleY
         ),(()=>{pressed?"this.onButtonPress(false)":this.buttonAnimationFinished()})
       ); 
        this.setState({pressed: pressed});
         
     }

    render() { 


        var icon = "";
    
        if(this.props.iconName == "share"){
           icon = require("../../assets/icons/share_white.png");
        }else if(this.props.iconName == "add"){
            icon = require("../../assets/icons/add_white.png");
        }else{
            icon = require("../../assets/icons/autorenew_white.png");
        }

    return(
        <View  style={styles.homeButton}>
            <View  style={styles.homeButtonContainer,this.state.pressed ? {"top":4}:{"top":0}}>
                <View  style={styles.homeButtonElevation}>
                    <View  style={styles.homeButtonElevationShadow}>
                        <View  style={styles.homeButtonElevationShadowRec1}></View>
                        <View  style={styles.homeButtonElevationShadowRec1}></View>
                        <View  style={styles.homeButtonElevationShadowRec1}></View>
                    </View>
                </View>
                <TouchableHighlight underlayColor={colors.underlayColor} 
                    
                    onPressIn={() => this.onButtonPress(true)}
                    onPressOut={() => this.onButtonPress(false)}
                      style={styles.homeButtonColor}>
                    
                    <View style={styles.buttonTextIconContainer}>
                    
                        <ReactImage  source={icon} style={styles.iconStyle} />     
                        <Text  style={styles.homeButtonLabel}>{this.props.buttonLabel}</Text>

                    </View>
                    
                </TouchableHighlight>


            </View>
        </View> 
    )
  }
}
/**End of header section */