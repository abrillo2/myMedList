//imports
import React from 'react';
import {Text, View,LayoutAnimation, Platform, UIManager, TouchableHighlight} from 'react-native';

//colors/
import colors from '../../assets/static_resources/colors.js';
//import heaader style
import styles from '../../assets/styles/HomeButtonStyle.js'
import Icon from 'react-native-vector-icons/MaterialIcons';
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
                this.props.navigation();
            }    ,
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
                    
                        <Icon
                            name={this.props.iconName}
                            style={styles.iconStyle}
                            size={24}
                        />  
                        <Text  style={styles.homeButtonLabel}>{this.props.buttonLabel}</Text>

                    </View>
                    
                </TouchableHighlight>


            </View>
        </View> 
    )
  }
}
/**End of header section */