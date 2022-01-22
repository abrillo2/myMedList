import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Addslip extends Component {

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
    <ScrollView data-layer="08d81c19-5e80-4b7d-ba58-3eee8b394a8d" style={styles.addslip}>
        <View data-layer="8274c397-e12f-4116-92cc-a407ef1d69a3" style={styles.addslip_group41}>
            <ReactImage data-layer="e11fa4e2-4ad8-415b-9131-3fd4c30ea533" source={require('./assets/photocameraicon.png')} style={styles.addslip_group41_photocameraicon} />
            <View data-layer="93b79de1-c2ba-4fd6-8382-d6fadb364f98" style={styles.addslip_group41_addphotobutton}>
                <View data-layer="72479b30-1495-4964-8323-d4c41173d32d" style={styles.addslip_group41_addphotobutton_container}>
                    <View data-layer="7b129f4e-dada-4146-aa0c-fdfcaf9c68a7" style={styles.addslip_group41_addphotobutton_container_lightElevation02dp}>
                        <View data-layer="6f53f182-f844-4ad6-928a-eda06a996109" style={styles.addslip_group41_addphotobutton_container_lightElevation02dp_shadow43bc97c4}>
                            <View data-layer="aace7906-6b3f-4135-86cf-a043633d737f" style={styles.addslip_group41_addphotobutton_container_lightElevation02dp_shadow43bc97c4_rectangle023c40d5}></View>
                            <View data-layer="6388f636-549b-4fe3-9a87-4f4d92dff10f" style={styles.addslip_group41_addphotobutton_container_lightElevation02dp_shadow43bc97c4_rectangle449b95e7}></View>
                            <View data-layer="d862093d-a746-44dd-a46a-40008c72d502" style={styles.addslip_group41_addphotobutton_container_lightElevation02dp_shadow43bc97c4_rectangle5326665f}></View>
                        </View>
                    </View>
                    <View data-layer="9ec907cb-05fa-44ad-8d07-4d1123599a9b" style={styles.addslip_group41_addphotobutton_container_xColor}></View>
                    <View data-layer="b70d6773-9ceb-4792-a7eb-e0d9e462fde5" style={styles.addslip_group41_addphotobutton_container_xStates}>
                        <View data-layer="b2ad5ef8-3f09-42f0-8410-8d3ad0c84203" style={styles.addslip_group41_addphotobutton_container_xStates_stateslightPrimaryContainer100overlay}></View>
                    </View>
                </View>
                <Text data-layer="28daebd1-26f9-4b23-a202-9ed04ef84a18" style={styles.addslip_group41_addphotobutton_xLabel}>ADD photo</Text>
            </View>
            <Text data-layer="4dc434ff-f8aa-4bcf-9be1-f7e1b017be76" style={styles.addslip_group41_bodytitle}>Add photo of prescription slip or medicine bottle</Text>
        </View>
        <View data-layer="a54b3447-e92f-4675-b177-4a2e396f44d3" style={styles.addslip_headercontainer}>
            <View data-layer="3207c758-da2f-4856-a0fc-b80cff550833" style={styles.addslip_headercontainer_headershadow}>
                <View data-layer="2cbbc1a7-e675-45b6-83b3-5422f5dfb594" style={styles.addslip_headercontainer_headershadow_shadow}>
                    <View data-layer="06dca015-12a8-444a-861e-3c7e3b8ef4e4" style={styles.addslip_headercontainer_headershadow_shadow_rectangle79c4847c}></View>
                    <View data-layer="0220bd68-b4d1-4aab-ade2-b7c6a03c7c38" style={styles.addslip_headercontainer_headershadow_shadow_rectanglea76b9cfc}></View>
                    <View data-layer="c6f4103a-41e1-46ef-8020-f488adb17bd3" style={styles.addslip_headercontainer_headershadow_shadow_rectangle}></View>
                </View>
            </View>
            <Svg data-layer="d3d60a9f-d3fc-41f7-8d75-ab06410ea600" style={styles.addslip_headercontainer_primary} preserveAspectRatio="none" viewBox="0 0 414 56" fill="rgba(34, 171, 226, 1)"><SvgPath d="M 0 0 L 414 0 L 414 56 L 0 56 L 0 0 Z"  /></Svg>
            <View data-layer="fa3f620c-027a-4730-8bac-7f115f9b6b43" style={styles.addslip_headercontainer_leftmenugroup}>
                <ReactImage data-layer="1eafc958-9097-4cd2-9779-74a074076b90" source={require('./assets/baselineaddwhite48.png')} style={styles.addslip_headercontainer_leftmenugroup_baselineaddwhite48} />
                <ReactImage data-layer="40e90059-aaf7-47ef-bd39-f063f60d7718" source={require('./assets/baselinesharewhite24dp.png')} style={styles.addslip_headercontainer_leftmenugroup_baselinesharewhite24dp} />
                <ReactImage data-layer="9aba0a1d-171a-446b-a3d0-4ba5e5563c20" source={require('./assets/baselineautorenewwhite48.png')} style={styles.addslip_headercontainer_leftmenugroup_baselineautorenewwhite48} />
            </View>
            <ReactImage data-layer="c3f2817e-992e-435e-957a-512ff87af0d3" source={require('./assets/drawermenubutton.png')} style={styles.addslip_headercontainer_drawermenubutton} />
            <Text data-layer="c0b8e927-a8c9-48c1-997f-771c069599dc" style={styles.addslip_headercontainer_pagetitle}>ADD SLIP</Text>
        </View>
    </ScrollView>
    );
  }
}

Addslip.propTypes = {

}

Addslip.defaultProps = {

}


const styles = StyleSheet.create({
  "addslip": {
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
  "addslip_group41": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 309,
    "height": 370,
    "left": 53,
    "top": 185
  },
  "addslip_group41_photocameraicon": {
    "opacity": 1,
    "position": "relative",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 223,
    "height": 223,
    "left": 43,
    "top": 57
  },
  "addslip_group41_addphotobutton": {
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
    "width": 119,
    "height": 35,
    "left": 95,
    "top": 335
  },
  "addslip_group41_addphotobutton_container": {
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
    "width": 119,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "addslip_group41_addphotobutton_container_lightElevation02dp": {
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
    "width": 119,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "addslip_group41_addphotobutton_container_lightElevation02dp_shadow43bc97c4": {
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
    "width": 119,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "addslip_group41_addphotobutton_container_lightElevation02dp_shadow43bc97c4_rectangle023c40d5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": 0,
      "height": 1
    },
    "shadowRadius": 5,
    "width": 118,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "addslip_group41_addphotobutton_container_lightElevation02dp_shadow43bc97c4_rectangle449b95e7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.12156862745098039,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 1,
    "width": 118,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "addslip_group41_addphotobutton_container_lightElevation02dp_shadow43bc97c4_rectangle5326665f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 2,
    "width": 118,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "addslip_group41_addphotobutton_container_xColor": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(98, 0, 238, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 119,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "addslip_group41_addphotobutton_container_xStates": {
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
    "width": 119,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "addslip_group41_addphotobutton_container_xStates_stateslightPrimaryContainer100overlay": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(34, 171, 226, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 118,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "addslip_group41_addphotobutton_xLabel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 16,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 87,
    "height": 21,
    "left": 16,
    "top": 9.5
  },
  "addslip_group41_bodytitle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(56, 156, 196, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Calibri",
    "textAlign": "center",
    "lineHeight": 20,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 309,
    "height": 47,
    "left": 0,
    "top": -1
  },
  "addslip_headercontainer": {
    "opacity": 1,
    "position": "fixed",
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
    "height": 58,
    "left": 0,
    "top": 0
  },
  "addslip_headercontainer_headershadow": {
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
    "height": 56,
    "left": 0,
    "top": 2
  },
  "addslip_headercontainer_headershadow_shadow": {
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
    "height": 56,
    "left": 0,
    "top": 0
  },
  "addslip_headercontainer_headershadow_shadow_rectangle79c4847c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 4,
    "width": 413,
    "height": 55,
    "left": -0.5,
    "top": -0.5
  },
  "addslip_headercontainer_headershadow_shadow_rectanglea76b9cfc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.12156862745098039,
    "shadowOffset": {
      "width": 0,
      "height": 1
    },
    "shadowRadius": 10,
    "width": 413,
    "height": 55,
    "left": -0.5,
    "top": -0.5
  },
  "addslip_headercontainer_headershadow_shadow_rectangle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 4
    },
    "shadowRadius": 5,
    "width": 413,
    "height": 55,
    "left": -0.5,
    "top": -0.5
  },
  "addslip_headercontainer_primary": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 56,
    "left": 0,
    "top": 0
  },
  "addslip_headercontainer_leftmenugroup": {
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
    "width": 80,
    "height": 24,
    "left": 304,
    "top": 18
  },
  "addslip_headercontainer_leftmenugroup_baselineaddwhite48": {
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
    "width": 24,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "addslip_headercontainer_leftmenugroup_baselinesharewhite24dp": {
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
    "width": 24,
    "height": 24,
    "left": 56,
    "top": 0
  },
  "addslip_headercontainer_leftmenugroup_baselineautorenewwhite48": {
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
    "width": 24,
    "height": 24,
    "left": 28,
    "top": 0
  },
  "addslip_headercontainer_drawermenubutton": {
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
    "width": 24,
    "height": 24,
    "left": 22,
    "top": 18
  },
  "addslip_headercontainer_pagetitle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "500",
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
    "width": 106,
    "height": 30,
    "left": 53,
    "top": 17.5
  }
});