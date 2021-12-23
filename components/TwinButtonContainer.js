//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Text,TouchableHighlight,LayoutAnimation, Platform, UIManager} from 'react-native';
import {Image as ReactImage} from 'react-native';

//import heaader style
import styles from '../assets/styles/TwinButtonStyle';

//Header section
export default class TwinButtonContainer extends React.Component{
    //  this.setState(...)
    constructor(props) {
      super(props);
      this.state = {
        pressed : false
      };

      //for layout animation
      if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true); }
  }


    //handel button pres
    onButtonPress(pressed) {

         this.props.onPress()
    }

    render() { 
    return(<TouchableHighlight underlayColor={"#61DBE6"} onPressIn={() => this.onButtonPress(true)} 
          style={styles.buttonLayer}> 
                    <Text  style={styles.buttonLabel}>{this.props.label}
                    </Text>
          </TouchableHighlight>
    )
  }
}
/**End of header section */

