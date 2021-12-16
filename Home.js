import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight,TouchableOpacity} from 'react-native';
import {Image as ReactImage,ImageBackground } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//component import
import HomeButton from './components/HomeButton';
import TwinButtonContainer from './components/TwinButtonContainer';


export default class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="81b9fe26-4b36-421e-befd-7a77f3d57a46" style={styles.Home}>


        <ImageBackground resizeMode="cover"  imageStyle={{opacity:0.6}} data-layer="23098b85-d08d-468d-a60e-1efd8bf7e27a" source={require('./assets/bgIcon.android.png')} style={styles.homeBgStyle}>
        <Text style={styles.homeTitleTextStyle} data-layer="4b11649e-af7d-45dd-86e8-c8db8a93c322" >MY MED LIST</Text>
        <HomeButton iconName="add" buttonLabel="ADD SLIP"/>
        <HomeButton iconName="autorenew" buttonLabel="RECONCILE"/>
        <HomeButton iconName="share" buttonLabel="SHARE"/>

        <View style={{"position":"absolute","bottom":10}}>
            <TwinButtonContainer rLabel = "MY INFO" lLabel="EXIT"/>
        </View>
        
        </ImageBackground>
        
    </ScrollView>
    );
  }
}

Home.propTypes = {

}

Home.defaultProps = {

}

function hrp(value){
  return value*100 / 736;
}

function wrp(value){
  return value*100 / 414;
}


const styles = StyleSheet.create({
  "Home": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": wp('100%'),
    "height": hp('100%'),
    "left": 0,
    "top": 0,
    "flex": 1
  },
  "homeTitleTextStyle": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": wp(wrp(35)),
    "fontWeight": "500",
    "letterSpacing": 1,
    "fontStyle": "normal",
    "fontFamily": "Roboto-Medium",
    "textAlign": "center",
    //"lineHeight": hp(hrp(33)),
    "marginTop": hp(hrp(100)),
    "marginRight": 0,
    "marginBottom": hp(hrp(100)),
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    //"width": wp(wrp(273)),
    //"height": hp(hrp(40)),
    //"left": wp(wrp(71)),
    //"top": hp(hrp(90))
  },
  "homeBgStyle": {
    //"opacity": 0.6000000238418579,
    //"position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp('100%'),
    "height": hp('100%'),
    "flex":1,
    //justifyContent:"center",
    "alignItems":"center"
  },

});