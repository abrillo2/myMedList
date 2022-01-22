import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Reconcilelist1 extends Component {

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
    <ScrollView data-layer="e3a5b4c3-9a37-4252-ae9a-992d556c9d39" style={styles.reconcilelist1}>
        <View data-layer="fe8a5532-602b-4a4f-8ef9-29385f267300" style={styles.reconcilelist1_bodycontainer}>
            <View data-layer="a693814e-7cbd-4622-9173-f2d631cd4b75" style={styles.reconcilelist1_bodycontainer_listlabelcontainer}>
                <View data-layer="1e582648-322c-4992-9b6e-566399c93165" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel42cf407f2}>
                    <View data-layer="b3c27851-64c8-420d-8546-a299c306f151" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel42cf407f2_xContainerLColor2e6ae361}></View>
                    <Text data-layer="0855b938-1b65-44d1-be90-e4e1eff5e2e9" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel42cf407f2_xInputTexteb1435c5}>Medicine</Text>
                </View>
                <View data-layer="8a083c7d-4658-4dc2-9c91-c8f893d99e24" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel3}>
                    <View data-layer="51c543a0-6d95-4d52-9166-faee52a2a779" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel3_group11a2114399}>
                        <View data-layer="2fea6a53-3e4b-4c8c-9cad-b16b61e54793" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel3_group11a2114399_xContainerLColorc2b4f7c3}></View>
                    </View>
                    <Text data-layer="4d5e0bd3-e094-4464-a7f2-9da579019809" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel3_xInputTextecdc9711}>Doctor</Text>
                </View>
                <View data-layer="92941061-fb6c-4c2a-a2f0-e8fcd7758457" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel2}>
                    <View data-layer="3b6746a1-035a-46f5-ab3d-521736bddad3" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel2_group11cb262dc0}>
                        <View data-layer="9a645d11-c760-4d64-a998-5865204baff5" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel2_group11cb262dc0_xContainerLColordc2e6bec}></View>
                    </View>
                    <Text data-layer="6a33ac19-d7ed-4739-8aba-2b5838bb7251" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel2_xInputText5c2d84ab}>Date filled</Text>
                </View>
                <View data-layer="f472c03c-eef3-484d-b214-1e60760c3ebc" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel4}>
                    <View data-layer="227d820e-e36b-406c-96ed-f8f0864ee278" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel4_group11}>
                        <View data-layer="bfb749f4-7c06-460a-bc2a-14ed939f7c77" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel4_group11_xContainerLColorc8cc8cd7}></View>
                    </View>
                    <Text data-layer="7033735d-d339-4be6-87dd-c2b1ba217688" style={styles.reconcilelist1_bodycontainer_listlabelcontainer_listlabel4_xInputText85c3b88c}>Refills left</Text>
                </View>
            </View>
            <View data-layer="a954c9e8-51ac-4395-992e-1c3b5d2da13f" style={styles.reconcilelist1_bodycontainer_listitemcontainer}>
                <View data-layer="0b7ae575-1c02-4386-9ca9-254ff3c0f603" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem2}>
                    <View data-layer="382f135d-a73e-419d-9b54-f6e7e2884977" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem2_xContainerLColor8d2393e3}></View>
                    <Text data-layer="3b1ca3d8-7403-4119-ade0-a82dd07c5e6a" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem2_xInputTextee99c2e7}>mm/dd/yyyy</Text>
                </View>
                <View data-layer="b1a0ec19-f444-4827-ba02-5f5392e3537d" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem1}>
                    <View data-layer="568abb12-c929-40a5-b952-9c5d906ff530" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem1_group1}>
                        <View data-layer="62a1cfe5-b836-42c4-ac2c-453e89d8c751" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem1_group1_xContainerLColorc0298710}></View>
                    </View>
                    <View data-layer="94bf137f-3a0b-468e-bb71-198347f4a1ec" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem1_group26}>
                        <Text data-layer="589e07cf-d9d8-4098-ab3d-7e1f07d76b20" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem1_group26_xInputTextf56aa0f6}>medicine</Text>
                    </View>
                </View>
                <View data-layer="f169dc94-e01e-4e32-aebc-8c2dbc0ac865" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer}>
                    <View data-layer="35ddee3d-1494-449d-9157-d7ad74c6036d" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17}>
                        <View data-layer="e8838411-a724-493f-b59a-52f98878e90a" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914}>
                            <View data-layer="cf26e3a1-0d0c-487a-8524-197e88061bd9" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791}>
                                <View data-layer="e26532fd-9729-4002-9465-02c56b7a9e60" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa}>
                                    <View data-layer="229bb956-cab7-4d86-884f-106d2a08822e" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa_shadow498042a9}>
                                        <View data-layer="58ce56c2-58b5-4d51-9953-f8f48f85197f" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa_shadow498042a9_rectangle1fa7f7c7}></View>
                                        <View data-layer="b7aefc6a-cc2c-40db-a636-50e7330c3fd1" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa_shadow498042a9_rectanglebd24067f}></View>
                                        <View data-layer="f087192a-eafe-469f-a1d6-231a25249378" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa_shadow498042a9_rectangle17b046d2}></View>
                                    </View>
                                </View>
                                <View data-layer="47f44b73-dccd-42b3-a978-d3e54bf99d74" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_xColor5f9e2925}></View>
                                <View data-layer="580bbbc9-8269-4d3c-b1f0-ba7ac28be66f" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_xStates10d05b67}>
                                    <View data-layer="aee89303-b48d-482e-aad0-f088c5d71a34" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_xStates10d05b67_stateslightPrimaryContainer100overlay3d5dd595}></View>
                                </View>
                            </View>
                        </View>
                        <ReactImage data-layer="89d644f9-bd8d-4b34-8a27-5666aca5eb04" source={require('./assets/baselineeditwhite24.png')} style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_baselineeditwhite24} />
                    </View>
                    <View data-layer="4e1db82a-f271-4fbb-816d-f278aaaaec37" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18}>
                        <View data-layer="1dba02e8-7886-4aa7-8fd2-378d7d47876c" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled}>
                            <View data-layer="4a7536b6-588e-416c-8030-2be75e5d59fd" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container}>
                                <View data-layer="e781e61a-57e4-4709-b9c0-9a898574679f" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp}>
                                    <View data-layer="e6489938-16b8-43e9-a15e-1e84da28cb49" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow}>
                                        <View data-layer="717924b1-e240-4eb8-b124-9553a151ee51" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow_rectangle3e46d886}></View>
                                        <View data-layer="ed6a9eaf-9cc9-45a8-9c06-df57b414abbd" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow_rectangleb1b6fcc5}></View>
                                        <View data-layer="d27e6fb7-c1e0-4d32-a562-0e9053213d10" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow_rectangle}></View>
                                    </View>
                                </View>
                                <View data-layer="6e3acbee-8916-416d-90e0-a67a118f73ac" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_xColor}></View>
                                <View data-layer="4511ee32-7a90-421b-8ac2-2dbf5eeded0d" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_xStates}>
                                    <View data-layer="8925071b-41bb-4bef-9fae-c6c5fec62fcd" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_xStates_group16}>
                                        <View data-layer="e703329a-7d8f-4ee0-88e9-bb9a293c18fb" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_xStates_group16_stateslightPrimaryContainer100overlay}></View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <ReactImage data-layer="a2111408-b034-4c2c-ae21-2fd39d47f33d" source={require('./assets/baselinedeletewhite24.png')} style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_baselinedeletewhite24} />
                    </View>
                </View>
                <View data-layer="ff0cff28-b991-47fc-baeb-bfde1a4cf6c9" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem4}>
                    <View data-layer="5b8ccd12-3158-4191-8158-90d126449325" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem4_xContainerLColor222d666e}></View>
                    <Text data-layer="3acafbe3-c1df-4dd6-8cdd-661f50dccf0b" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem4_xInputText482d5f3d}>mm/dd/yyyy</Text>
                </View>
                <View data-layer="050e6c57-f307-41f2-8ce0-de65265c69ae" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem3}>
                    <View data-layer="f81387d7-d735-410e-a32a-1e9e973a9c84" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem3_xContainerLColor}></View>
                    <Text data-layer="d5ed0441-6c13-4bab-8974-0ed0b47d802a" style={styles.reconcilelist1_bodycontainer_listitemcontainer_listitem3_xInputText}>mm/dd/yyyy</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Reconcilelist1.propTypes = {

}

Reconcilelist1.defaultProps = {

}


const styles = StyleSheet.create({
  "reconcilelist1": {
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
  "reconcilelist1_bodycontainer": {
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
    "width": 703,
    "height": 56,
    "left": 4,
    "top": 84
  },
  "reconcilelist1_bodycontainer_listlabelcontainer": {
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
    "width": 605,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel42cf407f2": {
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
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel42cf407f2_xContainerLColor2e6ae361": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(56, 156, 196, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(184, 184, 184, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(184, 184, 184, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(184, 184, 184, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(184, 184, 184, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel42cf407f2_xInputTexteb1435c5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
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
    "width": 66,
    "height": 29,
    "left": 16,
    "top": 2.5
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel3": {
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
    "width": 150,
    "height": 28,
    "left": 302,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel3_group11a2114399": {
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
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel3_group11a2114399_xContainerLColorc2b4f7c3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(56, 156, 196, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(184, 184, 184, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(184, 184, 184, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(184, 184, 184, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(184, 184, 184, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel3_xInputTextecdc9711": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
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
    "width": 49,
    "height": 29,
    "left": 16,
    "top": 2.5
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel2": {
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
    "width": 150,
    "height": 28,
    "left": 152,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel2_group11cb262dc0": {
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
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel2_group11cb262dc0_xContainerLColordc2e6bec": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(56, 156, 196, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(184, 184, 184, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(184, 184, 184, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(184, 184, 184, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(184, 184, 184, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel2_xInputText5c2d84ab": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
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
    "width": 73,
    "height": 29,
    "left": 16,
    "top": 2.5
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel4": {
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
    "width": 150,
    "height": 28,
    "left": 455,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel4_group11": {
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
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel4_group11_xContainerLColorc8cc8cd7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(56, 156, 196, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(184, 184, 184, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(184, 184, 184, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(184, 184, 184, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(184, 184, 184, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listlabelcontainer_listlabel4_xInputText85c3b88c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
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
    "width": 70,
    "height": 29,
    "left": 16,
    "top": 2.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer": {
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
    "width": 703,
    "height": 28,
    "left": 0,
    "top": 28
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem2": {
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
    "width": 150,
    "height": 28,
    "left": 152,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem2_xContainerLColor8d2393e3": {
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
    "borderTopWidth": 2,
    "borderTopColor": "rgba(151, 151, 151, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(151, 151, 151, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(151, 151, 151, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(151, 151, 151, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem2_xInputTextee99c2e7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.3803921568627451)",
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
    "width": 91,
    "height": 29,
    "left": 17,
    "top": 2.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem1": {
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
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem1_group1": {
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
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem1_group1_xContainerLColorc0298710": {
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
    "borderTopWidth": 2,
    "borderTopColor": "rgba(151, 151, 151, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(151, 151, 151, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(151, 151, 151, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(151, 151, 151, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem1_group26": {
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
    "width": 65,
    "height": 21,
    "left": 32.69,
    "top": 4
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem1_group26_xInputTextf56aa0f6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.3803921568627451)",
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
    "width": 65,
    "height": 29,
    "left": 0,
    "top": -1.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer": {
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
    "width": 98,
    "height": 28,
    "left": 605,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa_shadow498042a9": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa_shadow498042a9_rectangle1fa7f7c7": {
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
    "width": 47,
    "height": 27,
    "left": -0.5,
    "top": -0.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa_shadow498042a9_rectanglebd24067f": {
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
    "width": 47,
    "height": 27,
    "left": -0.5,
    "top": -0.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_lightElevation02dpf800eafa_shadow498042a9_rectangle17b046d2": {
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
    "width": 47,
    "height": 27,
    "left": -0.5,
    "top": -0.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_xColor5f9e2925": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_xStates10d05b67": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_lightButton3ContainedaTextenabled77a09914_container4f213791_xStates10d05b67_stateslightPrimaryContainer100overlay3d5dd595": {
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
    "width": 47,
    "height": 27,
    "left": -0.5,
    "top": -0.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group17_baselineeditwhite24": {
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
    "left": 12,
    "top": 2
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18": {
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
    "width": 48,
    "height": 28,
    "left": 50,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow_rectangle3e46d886": {
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
    "width": 47,
    "height": 27,
    "left": -0.5,
    "top": -0.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow_rectangleb1b6fcc5": {
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
    "width": 47,
    "height": 27,
    "left": -0.5,
    "top": -0.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_lightElevation02dp_shadow_rectangle": {
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
    "width": 47,
    "height": 27,
    "left": -0.5,
    "top": -0.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_xColor": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_xStates": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_xStates_group16": {
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
    "width": 48,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_lightButton3ContainedaTextenabled_container_xStates_group16_stateslightPrimaryContainer100overlay": {
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
    "width": 47,
    "height": 27,
    "left": -0.5,
    "top": -0.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitembuttoncontainer_group18_baselinedeletewhite24": {
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
    "left": 11,
    "top": 2
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem4": {
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
    "width": 150,
    "height": 28,
    "left": 454,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem4_xContainerLColor222d666e": {
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
    "borderTopWidth": 2,
    "borderTopColor": "rgba(151, 151, 151, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(151, 151, 151, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(151, 151, 151, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(151, 151, 151, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem4_xInputText482d5f3d": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.3803921568627451)",
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
    "width": 91,
    "height": 29,
    "left": 17,
    "top": 2.5
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem3": {
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
    "width": 150,
    "height": 28,
    "left": 302,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem3_xContainerLColor": {
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
    "borderTopWidth": 2,
    "borderTopColor": "rgba(151, 151, 151, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(151, 151, 151, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(151, 151, 151, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(151, 151, 151, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 150,
    "height": 28,
    "left": 0,
    "top": 0
  },
  "reconcilelist1_bodycontainer_listitemcontainer_listitem3_xInputText": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.3803921568627451)",
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
    "width": 91,
    "height": 29,
    "left": 17,
    "top": 2.5
  }
});