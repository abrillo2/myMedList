import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Takenphoto extends Component {

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
    <ScrollView data-layer="483a9197-0fd6-48bb-bf3b-6908dd5d92d5" style={styles.takenphoto}>
        <View data-layer="eb4dd480-9be5-4b1a-a424-b08b3ead9710" style={styles.takenphoto_cancelbutton}>
            <View data-layer="31362e16-7090-4222-9046-12d6235f86b4" style={styles.takenphoto_cancelbutton_cancelbuttonenabled}>
                <View data-layer="293a8efc-d74e-4260-b31d-8676077ef5ef" style={styles.takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles}>
                    <View data-layer="49ed7fc5-b381-40e6-b039-95e42186b4a8" style={styles.takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation}>
                        <View data-layer="065295ab-a6b3-49d9-a55b-57b4eedfd086" style={styles.takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation_shadow9effe868}>
                            <View data-layer="a8d1e81b-11d0-48a8-abf5-081fc0bd717e" style={styles.takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation_shadow9effe868_rectangle677ac036}></View>
                            <View data-layer="ffb14d7c-12af-406e-85f5-119de0d78169" style={styles.takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation_shadow9effe868_rectangle8e76cdac}></View>
                            <View data-layer="45d70f7d-985e-45d4-a242-1f21f1db48e7" style={styles.takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation_shadow9effe868_rectangle601880e5}></View>
                        </View>
                    </View>
                    <View data-layer="a8f98ac6-cdb4-4d41-a63d-e0aab01b5c43" style={styles.takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_xColor}></View>
                    <View data-layer="585195c4-87ec-47f4-af1f-dcbfa76d6ebb" style={styles.takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_xStates405ae32f}>
                        <View data-layer="63a79978-eebe-4fc4-bea9-27f82d3affb7" style={styles.takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_xStates405ae32f_stateslightPrimaryContainer100overlay}></View>
                    </View>
                </View>
            </View>
            <Text data-layer="6d559dff-0415-4b7b-89da-ac3edbb61869" style={styles.takenphoto_cancelbutton_xLabeld970dd53}>CANCEL</Text>
        </View>
        <View data-layer="512df631-f43b-469d-983e-032938b1920c" style={styles.takenphoto_bodycontainer}>
            <View data-layer="2c0f5470-5eb9-45a2-8ea7-db5efaf2413e" style={styles.takenphoto_bodycontainer_savebutton}>
                <View data-layer="9658c1c5-bb2d-41e0-8baf-83f0ea2ae154" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive}>
                    <View data-layer="b7fd4b24-1913-423a-91a1-fe09925aa7e2" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles}>
                        <View data-layer="5e78ef94-adf8-4565-94a3-dfffe6f344c3" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation}>
                            <View data-layer="0ac8391e-4cc4-475b-8c9e-34e5accb60ce" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation_shadow}>
                                <View data-layer="8b7cca09-f33f-4cf2-82c2-d609f52407b2" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation_shadow_rectangle9ddcf5ff}></View>
                                <View data-layer="3795d37e-cf08-47d7-9fb3-a87789f073aa" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation_shadow_rectangle3ed7b35e}></View>
                                <View data-layer="783562d5-6e1e-4ab8-b413-76cb854da0a8" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation_shadow_rectanglefb25c23b}></View>
                            </View>
                        </View>
                        <View data-layer="92506b7e-0995-49b5-a092-115c29d9032e" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_xColor47fb4fee}></View>
                        <View data-layer="8cdabe3d-042d-46fb-885c-a70c32e848e6" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_xStates70ae686e}>
                            <View data-layer="dcda1b47-9f63-4e54-aba4-33056530b1a7" style={styles.takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_xStates70ae686e_stateslightPrimaryContainer100overlay3d1ec652}></View>
                        </View>
                    </View>
                </View>
                <Text data-layer="a038a5ce-b781-4ad1-998c-93a5de9ca223" style={styles.takenphoto_bodycontainer_savebutton_xLabel8934afbd}>SAVE</Text>
            </View>
            <View data-layer="a6530eef-e2cf-4237-b092-1e479280a082" style={styles.takenphoto_bodycontainer_slipimage}>
                <View data-layer="a2965bb1-28d7-4325-bee7-718847f6eb6d" style={styles.takenphoto_bodycontainer_slipimage_lightCardelementsImageaimage}>
                    <ReactImage data-layer="709143db-c598-4f1a-b189-6cfbe1adfa09" source={require('./assets/xImage.png')} style={styles.takenphoto_bodycontainer_slipimage_lightCardelementsImageaimage_xImage} />
                    <View data-layer="7a802473-e585-46f9-b9fe-4635ddbd43ae" style={styles.takenphoto_bodycontainer_slipimage_lightCardelementsImageaimage_xStates}></View>
                </View></View>
        </View>
        <View data-layer="0973432a-35bc-4884-9879-c388c03aefef" style={styles.takenphoto_headerbar}>
            <View data-layer="94b54a07-01f8-4d34-9e9b-b4d8992d7f54" style={styles.takenphoto_headerbar_headercontainer}>
                <View data-layer="8537789e-1397-4f7a-8d06-f3dad27f7375" style={styles.takenphoto_headerbar_headercontainer_headerelevation}>
                    <View data-layer="1c0f4106-e66f-4b9c-821d-46b1a8ed420d" style={styles.takenphoto_headerbar_headercontainer_headerelevation_headershadowcontainer}>
                        <View data-layer="d388eab5-2ccc-4dd4-a796-ff4ad8ad4cde" style={styles.takenphoto_headerbar_headercontainer_headerelevation_headershadowcontainer_rectangle6a55dbfb}></View>
                        <View data-layer="cc8fe3bb-5535-43d4-b90c-e1aef2419485" style={styles.takenphoto_headerbar_headercontainer_headerelevation_headershadowcontainer_rectangle3dcc5374}></View>
                        <View data-layer="f372431a-629f-430d-bc2b-99911da8761f" style={styles.takenphoto_headerbar_headercontainer_headerelevation_headershadowcontainer_rectangle}></View>
                    </View>
                </View>
                <View data-layer="ea7463ba-2b17-487a-841c-66e8b351026c" style={styles.takenphoto_headerbar_headercontainer_primary}></View>
                <View data-layer="5962e31d-a8c8-4bd6-b63d-f6a4a7e51bc0" style={styles.takenphoto_headerbar_headercontainer_headerrightmenucontainer}>
                    <ReactImage data-layer="3d22bf06-0480-4369-977a-0faf0e91bb68" source={require('./assets/baselineaddwhite48.png')} style={styles.takenphoto_headerbar_headercontainer_headerrightmenucontainer_baselineaddwhite48} />
                    <ReactImage data-layer="f355060e-1f0c-479f-80a0-3e4b74371980" source={require('./assets/baselinesharewhite24dp.png')} style={styles.takenphoto_headerbar_headercontainer_headerrightmenucontainer_baselinesharewhite24dp} />
                    <ReactImage data-layer="c4a4a025-ce57-4806-a60a-aed17363d6d9" source={require('./assets/baselineautorenewwhite48.png')} style={styles.takenphoto_headerbar_headercontainer_headerrightmenucontainer_baselineautorenewwhite48} />
                </View>
                <ReactImage data-layer="450fe60b-3e38-440a-a3a9-00d1de8cf80b" source={require('./assets/baselinemenuwhite48.png')} style={styles.takenphoto_headerbar_headercontainer_baselinemenuwhite48} />
            </View>
            <Text data-layer="324904ca-2634-4777-b71b-14c240592837" style={styles.takenphoto_headerbar_pagetitle}>ADD SLIP</Text>
        </View>
    </ScrollView>
    );
  }
}

Takenphoto.propTypes = {

}

Takenphoto.defaultProps = {

}

function hrp(value){
  return value*100 / 736;
}

function wrp(value){
  return value*100 / 414;
}

const styles = StyleSheet.create({
  "takenphoto": {
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
    "width": wp(wrp(414)),
    "height": hp(hrp(736)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_cancelbutton": {
    "opacity": 1,
    //"position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(386)),
    "height": hp(hrp(696)),
    "left": wp(wrp(-216)),
    "top": hp(hrp(0))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(386)),
    "height": hp(hrp(696)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(386)),
    "height": hp(hrp(696)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(150)),
    "height": hp(hrp(35)),
    "left": wp(wrp(236)),
    "top": hp(hrp(661))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation_shadow9effe868": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(150)),
    "height": hp(hrp(35)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation_shadow9effe868_rectangle677ac036": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(1))
    },
    "shadowRadius": 5,
    "width": wp(wrp(149)),
    "height": hp(hrp(34)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation_shadow9effe868_rectangle8e76cdac": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.12156862745098039,
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(3))
    },
    "shadowRadius": 1,
    "width": wp(wrp(149)),
    "height": hp(hrp(34)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_cancelbuttonelevation_shadow9effe868_rectangle601880e5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1411764705882353,
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(2))
    },
    "shadowRadius": 2,
    "width": wp(wrp(149)),
    "height": hp(hrp(34)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_xColor": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "width": wp(wrp(150)),
    "height": hp(hrp(35)),
    "left": wp(wrp(236)),
    "top": hp(hrp(661))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_xStates405ae32f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(150)),
    "height": hp(hrp(35)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_cancelbutton_cancelbuttonenabled_cancelbuttoninnersyles_xStates405ae32f_stateslightPrimaryContainer100overlay": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "width": wp(wrp(149)),
    "height": hp(hrp(34)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "takenphoto_cancelbutton_xLabeld970dd53": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": wp(wrp(14)),
    "fontWeight": "600",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": wp(wrp(16)),
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(57)),
    "height": hp(hrp(21)),
    "left": wp(wrp(285)),
    "top": hp(hrp(670.5))
  },
  "takenphoto_bodycontainer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(375)),
    "height": hp(hrp(616)),
    "left": wp(wrp(20)),
    "top": hp(hrp(80))
  },
  "takenphoto_bodycontainer_savebutton": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(150)),
    "height": hp(hrp(35)),
    "left": wp(wrp(225)),
    "top": hp(hrp(581))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(150)),
    "height": hp(hrp(35)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": "auto",
    "height": "auto",
    "left": wp(wrp(0)),
    "top": hp(hrp(0)),
    "right": wp(wrp(0)),
    "bottom": hp(hrp(0))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": "auto",
    "height": "auto",
    "left": wp(wrp(0)),
    "top": hp(hrp(0)),
    "right": wp(wrp(0)),
    "bottom": hp(hrp(0))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation_shadow": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": "auto",
    "height": "auto",
    "left": wp(wrp(0)),
    "top": hp(hrp(0)),
    "right": wp(wrp(0)),
    "bottom": hp(hrp(0))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation_shadow_rectangle9ddcf5ff": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(1))
    },
    "shadowRadius": 5,
    "width": "auto",
    "height": "auto",
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5)),
    "right": wp(wrp(1.5)),
    "bottom": hp(hrp(1.5))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation_shadow_rectangle3ed7b35e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(-75)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.12156862745098039,
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(3))
    },
    "shadowRadius": 1,
    "width": wp(wrp(149)),
    "height": hp(hrp(34)),
    "left": "50%",
    "top": hp(hrp(-0.5))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_savebuttonelevation_shadow_rectanglefb25c23b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(-75)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1411764705882353,
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(2))
    },
    "shadowRadius": 2,
    "width": wp(wrp(149)),
    "height": hp(hrp(34)),
    "left": "50%",
    "top": hp(hrp(-0.5))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_xColor47fb4fee": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(-75)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "width": wp(wrp(150)),
    "height": hp(hrp(35)),
    "left": "50%",
    "top": hp(hrp(0))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_xStates70ae686e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(-75)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(150)),
    "height": hp(hrp(35)),
    "left": "50%",
    "top": hp(hrp(0))
  },
  "takenphoto_bodycontainer_savebutton_savebuttonactive_savebuttoninnerstyles_xStates70ae686e_stateslightPrimaryContainer100overlay3d1ec652": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "width": "auto",
    "height": "auto",
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5)),
    "right": wp(wrp(1.5)),
    "bottom": hp(hrp(1.5))
  },
  "takenphoto_bodycontainer_savebutton_xLabel8934afbd": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": wp(wrp(14)),
    "fontWeight": "600",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": wp(wrp(16)),
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(36)),
    "height": hp(hrp(21)),
    "left": wp(wrp(57)),
    "top": hp(hrp(9.5))
  },
  "takenphoto_bodycontainer_slipimage": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(375)),
    "height": hp(hrp(571)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_bodycontainer_slipimage_lightCardelementsImageaimage": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(375)),
    "height": hp(hrp(571)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_bodycontainer_slipimage_lightCardelementsImageaimage_xImage": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp(wrp(375)),
    "height": hp(hrp(571)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_bodycontainer_slipimage_lightCardelementsImageaimage_xStates": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp(wrp(374)),
    "height": hp(hrp(570)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "takenphoto_bodycontainer_slipimage_lightImageLists2FooteraOverlay": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(375)),
    "height": hp(hrp(48)),
    "left": wp(wrp(0)),
    "top": hp(hrp(523))
  },
  "takenphoto_bodycontainer_slipimage_lightImageLists2FooteraOverlay_xContainerLColor": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 0.3803921568627451)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp(wrp(375)),
    "height": hp(hrp(48)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_bodycontainer_slipimage_lightImageLists2FooteraOverlay_xLabel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 0.8705882352941177)",
    "fontSize": wp(wrp(16)),
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": wp(wrp(24)),
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(68)),
    "height": hp(hrp(29)),
    "left": wp(wrp(16)),
    "top": hp(hrp(11.5))
  },
  "takenphoto_bodycontainer_slipimage_lightImageLists2FooteraOverlay_iconactionfavorite24px": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(339)),
    "top": hp(hrp(12))
  },
  "takenphoto_bodycontainer_slipimage_lightImageLists2FooteraOverlay_iconactionfavorite24px_boundary": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_bodycontainer_slipimage_lightImageLists2FooteraOverlay_iconactionfavorite24px_color": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(20)),
    "height": hp(hrp(18)),
    "left": wp(wrp(2)),
    "top": hp(hrp(3))
  },
  "takenphoto_headerbar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(414)),
    "height": hp(hrp(58)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_headerbar_headercontainer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(414)),
    "height": hp(hrp(58)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_headerbar_headercontainer_headerelevation": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(414)),
    "height": hp(hrp(56)),
    "left": wp(wrp(0)),
    "top": hp(hrp(2))
  },
  "takenphoto_headerbar_headercontainer_headerelevation_headershadowcontainer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(414)),
    "height": hp(hrp(56)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_headerbar_headercontainer_headerelevation_headershadowcontainer_rectangle6a55dbfb": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(2))
    },
    "shadowRadius": 4,
    "width": wp(wrp(413)),
    "height": hp(hrp(55)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "takenphoto_headerbar_headercontainer_headerelevation_headershadowcontainer_rectangle3dcc5374": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.12156862745098039,
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(1))
    },
    "shadowRadius": 10,
    "width": wp(wrp(413)),
    "height": hp(hrp(55)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "takenphoto_headerbar_headercontainer_headerelevation_headershadowcontainer_rectangle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": wp(wrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": wp(wrp(1)),
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1411764705882353,
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(4))
    },
    "shadowRadius": 5,
    "width": wp(wrp(413)),
    "height": hp(hrp(55)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "takenphoto_headerbar_headercontainer_primary": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp(wrp(414)),
    "height": hp(hrp(56)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_headerbar_headercontainer_headerrightmenucontainer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(80)),
    "height": hp(hrp(24)),
    "left": wp(wrp(304)),
    "top": hp(hrp(18))
  },
  "takenphoto_headerbar_headercontainer_headerrightmenucontainer_baselineaddwhite48": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "takenphoto_headerbar_headercontainer_headerrightmenucontainer_baselinesharewhite24dp": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(56)),
    "top": hp(hrp(0))
  },
  "takenphoto_headerbar_headercontainer_headerrightmenucontainer_baselineautorenewwhite48": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(28)),
    "top": hp(hrp(0))
  },
  "takenphoto_headerbar_headercontainer_baselinemenuwhite48": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "borderTopLeftRadius": wp(wrp(0)),
    "borderTopRightRadius": wp(wrp(0)),
    "borderBottomLeftRadius": wp(wrp(0)),
    "borderBottomRightRadius": wp(wrp(0)),
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(22)),
    "top": hp(hrp(18))
  },
  "takenphoto_headerbar_pagetitle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": wp(wrp(20)),
    "fontWeight": "600",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": wp(wrp(24)),
    "marginTop": hp(hrp(0)),
    "marginRight": wp(wrp(0)),
    "marginBottom": hp(hrp(0)),
    "marginLeft": wp(wrp(0)),
    "paddingTop": hp(hrp(0)),
    "paddingRight": wp(wrp(0)),
    "paddingBottom": hp(hrp(0)),
    "paddingLeft": wp(wrp(0)),
    "width": wp(wrp(106)),
    "height": hp(hrp(30)),
    "left": wp(wrp(53)),
    "top": hp(hrp(17.5))
  }
});