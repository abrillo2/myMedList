//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';

//import heaader style
import slipPicEditContainerStyle from '../assets/styles/SlipPicEditContainerStyle.js'

//Header section
export default class SlipPicEditContainer extends React.Component{
    //  this.setState(...)
    render() { 
    return(
               
        <View data-layer="e4d0b7ca-2740-44bc-bbac-d1fdf594c03d" style={slipPicEditContainerStyle.editSlipcontainer}>
            <View data-layer="5f93ef9e-ee2f-45a7-b8f4-d484e816c179" style={slipPicEditContainerStyle.slipImageContainer}>
                <View data-layer="390c1433-c36f-45fa-8636-1ae2898d6b65" style={slipPicEditContainerStyle.slipImageContainerLightCardElementImage}>
                    <ReactImage data-layer="73d316f4-d9a0-4a54-be4b-dfa9a03f1efe" source={require('../assets/xImage.png')} style={slipPicEditContainerStyle.slipImage} />
                    <View data-layer="7459ee42-4b82-439d-84fa-3558199f2844" style={slipPicEditContainerStyle.editContainer}>
                    <View data-layer="f15fb70c-1800-40ad-8569-66c1b3ee8818" style={slipPicEditContainerStyle.editContainerLayer2}>
                        <View data-layer="3627a20f-0737-4a68-8400-9e439fbb2f8e" style={slipPicEditContainerStyle.editContainerLayer3}>
                            <View data-layer="f863adec-1497-43db-907c-53cc47f1df69" style={slipPicEditContainerStyle.editContainerLayer4}>
                                <View data-layer="c1c61ecb-9189-4849-9930-f5673cc0e06c" style={slipPicEditContainerStyle.editContainerElevation}>
                                    <View data-layer="6cbf58e8-f3eb-4a47-819f-7a01b64ad37c" style={slipPicEditContainerStyle.editContainerElevation_shadow}>
                                        <View data-layer="b113a46d-c46b-48f9-9f9f-c5b0f1c1ed23" style={slipPicEditContainerStyle.editContainerElevationShadowRec1}>
                                            <View data-layer="7a059ac2-d7b7-4321-b097-a79b985b0c76" style={slipPicEditContainerStyle.editContainerElevationShadowRec2}>
                                                <View data-layer="d7d84991-d8de-43aa-bda8-3851960ebcfb" style={slipPicEditContainerStyle.editContainerElevationShadowRec3}>
                                                <View data-layer="9bcca197-0dc8-48c3-a3d5-e73c2b336f94" style={slipPicEditContainerStyle.editContainerLayer4Color}></View>
                                                    <View data-layer="a7a0ace7-03ea-420f-ab56-a3b90c6f1926" style={slipPicEditContainerStyle.editContainerLayer4State}>
                                                        <View data-layer="8efa0d61-01a4-4ff5-aacf-13870f17239e" style={slipPicEditContainerStyle.editContainerLayer4StateLight}>
                                                            <ReactImage data-layer="907566bd-4771-4a19-abc9-be807a3c6e60" source={require('../assets/icons/edit_white.png')} style={slipPicEditContainerStyle.editIcon} />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        
                                        </View>
                                        
                                    </View>
                                </View>

                            </View>
                        </View>
                        
                    </View>
                </View>
                </View>
            </View>

        </View>

    )
  }
}
/**End of header section */
