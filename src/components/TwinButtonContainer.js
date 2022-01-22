//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Text,TouchableHighlight,LayoutAnimation, Platform, UIManager} from 'react-native';
import {Image as ReactImage} from 'react-native';
//colors
import colors from '../../assets/static_resources/colors';
//import heaader style
import styles from '../../assets/styles/TwinButtonStyle';

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
    return(<TouchableHighlight disabled={this.props.disabled} underlayColor={colors.underlayColor} onPressIn={() => this.onButtonPress(true)} 
          style={[this.props.disabled ? {opacity:0.5}:{},styles.buttonLayer]}> 
                    <Text  style={styles.buttonLabel}>{this.props.label}
                    </Text>
          </TouchableHighlight>
    )
  }
}
/**End of header section */

