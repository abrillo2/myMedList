//imports
import React, {Component} from 'react';
import {Text, View,TouchableOpacity,LayoutAnimation, Platform, UIManager, TouchableWithoutFeedbackBase, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';

//import heaader style
import styles from '../assets/styles/HomeButtonStyle.js'

//Header section
export default class HomeButton extends React.Component{
    //  this.setState(...)
    constructor(props) {
        super(props);
        this.state = {
          buttonLabel : "Die",
          buttonIcon  : "../assets/icons/share_white.png",
          pressed : false
        };

        //for layout animation
        if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true); }
    }

    //handel button pres
    onButtonPress(pressed) {

        //animate button press
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({pressed: pressed});

        //handel route navigation
        let navigation = this.props.navigation;
        const screenName = this.props.buttonLabel+"";

        const properName = screenName.charAt(0).toUpperCase() + screenName.slice(1).toLowerCase();
        navigation.navigate((properName))
    }

    render() { 


        var icon = "";
    
        if(this.props.iconName == "share"){
           icon = require("../assets/icons/share_white.png");
        }else if(this.props.iconName == "add"){
            icon = require("../assets/icons/add_white.png");
        }else{
            icon = require("../assets/icons/autorenew_white.png");
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
                <TouchableHighlight underlayColor={"#61DBE6"} onPressIn={() => this.onButtonPress(true)}  style={styles.homeButtonColor}>

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