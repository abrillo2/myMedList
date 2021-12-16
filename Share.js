import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//components import
import HeaderSection from './components/HeaderSection';
import ScrollabelItemContainer from './components/ScrollabelItemContainer';

export default class Share extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"]
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
    <View data-layer="441d027e-49bd-4684-8f8e-d13032fb45e9" style={styles.share}>

       
        <HeaderSection/>
        <View data-layer="240ddb17-bf4c-4d82-9cfe-524ac4967f8f" style={styles.shareNavContainer}>
            <View data-layer="099a9501-e595-487d-b939-97347b779862" style={styles.shareNavToggelContainer}>
                <View data-layer="31cfda62-f09b-4361-b53a-d6f8a71b35da" style={styles.toggelRightContainer}>
                    
                    <View data-layer="ddcb0c3b-9aca-41e1-b4f6-dccca09473b7" style={styles.toggelRightContainerInnerLight}>
                    <Text data-layer="afa060e9-8e90-4637-add4-2fcee011c452" style={styles.toggelRightLabel}>ACTIVE</Text>
                    </View>
                    
                </View>
                <View data-layer="31cfda62-f09b-4361-b53a-d6f8a71b35da" style={styles.toggelRightContainer}>
                    
                    <View data-layer="ddcb0c3b-9aca-41e1-b4f6-dccca09473b7" style={styles.toggelleftinnerlight}>
                    <Text data-layer="afa060e9-8e90-4637-add4-2fcee011c452" style={styles.toggelRightLabel}>DISCONTINUED</Text>
                    </View>
                    
                </View>
            </View>
            <View data-layer="6014d1af-608b-4de5-9dbd-9f95584711b3" style={styles.shareNavSocialMediaContainer}>
                <ReactImage data-layer="ddbd8de8-3fd9-49fd-85f0-baa0465812b9" source={require('./assets/whatsupIcon.png')} style={styles.iconContainer} />
                <ReactImage data-layer="50beda80-d63e-44b4-a2ed-d990326f4375" source={require('./assets/gmailIcon.png')} style={styles.iconContainer} />
                <ReactImage data-layer="e1ad3d55-8ac3-4970-bb54-f05a01d735db" source={require('./assets/smsIcon.png')} style={styles.iconContainer} />
            </View>
        
        </View>

        <ScrollabelItemContainer listButton={false}/>
        
    </View>
    );
  }
}

Share.propTypes = {

}

Share.defaultProps = {

}

function hrp(value){
  return value*100 / 736;
}

function wrp(value){
  return value*100 / 414;
}


const styles = StyleSheet.create({
  "share": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop":hp(hrp(0)),
    "marginRight":wp(wrp(0)),
    "marginBottom":hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop":hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": wp(wrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width":wp("100%"),
    "height":hp("100%"),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "shareNavContainer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop":hp(hrp(10)),
    "marginRight":wp(wrp(0)),
    "marginBottom":hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop":hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": wp(wrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width":wp("100%"),
    //"height":hp(hrp(48,
    //"left": wp(wrp(0)),
    //"top": hp(hrp(74)),
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "shareNavSocialMediaContainer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop":hp(hrp(0)),
    "marginRight":wp(wrp(0)),
    "marginBottom":hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop":hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": wp(wrp(0)),
    "paddingLeft": wp(wrp(0)),
    "flexDirection": "row",
    "alignItems": "center"
  },
  "iconContainer": {
    "opacity": 1,
    "position": "relative",
    "marginTop":hp(hrp(0)),
    "marginRight":wp(wrp(10)),
    "marginBottom":hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "borderTopLeftRadius":wp(wrp(0)),
    "borderTopRightRadius":wp(wrp(0)),
    "borderBottomLeftRadius":wp(wrp(0)),
    "borderBottomRightRadius":wp(wrp(0)),
    "width":wp(wrp(30)),
    "height":hp(hrp(30)),
    //"left": wp(wrp(0)),
    //"top": hp(hrp(0))
  },
  "shareNavToggelContainer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop":hp(hrp(0)),
    "marginRight":wp(wrp(0)),
    "marginBottom":hp(hrp(0)),
    "marginLeft": wp(wrp(10)),
    "paddingTop":hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": wp(wrp(0)),
    "paddingLeft": wp(wrp(0)),
    //"width":wp(wrp(269)),
    //"height":hp(hrp(48,
    //"left": wp(wrp(0)),
    //"top": hp(hrp(0)),
    "flexDirection": "row"
  },
  "toggelRightContainer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop":hp(hrp(0)),
    "marginRight":wp(wrp(0)),
    "marginBottom":hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop":hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": wp(wrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width":wp(wrp(131)),
    "height":hp(hrp(48)),
    //"left": wp(wrp(138)),
    //"top": hp(hrp(0))
  },
  "toggelRightContainerInnerLight": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop":hp(hrp(0)),
    "marginRight":wp(wrp(0)),
    "marginBottom":hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop":hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": wp(wrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": wp(wrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderBottomWidth": wp(wrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderTopLeftRadius":wp(wrp(0)),
    "borderTopRightRadius":wp(wrp(4)),
    "borderBottomLeftRadius":wp(wrp(0)),
    "borderBottomRightRadius":wp(wrp(4)),
    "justifyContent": "center",
    "width":wp(wrp(131)),
    "height":hp(hrp(48)),
    //"left": wp(wrp(0)),
    //"top": hp(hrp(0))
  },
  "toggelRightLabel": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(56, 156, 196, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop":hp(hrp(0)),
    "marginRight":wp(wrp(0)),
    "marginBottom":hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop":hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": wp(wrp(0)),
    "paddingLeft": wp(wrp(0)),
    //"left": wp(wrp(9)),
    //"top": hp(hrp(12.5))
  },
  "toggelleftinnerlight": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(151, 151, 151, 0.5019607843137255)",
    "marginTop":hp(hrp(0)),
    "marginRight":wp(wrp(0)),
    "marginBottom":hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop":hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": wp(wrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": wp(wrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderBottomWidth": wp(wrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderTopLeftRadius":wp(wrp(0)),
    "borderTopRightRadius":wp(wrp(0)),
    "borderBottomLeftRadius":wp(wrp(0)),
    "borderBottomRightRadius":wp(wrp(0)),
    "width":wp(wrp(137)),
    "height":hp(hrp(47)),
    "justifyContent": "center",
  },
});