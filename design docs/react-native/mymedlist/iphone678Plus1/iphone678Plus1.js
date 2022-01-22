import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Iphone678Plus1 extends Component {

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
    <ScrollView data-layer="81b9fe26-4b36-421e-befd-7a77f3d57a46" style={styles.iphone678Plus1}>
        <ReactImage data-layer="23098b85-d08d-468d-a60e-1efd8bf7e27a" source={require('./assets/erikMcleanKxvvlgpaywaUnsplash1.png')} style={styles.iphone678Plus1_erikMcleanKxvvlgpaywaUnsplash1} />
        <View data-layer="76a24fd3-f1f9-4cfa-9d5b-e2115a61cd47" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c}>
            <View data-layer="34bbd42d-34ee-4169-b6a2-1aefc5750f72" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397}>
                <View data-layer="76f26a54-a62b-4e82-9081-e53fb7742226" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f}>
                    <View data-layer="cc75ffe2-56ed-453c-a7e9-9d59564dcfcb" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f_shadow80cbae12}>
                        <View data-layer="5bd23b33-25d1-4e09-a1bc-deb09cd2d0ee" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f_shadow80cbae12_rectangled4941e14}></View>
                        <View data-layer="e29f7d68-c7ba-4fac-afb2-858dc4807461" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f_shadow80cbae12_rectanglebd084c00}></View>
                        <View data-layer="a6c8f402-0228-4d44-b4b2-a13460d368f6" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f_shadow80cbae12_rectangle4f04c932}></View>
                    </View>
                </View>
                <View data-layer="91516593-a5f2-4a59-892f-085eab87652b" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_xColor5b779c77}></View>
                <View data-layer="5d60b57e-e2f9-4631-85bd-80b87b84debb" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_xStates8f11ef52}>
                    <View data-layer="574bb4b1-6568-422b-9f21-699396d45b8b" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_xStates8f11ef52_stateslightPrimaryContainer100overlay3e3c781e}></View>
                </View>
            </View>
        </View>
        <View data-layer="39558d35-4904-41fc-86db-20b98fee2ab4" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled}>
            <View data-layer="9e742aa7-fce5-4dc9-a2da-bb65fc646b4e" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd}>
                <View data-layer="9d1fea06-dbad-43d1-a3a8-6886c30e3962" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c}>
                    <View data-layer="6c169292-8570-47b5-b621-141686eb7ada" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c_shadow4c40e2f9}>
                        <View data-layer="17d72510-b0fe-434b-8345-86c0adcc3d6e" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c_shadow4c40e2f9_rectangle3bafd04f}></View>
                        <View data-layer="a38db97c-8caa-485e-a540-e5c9f508e4b5" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c_shadow4c40e2f9_rectangle5544a4eb}></View>
                        <View data-layer="ec3d92c2-d59f-4eba-8623-c23ee95c4c66" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c_shadow4c40e2f9_rectangleece29861}></View>
                    </View>
                </View>
                <View data-layer="8d316476-0e9c-434d-b270-52095c3e2d2a" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_xColor25b5c877}></View>
                <View data-layer="093e4b0d-8baa-4460-bd57-1b068938465f" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_xStates211bf577}>
                    <View data-layer="dfc78354-3e3c-4463-90a7-70985f7e28cc" style={styles.iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_xStates211bf577_stateslightPrimaryContainer100overlay}></View>
                </View>
            </View>
        </View>
        <Text data-layer="52272d0c-8fe8-4be8-9848-fedbc7f01243" style={styles.iphone678Plus1_xLabel0799d8d3}>EXIT</Text>
        <Text data-layer="29f4b5ee-cccb-4be3-8481-1def2fa51b87" style={styles.iphone678Plus1_xLabel6bc26d15}>MY INFO</Text>
        <View data-layer="d602f74c-e440-47f8-ac24-eda076d3ce22" style={styles.iphone678Plus1_containerc3c33152}>
            <View data-layer="b63d72fa-5cd0-4bc8-8009-9374b3343c95" style={styles.iphone678Plus1_containerc3c33152_lightElevation02dp046b9522}>
                <View data-layer="34aa0374-935b-4c6b-8e02-4b5ec378aca5" style={styles.iphone678Plus1_containerc3c33152_lightElevation02dp046b9522_shadow58432519}>
                    <View data-layer="9dc73262-fe46-4639-a4a4-36fdd74c2aae" style={styles.iphone678Plus1_containerc3c33152_lightElevation02dp046b9522_shadow58432519_rectanglee28b73df}></View>
                    <View data-layer="48f1bc96-683e-4345-9287-66e692183fcf" style={styles.iphone678Plus1_containerc3c33152_lightElevation02dp046b9522_shadow58432519_rectangleb67207a7}></View>
                    <View data-layer="2d65a720-3560-4d40-b341-88274d9532c4" style={styles.iphone678Plus1_containerc3c33152_lightElevation02dp046b9522_shadow58432519_rectanglec94c5886}></View>
                </View>
            </View>
            <View data-layer="8763aac2-dcb4-4026-9029-fb799ba0f541" style={styles.iphone678Plus1_containerc3c33152_xColor56d2dc96}></View>
            <View data-layer="306835d6-64e1-4986-854e-3c254355a6f5" style={styles.iphone678Plus1_containerc3c33152_xStatesa3d1d878}>
                <View data-layer="849d8d19-74f2-4275-867d-4e1a58e320d8" style={styles.iphone678Plus1_containerc3c33152_xStatesa3d1d878_stateslightSurfaceContainersprimaryContent596bf54b}></View>
            </View>
        </View>
        <Text data-layer="df3439f3-f726-4ca0-9635-2549f20e6a79" style={styles.iphone678Plus1_xLabel9fe926a1}>aDD SLIP</Text>
        <View data-layer="f76cd2e9-e0f7-4687-ae95-e5fdae620e0e" style={styles.iphone678Plus1_group1}>
            <View data-layer="5cf5c724-3b37-4aee-bf41-2e422730693f" style={styles.iphone678Plus1_group1_container43efe96d}>
                <View data-layer="b673da3d-753b-43be-a953-652c24359f8b" style={styles.iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e}>
                    <View data-layer="4a48ac65-5060-4436-8b03-e0823fbf2e9b" style={styles.iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e_shadow790b61db}>
                        <View data-layer="7292d493-716f-4390-b613-441cbfb456bf" style={styles.iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e_shadow790b61db_rectangle0afaaf48}></View>
                        <View data-layer="dc11c307-8163-423b-b752-2e006bf84949" style={styles.iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e_shadow790b61db_rectangle99ec3bd3}></View>
                        <View data-layer="d904485c-d84a-4f55-9087-9df2b1bf910a" style={styles.iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e_shadow790b61db_rectangle6f3581a6}></View>
                    </View>
                </View>
                <View data-layer="5be4c0c0-0035-415f-a0c1-4665b86fdaae" style={styles.iphone678Plus1_group1_container43efe96d_xColor9d21aaec}></View>
                <View data-layer="9ae412c0-af40-4a14-820d-6dd5da0b0db3" style={styles.iphone678Plus1_group1_container43efe96d_xStates831ab800}>
                    <View data-layer="dc2b6c82-7c06-4aae-8749-926ba1137296" style={styles.iphone678Plus1_group1_container43efe96d_xStates831ab800_stateslightSurfaceContainersprimaryContent7574320e}></View>
                </View>
            </View>
            <Text data-layer="fa32c251-0219-4aeb-b8a9-04d480f8a11f" style={styles.iphone678Plus1_group1_xLabel41330a8b}>sHARE</Text>
            <ReactImage data-layer="d16a1ec3-e418-403b-b990-6806663c06a2" source={require('./assets/baselinesharewhite24dp.png')} style={styles.iphone678Plus1_group1_baselinesharewhite24dp} />
        </View>
        <View data-layer="9b9fc4d6-afa8-4254-b44d-9d5f2a87ba86" style={styles.iphone678Plus1_group2}>
            <View data-layer="11579147-1836-45bf-9af1-573f48451fc9" style={styles.iphone678Plus1_group2_container}>
                <View data-layer="08b4238c-01aa-476c-98f9-226b8904c327" style={styles.iphone678Plus1_group2_container_lightElevation02dp}>
                    <View data-layer="8006ad0f-58d3-4d3e-aadf-6ab5ff644c9a" style={styles.iphone678Plus1_group2_container_lightElevation02dp_shadow}>
                        <View data-layer="d3eb7b9d-ae4f-4a15-9265-05a1f6ebac05" style={styles.iphone678Plus1_group2_container_lightElevation02dp_shadow_rectanglef6c880eb}></View>
                        <View data-layer="8717a714-3553-40fe-9e25-2fabe7546f47" style={styles.iphone678Plus1_group2_container_lightElevation02dp_shadow_rectangle988ddb4b}></View>
                        <View data-layer="51b9dab1-c955-4907-871c-65b2810bd0de" style={styles.iphone678Plus1_group2_container_lightElevation02dp_shadow_rectangle}></View>
                    </View>
                </View>
                <View data-layer="859cdc50-7858-4f83-a6d4-10136e232be6" style={styles.iphone678Plus1_group2_container_xColor}></View>
                <View data-layer="47d322a6-a0e4-4b82-a8d4-4e5eb57d0c97" style={styles.iphone678Plus1_group2_container_xStates}>
                    <View data-layer="b82e6235-7e69-4d01-959c-0b71dd77a730" style={styles.iphone678Plus1_group2_container_xStates_stateslightSurfaceContainersprimaryContent}></View>
                </View>
                <ReactImage data-layer="ab43c521-2f2a-4457-996f-6e80790e452f" source={require('./assets/baselineautorenewwhite48.png')} style={styles.iphone678Plus1_group2_container_baselineautorenewwhite48} />
            </View>
            <Text data-layer="86a3dca5-db31-40c5-a291-9a7cfc5c9351" style={styles.iphone678Plus1_group2_xLabel}>RECONCILE</Text>
        </View>
        <View style={styles.iphone678Plus1_myMedList}><Text data-layer="4b11649e-af7d-45dd-86e8-c8db8a93c322" style={{"marginTop":-7,"color":"rgba(255, 255, 255, 1)","fontSize":30,"fontWeight":"500","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":33}}>MY MED LIST</Text></View>
        <ReactImage data-layer="4d688298-c6a1-4981-a0fa-d647ecf3ba6a" source={require('./assets/baselineaddwhite48.png')} style={styles.iphone678Plus1_baselineaddwhite48} />
    </ScrollView>
    );
  }
}

Iphone678Plus1.propTypes = {

}

Iphone678Plus1.defaultProps = {

}


const styles = StyleSheet.create({
  "iphone678Plus1": {
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
  "iphone678Plus1_erikMcleanKxvvlgpaywaUnsplash1": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 498,
    "height": 746,
    "left": -42,
    "top": -10
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c": {
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
    "width": 100,
    "height": 35,
    "left": 36,
    "top": 658
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397": {
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
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f": {
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
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f_shadow80cbae12": {
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
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f_shadow80cbae12_rectangled4941e14": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": 0,
      "height": 1
    },
    "shadowRadius": 5,
    "width": 99,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f_shadow80cbae12_rectanglebd084c00": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.12156862745098039,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 1,
    "width": 99,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_lightElevation02dp89d8985f_shadow80cbae12_rectangle4f04c932": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 2,
    "width": 99,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_xColor5b779c77": {
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
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_xStates8f11ef52": {
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
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled7076771c_container4bdc6397_xStates8f11ef52_stateslightPrimaryContainer100overlay3e3c781e": {
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
    "width": 99,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled": {
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
    "width": 100,
    "height": 35,
    "left": 279,
    "top": 658
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd": {
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
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c": {
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
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c_shadow4c40e2f9": {
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
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c_shadow4c40e2f9_rectangle3bafd04f": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": 0,
      "height": 1
    },
    "shadowRadius": 5,
    "width": 99,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c_shadow4c40e2f9_rectangle5544a4eb": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.12156862745098039,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 1,
    "width": 99,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_lightElevation02dp1e9c8b3c_shadow4c40e2f9_rectangleece29861": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 2,
    "width": 99,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_xColor25b5c877": {
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
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_xStates211bf577": {
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
    "width": 100,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_lightButton3ContainedaTextenabled_containerc106cbdd_xStates211bf577_stateslightPrimaryContainer100overlay": {
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
    "width": 99,
    "height": 34,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_xLabel0799d8d3": {
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
    "width": 30,
    "height": 21,
    "left": 314,
    "top": 666.5
  },
  "iphone678Plus1_xLabel6bc26d15": {
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
    "width": 63,
    "height": 21,
    "left": 54,
    "top": 666.5
  },
  "iphone678Plus1_containerc3c33152": {
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
    "width": 344,
    "height": 50,
    "left": 28,
    "top": 270
  },
  "iphone678Plus1_containerc3c33152_lightElevation02dp046b9522": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_containerc3c33152_lightElevation02dp046b9522_shadow58432519": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_containerc3c33152_lightElevation02dp046b9522_shadow58432519_rectanglee28b73df": {
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
    "width": 343,
    "height": 49,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_containerc3c33152_lightElevation02dp046b9522_shadow58432519_rectangleb67207a7": {
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
    "width": 343,
    "height": 49,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_containerc3c33152_lightElevation02dp046b9522_shadow58432519_rectanglec94c5886": {
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
    "width": 343,
    "height": 49,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_containerc3c33152_xColor56d2dc96": {
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
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_containerc3c33152_xStatesa3d1d878": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_containerc3c33152_xStatesa3d1d878_stateslightSurfaceContainersprimaryContent596bf54b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(98, 0, 238, 0)",
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
    "width": -1,
    "height": -1,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_xLabel9fe926a1": {
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
    "width": 67,
    "height": 21,
    "left": 174,
    "top": 287.5
  },
  "iphone678Plus1_group1": {
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
    "width": 344,
    "height": 50,
    "left": 28,
    "top": 418
  },
  "iphone678Plus1_group1_container43efe96d": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e_shadow790b61db": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e_shadow790b61db_rectangle0afaaf48": {
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
    "width": 343,
    "height": 49,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e_shadow790b61db_rectangle99ec3bd3": {
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
    "width": 343,
    "height": 49,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_group1_container43efe96d_lightElevation02dp4d2a7e1e_shadow790b61db_rectangle6f3581a6": {
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
    "width": 343,
    "height": 49,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_group1_container43efe96d_xColor9d21aaec": {
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
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group1_container43efe96d_xStates831ab800": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group1_container43efe96d_xStates831ab800_stateslightSurfaceContainersprimaryContent7574320e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(98, 0, 238, 0)",
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
    "width": -1,
    "height": -1,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_group1_xLabel41330a8b": {
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
    "width": 47,
    "height": 21,
    "left": 149,
    "top": 15
  },
  "iphone678Plus1_group1_baselinesharewhite24dp": {
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
    "left": 110,
    "top": 13
  },
  "iphone678Plus1_group2": {
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
    "width": 344,
    "height": 50,
    "left": 28,
    "top": 349
  },
  "iphone678Plus1_group2_container": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group2_container_lightElevation02dp": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group2_container_lightElevation02dp_shadow": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group2_container_lightElevation02dp_shadow_rectanglef6c880eb": {
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
    "width": 343,
    "height": 49,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_group2_container_lightElevation02dp_shadow_rectangle988ddb4b": {
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
    "width": 343,
    "height": 49,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_group2_container_lightElevation02dp_shadow_rectangle": {
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
    "width": 343,
    "height": 49,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_group2_container_xColor": {
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
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group2_container_xStates": {
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
    "width": 344,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "iphone678Plus1_group2_container_xStates_stateslightSurfaceContainersprimaryContent": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(98, 0, 238, 0)",
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
    "width": -1,
    "height": -1,
    "left": -0.5,
    "top": -0.5
  },
  "iphone678Plus1_group2_container_baselineautorenewwhite48": {
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
    "left": 110,
    "top": 13
  },
  "iphone678Plus1_group2_xLabel": {
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
    "width": 81,
    "height": 21,
    "left": 147,
    "top": 17
  },
  "iphone678Plus1_myMedList": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 30,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 33,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 273,
    "height": 40,
    "left": 71,
    "top": 90
  },
  "iphone678Plus1_baselineaddwhite48": {
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
    "left": 135,
    "top": 281
  }
});