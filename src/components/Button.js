//imports
import React from 'react';
import {Text, View,LayoutAnimation, Platform, UIManager, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import heaader style
import styles from '../../assets/styles/ButtonStyle'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//helper functions
function hrp(value){
    return value*100 / 736;
  }
  
function wrp(value){
    return value*100 / 414;
}
//Header section
export default class Button extends React.Component{
    //  this.setState(...)
    constructor(props) {
        super(props);
        this.state = {
          buttonLabel : "Label",
          buttonIcon  : "../../assets/icons/share_white.png",
          pressed : false
        };

        //for layout animation
        if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true); }
    }

    buttonAnimationFinished(){           
        //handel route navigation
        setTimeout(()=>{this.props.onPress()},200)

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

    //set button size
    setButtonSize=(size,xy)=>{
        if(xy=="x"){
            console.log(xy)
            switch (size) {
                case 1:
                    return Number(400)
                    break;
                case 2:
                    return Number(200)
                    break;
                case 3:
                    return Number(100)
                    break;
                default:
                    let val = size ? size : 200
                    return Number(val)
                    break;
            }
        }else{
            switch (size) {
                case 1:
                    return Number(30)
                    break;
                case 2:
                    return Number(40)
                    break;
                case 3:
                    return Number(50)
                    break;
                default:
                    let val = size ? size : 50
                    return Number(val)
                    break;
            }
        }
    }    




render() { 
    return(
            <View  style={this.state.pressed ? {"top":4}:{"top":0}}>
                <TouchableHighlight disabled={this.props.disabled}
                                    underlayColor={"#61DBE6"} 
                
                onPressIn={() => this.onButtonPress(true)} 
                onPressOut={() => this.onButtonPress(false)} 
                 style={[styles.buttonContainer,
                        {width: wp(wrp(this.setButtonSize(this.props.w,"x")))},
                        {height:hp(hrp(this.setButtonSize(this.props.h,"y")))},
                        this.props.disabled?{ opacity:0.5}:{ opacity:1}
                        ]}>
                    <View style={styles.buttonTextIconContainer}>                            
                            {this.props.iconName ?                        
                            <Icon
                            name={this.props.iconName}
                            style={styles.iconStyle}
                            size={24}/>
                            :null }    
                            <Text  style={styles.homeButtonLabel}>{this.props.buttonLabel}</Text>
                    </View>
                </TouchableHighlight>
            </View>)
    }
}
/**End of header section */