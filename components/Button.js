//imports
import React, {Component} from 'react';
import {Text, View,TouchableOpacity,LayoutAnimation, Platform, UIManager, TouchableWithoutFeedbackBase, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';

//import heaader style
import styles from '../assets/styles/ButtonStyle'

//Header section
export default class Button extends React.Component{
    //  this.setState(...)
    constructor(props) {
        super(props);
        this.state = {
          buttonLabel : "Label",
          buttonIcon  : "../assets/icons/share_white.png",
          pressed : false
        };

        //for layout animation
        if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true); }
    }

    //handel button pres
    onButtonPress() {

        //animate button press
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({pressed: true});
        this.props.onPress()
    }

    render() { 


        var icon = "";
        if(this.props.iconName == "share"){
            
           icon = require("../assets/icons/share_white.png");
           console.log(icon)
        }else if(this.props.iconName == "add"){
            icon = require("../assets/icons/add_white.png");
        }else if(this.props.iconName == "autorenew"){
            icon = require("../assets/icons/autorenew_white.png");
        }else{
            icon = null;
        }

    return(
            <View  style={this.state.pressed ? {"top":4}:{"top":0}}>
                <TouchableHighlight underlayColor={"#61DBE6"} onPressIn={() => this.onButtonPress(true)}  style={styles.homeButtonColor}>
                    <View style={styles.buttonTextIconContainer}>                            
                        <ReactImage  source={icon} style={styles.iconStyle} />     
                            <Text  style={styles.homeButtonLabel}>{this.props.buttonLabel}</Text>
                    </View>
                </TouchableHighlight>
            </View>)
    }
}
/**End of header section */