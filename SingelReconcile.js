import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//components import
import HeaderSection from './components/HeaderSection';
import SlipPicEditContainer from './components/SlipPicEditContainer';
import FullInputContainer from './components/FullInputContainer';
import HalfInputContainer from './components/HalfInputContainer';
import TwinButtonContainer from './components/TwinButtonContainer';
import LabelContainerStyle from './assets/styles/LabelContainerStyle';
import LabelContainer from './components/LabelContainer';

export default class SingelReconcile extends Component {

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

    <View data-layer="cd69ac0c-29fb-45f9-bed1-67181bfa3f2b" style={styles.singlereconcile}>
          {/** Header Section */}
          
        <HeaderSection />
        <ScrollView data-layer="607ce331-9bc4-44b5-8bfa-8404da1b4a64" style={styles.bodycontainer}
            contentContainerStyle={    {justifyContent:"flex-start",
            alignItems:"center"}}
        >
           <SlipPicEditContainer/>
           <LabelContainer/>
           <FullInputContainer/> 
           <HalfInputContainer/>
           <FullInputContainer/>
           <LabelContainer/>
           <FullInputContainer/>
           <FullInputContainer/>
           <LabelContainer/>
           <FullInputContainer/>
           <FullInputContainer/>
           <FullInputContainer/>
           <TwinButtonContainer/>
           
        </ScrollView>
    </View>
    );
  }
}

SingelReconcile.propTypes = {

}

SingelReconcile.defaultProps = {

}

function hrp(value){
  return value*100 / 736;
}

function wrp(value){
  return value*100 / 414;
}


const styles = StyleSheet.create({
  "singlereconcile": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    //"width": wp("100%"),
    //"height": hp("100%"),
    //"left": wp(wrp(0)),
    //"top": hp(hrp(0)),
    "flex":1
  },
  "bodycontainer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(81)),
    //"marginRight": wp(wrp(0)),
    //"marginBottom": hp(hrp(0)),
    //"marginLeft": wp(wrp(20)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp("100%"),
    "height": hp("100%"),
    //"left": wp(wrp(20)),
    //"top": hp(hrp(81)),
  },

});