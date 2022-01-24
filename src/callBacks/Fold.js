import React, {Component} from 'react';
import {View, Animated,Easing} from 'react-native';
//components import
import LabelContainer from '../components/LabelContainer';
//styles
import styles from '../../assets/styles/AddSlipInfoStyle'

export default class Fold extends Component {

    constructor(props){
        super(props);
        this.state = {       //Step 3
           title       : this.props.labelTitle,
           expanded    : true,
           animation   :  new Animated.Value(0),
           maxHeight: null,
           minHeight: null,
           maxInterPolate: null,
           toggle:false,
        };
    }

    _setMaxHeight=(event)=>{
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }
    
    _setMinHeight=(event)=>{
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    _initAnimated = () =>{
            //Step 1
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight
        this.state.animation.setValue(initialValue);  //Step 3
    }

    toggle=()=>{
        //Step 1
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
        this.setState({
            expanded : !this.state.expanded,
            toggle: true
              //Step 2
        });
    
        this.state.animation.setValue(initialValue);  //Step 3

        

        const maxHeight = this.state.animation.interpolate({ 
            inputRange: [0, initialValue], 
            outputRange: [0, finalValue]  // <-- any value larger than your content's height
        })

        this.setState({
            maxInterPolate:maxHeight
        })        
        Animated.timing(this.state.animation, {
            toValue: finalValue,
            duration: 500,           // <-- animation duration
            easing: Easing.linear,   // <-- or any easing function
            useNativeDriver: false   // <-- need to set false to prevent yellow box warning
          }).start();
    }

    render(){

        let icon = "expand-less"
        
        if(!(this.state.toggle)){
           this._initAnimated();
        }
        if(!(this.state.expanded)){
            icon = "expand-more"
        }
        return(    
            <View style={
            {backgroundColor: '#fff',
                marginHorizontal: 15,
                paddingBottom:10,
                paddingHorizontal: 15,}
            }>   
                <Animated.View style={{ maxHeight: this.state.animation}}>

                    <LabelContainer
                                onPress={this.toggle}
                                onLayout={this._setMinHeight.bind(this)}
                                Title={this.props.labelTitle}
                                icon={icon}></LabelContainer>
                    <View onLayout={this._setMaxHeight.bind(this)}>
                                {this.props.children}
                    </View>
                    
                </Animated.View>
            </View>
        )

    }

}