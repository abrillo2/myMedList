import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//components import
import SlipPicEditContainer from '../components/SlipPicEditContainer';
import FullInputContainer from '../components/FullInputContainer';
import HalfInputContainer from '../components/HalfInputContainer';
import TwinButtonContainer from '../components/TwinButtonContainer';
import LabelContainer from '../components/LabelContainer';

export default class SingelReconcile extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }
  render() {
    
    return (

    <View data-layer="cd69ac0c-29fb-45f9-bed1-67181bfa3f2b" style={styles.singlereconcile}>

        <ScrollView data-layer="607ce331-9bc4-44b5-8bfa-8404da1b4a64" style={styles.bodycontainer}
            contentContainerStyle={    {justifyContent:"flex-start",
            alignItems:"center"}}>
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
    "flex":1
  },
  "bodycontainer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(81)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp("100%"),
    "height": hp("100%")
  },

});