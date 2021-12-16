//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';

//import heaader style
import styles from '../assets/styles/TwinButtonStyle';

//Header section
export default class TwinButtonContainer extends React.Component{
    //  this.setState(...)
    render() { 
    return(
               
            <View data-layer="8725118a-9934-4cc2-92c1-0a3d563d9561" style={styles.twoButtoncontainer}>
                    <View data-layer="9746c7c1-ca73-475d-8d05-e9c435fe3f74" style={styles.rightButton}>
                        <View data-layer="677cc46b-5af3-4454-a69a-32ab3e5530f8" style={styles.rightButtonlayer1}>
                            <View data-layer="32029099-4aac-4211-944c-490a86472107" style={styles.rightButtonlayer2}>
                                <View data-layer="130d92cd-ee58-4de5-8250-d070349b67e5" style={styles.rightButtonElevation}>
                                    <View data-layer="28ff2484-9891-4168-a30c-1139051282a6" style={styles.rightButtonElevationShadow}>
                                        <View data-layer="eac5bbb3-898d-47af-96e8-1b50660386fd" style={styles.rightButtonElevationShadowRectangle1}></View>
                                        <View data-layer="91431bdf-0e97-4c57-82a8-b1002e0ec73a" style={styles.rightButtonElevationShadowRectangle2}></View>
                                        <View data-layer="f2a25e59-318b-49ce-94b1-807cfb471f51" style={styles.rightButtonElevationShadowRectangle3}></View>
                                    </View>
                                </View>
                                <View data-layer="2b3ab17b-96b1-4fbc-8663-d9a9d39eb39f" style={styles.rightButtonlayer2XColor}></View>
                                <View data-layer="c0c189cf-7560-4b9b-a24a-7ce089ce1173" style={styles.rightButtonlayer2XStates}>
                                    <View data-layer="2845691d-9301-4ac8-a7a2-b7a40deeb78a" style={styles.rightButtonlayer2XStatesStateslightPrimaryContainer}></View>
                                </View>
                            </View>
                        </View>
                        <Text data-layer="fa69db84-efe8-4ba5-9307-a52877ec5f0e" style={styles.rightButtonLabel}>{this.props.rLabel}</Text>
                    </View>
                    <View data-layer="9746c7c1-ca73-475d-8d05-e9c435fe3f74" style={styles.rightButton}>
                        <View data-layer="677cc46b-5af3-4454-a69a-32ab3e5530f8" style={styles.rightButtonlayer1}>
                            <View data-layer="32029099-4aac-4211-944c-490a86472107" style={styles.rightButtonlayer2}>
                                <View data-layer="130d92cd-ee58-4de5-8250-d070349b67e5" style={styles.rightButtonElevation}>
                                    <View data-layer="28ff2484-9891-4168-a30c-1139051282a6" style={styles.rightButtonElevationShadow}>
                                        <View data-layer="eac5bbb3-898d-47af-96e8-1b50660386fd" style={styles.rightButtonElevationShadowRectangle1}></View>
                                        <View data-layer="91431bdf-0e97-4c57-82a8-b1002e0ec73a" style={styles.rightButtonElevationShadowRectangle2}></View>
                                        <View data-layer="f2a25e59-318b-49ce-94b1-807cfb471f51" style={styles.rightButtonElevationShadowRectangle3}></View>
                                    </View>
                                </View>
                                <View data-layer="2b3ab17b-96b1-4fbc-8663-d9a9d39eb39f" style={styles.rightButtonlayer2XColor}></View>
                                <View data-layer="c0c189cf-7560-4b9b-a24a-7ce089ce1173" style={styles.rightButtonlayer2XStates}>
                                    <View data-layer="2845691d-9301-4ac8-a7a2-b7a40deeb78a" style={styles.rightButtonlayer2XStatesStateslightPrimaryContainer}></View>
                                </View>
                            </View>
                        </View>
                        <Text data-layer="fa69db84-efe8-4ba5-9307-a52877ec5f0e" style={styles.rightButtonLabel}>{this.props.lLabel}</Text>
                    </View>
            </View>
    )
  }
}
/**End of header section */

