//imports
import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {Image as ReactImage} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
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
        <TouchableOpacity underlayColor={Colors.underlayColor} style={styles.labelContainer}
                          onPress={this.props.onPress}
                          onLayout={this.props.onLayout}
            >
            <View  style={styles.labelItemContainer}>
                    <ReactImage  source={this.props.icon} style={styles.iconStyle} />
                 <Text  style={styles.labelText}>{this.props.Title}</Text>
            </View>
        </TouchableOpacity>   
    )
  }s
}
/**End of header section */