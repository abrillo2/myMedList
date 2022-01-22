import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Share1 extends Component {

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
    <ScrollView data-layer="441d027e-49bd-4684-8f8e-d13032fb45e9" style={styles.share1}>
        <View data-layer="240ddb17-bf4c-4d82-9cfe-524ac4967f8f" style={styles.share1_sharenav}>
            <View data-layer="6014d1af-608b-4de5-9dbd-9f95584711b3" style={styles.share1_sharenav_socialmediacontainer}>
                <ReactImage data-layer="ddbd8de8-3fd9-49fd-85f0-baa0465812b9" source={require('./assets/whatsup.png')} style={styles.share1_sharenav_socialmediacontainer_whatsup} />
                <ReactImage data-layer="50beda80-d63e-44b4-a2ed-d990326f4375" source={require('./assets/gmail.png')} style={styles.share1_sharenav_socialmediacontainer_gmail} />
                <ReactImage data-layer="e1ad3d55-8ac3-4970-bb54-f05a01d735db" source={require('./assets/sms.png')} style={styles.share1_sharenav_socialmediacontainer_sms} />
            </View>
            <View data-layer="099a9501-e595-487d-b939-97347b779862" style={styles.share1_sharenav_togelcontainer}>
                <View data-layer="31cfda62-f09b-4361-b53a-d6f8a71b35da" style={styles.share1_sharenav_togelcontainer_righttogel}>
                    <View data-layer="ddcb0c3b-9aca-41e1-b4f6-dccca09473b7" style={styles.share1_sharenav_togelcontainer_righttogel_toggelrightinnerlight}></View>
                    <Text data-layer="afa060e9-8e90-4637-add4-2fcee011c452" style={styles.share1_sharenav_togelcontainer_righttogel_disconttext}>DISCONTINUED</Text>
                </View>
                <View data-layer="1ccfa91a-54aa-4799-9f17-f8d8cc899f65" style={styles.share1_sharenav_togelcontainer_lefttoggel}>
                    <View data-layer="23d0d111-e2b5-4188-87fe-e90bdc4f5f3a" style={styles.share1_sharenav_togelcontainer_lefttoggel_toggelleftinnerlight}></View>
                    <Text data-layer="e53625de-7ee2-4c95-a0a0-30d94d4f49c4" style={styles.share1_sharenav_togelcontainer_lefttoggel_activetext}>ACTIVE</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Share1.propTypes = {

}

Share1.defaultProps = {

}


const styles = StyleSheet.create({
  "share1": {
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
    "width": 414,
    "height": 736,
    "left": 0,
    "top": 0
  },
  "share1_sharenav": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 48,
    "left": 0,
    "top": 74
  },
  "share1_sharenav_socialmediacontainer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 115,
    "height": 30,
    "left": 299,
    "top": 9
  },
  "share1_sharenav_socialmediacontainer_whatsup": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 30,
    "height": 30,
    "left": 0,
    "top": 0
  },
  "share1_sharenav_socialmediacontainer_gmail": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 30,
    "height": 30,
    "left": 43,
    "top": 0
  },
  "share1_sharenav_socialmediacontainer_sms": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 30,
    "height": 30,
    "left": 85,
    "top": 0
  },
  "share1_sharenav_togelcontainer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 269,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "share1_sharenav_togelcontainer_righttogel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 131,
    "height": 48,
    "left": 138,
    "top": 0
  },
  "share1_sharenav_togelcontainer_righttogel_toggelrightinnerlight": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 4,
    "width": 131,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "share1_sharenav_togelcontainer_righttogel_disconttext": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(56, 156, 196, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 24,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 114,
    "height": 29,
    "left": 9,
    "top": 12.5
  },
  "share1_sharenav_togelcontainer_lefttoggel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 138,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "share1_sharenav_togelcontainer_lefttoggel_toggelleftinnerlight": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(151, 151, 151, 0.5019607843137255)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0.5019607843137255)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 137,
    "height": 47,
    "left": -0.5,
    "top": -0.5
  },
  "share1_sharenav_togelcontainer_lefttoggel_activetext": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(56, 156, 196, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 24,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 51,
    "height": 29,
    "left": 48,
    "top": 12.5
  }
});