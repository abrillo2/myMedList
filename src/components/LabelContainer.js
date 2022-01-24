//imports
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../hooks/Icon.js';
//colors
import colors from '../../assets/static_resources/colors.js';
//import heaader style
import styles from '../../assets/styles/LabelContainerStyle.js'

//Header section
export default class LabelContainer extends React.Component{
    //  this.setState(...)
    
    render() { 
    console.log(this.props.icon)
    return(
        <TouchableOpacity underlayColor={colors.underlayColor} style={styles.labelContainer}
                          onPress={this.props.onPress}
                          onLayout={this.props.onLayout}
            >
            <View  style={styles.labelItemContainer}>
                   {Icon(this.props.icon,styles.iconStyle)}
                 <Text  style={styles.labelText}>{this.props.Title}</Text>
            </View>
        </TouchableOpacity>   
    )
  }s
}
/**End of header section */