import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        <View data-layer="3b2ecf7d-646d-4ae0-b0f3-69a13dbd7239" style={styles.addslip_rectangle1}></View>
        <ReactImage data-layer="e11fa4e2-4ad8-415b-9131-3fd4c30ea533" source={require('./assets/photoCamera.png')} style={styles.addslip_photoCamera} />
        <View data-layer="93b79de1-c2ba-4fd6-8382-d6fadb364f98" style={styles.addslip_lightButton3ContainedaTextenabled}>
            <View data-layer="72479b30-1495-4964-8323-d4c41173d32d" style={styles.addslip_lightButton3ContainedaTextenabled_container}>
                <View data-layer="7b129f4e-dada-4146-aa0c-fdfcaf9c68a7" style={styles.addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp}>
                    <View data-layer="6f53f182-f844-4ad6-928a-eda06a996109" style={styles.addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow7f519587}>
                        <View data-layer="aace7906-6b3f-4135-86cf-a043633d737f" style={styles.addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow7f519587_rectangle2ed7d2bf}></View>
                        <View data-layer="6388f636-549b-4fe3-9a87-4f4d92dff10f" style={styles.addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow7f519587_rectangle960f09ff}></View>
                        <View data-layer="d862093d-a746-44dd-a46a-40008c72d502" style={styles.addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow7f519587_rectangle6d1d7fdc}></View>
                    </View>
                </View>
                <View data-layer="9ec907cb-05fa-44ad-8d07-4d1123599a9b" style={styles.addslip_lightButton3ContainedaTextenabled_container_xColor}></View>
                <View data-layer="b70d6773-9ceb-4792-a7eb-e0d9e462fde5" style={styles.addslip_lightButton3ContainedaTextenabled_container_xStates}>
                    <View data-layer="b2ad5ef8-3f09-42f0-8410-8d3ad0c84203" style={styles.addslip_lightButton3ContainedaTextenabled_container_xStates_stateslightPrimaryContainer100overlay}></View>
                </View>
            </View>
            <Text data-layer="28daebd1-26f9-4b23-a202-9ed04ef84a18" style={styles.addslip_lightButton3ContainedaTextenabled_xLabel}>ADD PHOTO</Text>
        </View>
        <Text data-layer="4dc434ff-f8aa-4bcf-9be1-f7e1b017be76" style={styles.addslip_addPhotoOfPrescriptionSlipOrMedicineBottle}>Add photo of prescription slip or medicine bottle</Text>
        <View data-layer="a54b3447-e92f-4675-b177-4a2e396f44d3" style={styles.addslip_lightAppBar1TopAStandardAFlat}>
            <View data-layer="3207c758-da2f-4856-a0fc-b80cff550833" style={styles.addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp}>
                <View data-layer="2cbbc1a7-e675-45b6-83b3-5422f5dfb594" style={styles.addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp_shadow}>
                    <View data-layer="06dca015-12a8-444a-861e-3c7e3b8ef4e4" style={styles.addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp_shadow_rectangle30c6afc9}></View>
                    <View data-layer="0220bd68-b4d1-4aab-ade2-b7c6a03c7c38" style={styles.addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp_shadow_rectangle3c3ccde2}></View>
                    <View data-layer="c6f4103a-41e1-46ef-8020-f488adb17bd3" style={styles.addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp_shadow_rectangle}></View>
                </View>
            </View>
            <View data-layer="75be2621-40b4-4bfb-8688-850e515a8003" style={styles.addslip_lightAppBar1TopAStandardAFlat_primary}></View>
            <ReactImage data-layer="c828ef08-be8a-4fc9-b5f5-d317070cd1a6" source={require('./assets/maskGroup.png')} style={styles.addslip_lightAppBar1TopAStandardAFlat_maskGroup} />
            <View data-layer="fa3f620c-027a-4730-8bac-7f115f9b6b43" style={styles.addslip_lightAppBar1TopAStandardAFlat_group27}>
                <ReactImage data-layer="1eafc958-9097-4cd2-9779-74a074076b90" source={require('./assets/baselineaddwhite48.png')} style={styles.addslip_lightAppBar1TopAStandardAFlat_group27_baselineaddwhite48} />
                <ReactImage data-layer="40e90059-aaf7-47ef-bd39-f063f60d7718" source={require('./assets/baselinesharewhite24dp.png')} style={styles.addslip_lightAppBar1TopAStandardAFlat_group27_baselinesharewhite24dp} />
                <ReactImage data-layer="9aba0a1d-171a-446b-a3d0-4ba5e5563c20" source={require('./assets/baselineautorenewwhite48.png')} style={styles.addslip_lightAppBar1TopAStandardAFlat_group27_baselineautorenewwhite48} />
            </View>
            <ReactImage data-layer="c3f2817e-992e-435e-957a-512ff87af0d3" source={require('./assets/baselinemenuwhite48.png')} style={styles.addslip_lightAppBar1TopAStandardAFlat_baselinemenuwhite48} />
        </View>
    </ScrollView>
    );
  }
}

Addslip.propTypes = {

}

Addslip.defaultProps = {

}

function hrp(value){
  return value*100 / 736;
}

function wrp(value){
  return value*100 / 414;
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
    "width": wp(wrp(414)),
    "height": hp(hrp(736)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_rectangle1": {
    "opacity": 1,
    //"position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": wp(wrp(414)),
    "height": hp(hrp(747)),
    "left": wp(wrp(0)),
    "top": hp(hrp(210))
  },
  "addslip_photoCamera": {
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
    "width": wp(wrp(223)),
    "height": hp(hrp(223)),
    "left": wp(wrp(96)),
    "top": hp(hrp(220))
  },
  "addslip_lightButton3ContainedaTextenabled": {
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
    "width": wp(wrp(119)),
    "height": hp(hrp(35)),
    "left": wp(wrp(148)),
    "top": hp(hrp(491))
  },
  "addslip_lightButton3ContainedaTextenabled_container": {
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
    "width": wp(wrp(119)),
    "height": hp(hrp(35)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp": {
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
    "width": wp(wrp(119)),
    "height": hp(hrp(35)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow7f519587": {
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
    "width": wp(wrp(119)),
    "height": hp(hrp(35)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow7f519587_rectangle2ed7d2bf": {
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
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": hp(hrp(0.2)),
    "shadowOffset": {
      "width": wp(wrp(0)),
      "height": hp(hrp(1))
    },
    "shadowRadius": 5,
    "width": wp(wrp(118)),
    "height": hp(hrp(34)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow7f519587_rectangle960f09ff": {
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
    "borderTopWidth": hp(hrp(1)),
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": hp(hrp(1)),
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": hp(hrp(1)),
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": hp(hrp(1)),
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
    "shadowRadius": wp(wrp(1)),
    "width": wp(wrp(118)),
    "height": hp(hrp(34)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "addslip_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow7f519587_rectangle6d1d7fdc": {
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
    "width": wp(wrp(118)),
    "height": hp(hrp(34)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "addslip_lightButton3ContainedaTextenabled_container_xColor": {
    "opacity": 0.2,
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
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "width": wp(wrp(119)),
    "height": hp(hrp(35)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightButton3ContainedaTextenabled_container_xStates": {
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
    "width": wp(wrp(119)),
    "height": hp(hrp(35)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightButton3ContainedaTextenabled_container_xStates_stateslightPrimaryContainer100overlay": {
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
    "borderTopLeftRadius": wp(wrp(4)),
    "borderTopRightRadius": wp(wrp(4)),
    "borderBottomLeftRadius": wp(wrp(4)),
    "borderBottomRightRadius": wp(wrp(4)),
    "width": wp(wrp(118)),
    "height": hp(hrp(34)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "addslip_lightButton3ContainedaTextenabled_xLabel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": wp(wrp(16)),
    "fontWeight": "600",
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
    "width": wp(wrp(87)),
    "height": hp(hrp(21)),
    "left": wp(wrp(20)),
    "top": hp(hrp(10))
  },
  "addslip_addPhotoOfPrescriptionSlipOrMedicineBottle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(56, 156, 196, 1)",
    "fontSize": wp(wrp(15)),
    "fontWeight": "500",
    "fontStyle": "italic",
    "fontFamily": "Calibri",
    "textAlign": "center",
    "lineHeight": hp(hrp(20)),
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": wp(wrp(309)),
    "height": hp(hrp(47)),
    "left": wp(wrp(55)),
    "top": hp(hrp(159))
  },
  "addslip_lightAppBar1TopAStandardAFlat": {
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
    "width": wp(wrp(414)),
    "height": hp(hrp(58)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp": {
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
    "width": wp(wrp(402)),
    "height": hp(hrp(56)),
    "left": wp(wrp(0)),
    "top": hp(hrp(2))
  },
  "addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp_shadow": {
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
    "width": wp(wrp(402)),
    "height": hp(hrp(56)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp_shadow_rectangle30c6afc9": {
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
      "width": wp(wrp(0)),
      "height": hp(hrp(2))
    },
    "shadowRadius": wp(wrp(4)),
    "width": wp(wrp(401)),
    "height": hp(hrp(55)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp_shadow_rectangle3c3ccde2": {
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
      "width": wp(wrp(0)),
      "height": hp(hrp(1))
    },
    "shadowRadius": wp(wrp(10)),
    "width": wp(wrp(401)),
    "height": hp(hrp(55)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "addslip_lightAppBar1TopAStandardAFlat_lightElevation00dp_shadow_rectangle": {
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
      "width": wp(wrp(0)),
      "height": hp(hrp(4))
    },
    "shadowRadius": 5,
    "width": wp(wrp(401)),
    "height": hp(hrp(55)),
    "left": wp(wrp(-0.5)),
    "top": hp(hrp(-0.5))
  },
  "addslip_lightAppBar1TopAStandardAFlat_primary": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": wp(wrp(414)),
    "height": hp(hrp(56)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightAppBar1TopAStandardAFlat_maskGroup": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": wp(wrp(402)),
    "height": hp(hrp(56)),
    "left": wp(wrp(30)),
    "top": hp(hrp(2))
  },
  "addslip_lightAppBar1TopAStandardAFlat_maskGroup_xPageTitle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": wp(wrp(20)),
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
    "width": wp(wrp(106)),
    "height": hp(hrp(30)),
    "left": wp(wrp(41)),
    "top": hp(hrp(15.5))
  },
  "addslip_lightAppBar1TopAStandardAFlat_maskGroup_trailingIcon2": {
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
    "width": wp(wrp(23)),
    "height": hp(hrp(23)),
    "left": wp(wrp(314)),
    "top": hp(hrp(16))
  },
  "addslip_lightAppBar1TopAStandardAFlat_maskGroup_trailingIcon2_boundary": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": wp(wrp(23)),
    "height": hp(hrp(23)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightAppBar1TopAStandardAFlat_maskGroup_mask": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": wp(wrp(402)),
    "height": hp(hrp(56)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightAppBar1TopAStandardAFlat_group27": {
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
    "width": wp(wrp(80)),
    "height": hp(hrp(24)),
    "left": wp(wrp(304)),
    "top": hp(hrp(18))
  },
  "addslip_lightAppBar1TopAStandardAFlat_group27_baselineaddwhite48": {
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
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(0)),
    "top": hp(hrp(0))
  },
  "addslip_lightAppBar1TopAStandardAFlat_group27_baselinesharewhite24dp": {
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
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(56)),
    "top": hp(hrp(0))
  },
  "addslip_lightAppBar1TopAStandardAFlat_group27_baselineautorenewwhite48": {
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
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(28)),
    "top": hp(hrp(0))
  },
  "addslip_lightAppBar1TopAStandardAFlat_baselinemenuwhite48": {
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
    "width": wp(wrp(24)),
    "height": hp(hrp(24)),
    "left": wp(wrp(22)),
    "top": hp(hrp(18))
  }
});