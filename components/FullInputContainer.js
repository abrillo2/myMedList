//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';

//import heaader style
import styles from '../assets/styles/FullInputStyle.js'

//Header section
export default class FullInputContainer extends React.Component{
    //  this.setState(...)
    render() { 
    return(
               
        <View data-layer="0c2eef8d-3923-43e3-a4a4-ef437d136fe0" style={styles.fullInputContainer}>
            <View data-layer="beeab6dc-c9c7-45e0-bf4d-59c73a4b8457" style={styles.fullInputContainerElevation}>
                <View data-layer="b6115b71-74fa-41e7-a2b5-c69a147294e8" style={styles.fullInputContainerElevationRec1}>
                <View data-layer="77862100-b316-45a5-af7b-2eec7dce09bc" style={styles.fullInputContainerColor}>
                <View data-layer="71ef25a5-656b-4884-b395-e0a01be66c60" style={styles.fullInputContainerStates}>
                        <View data-layer="8376f954-f7b8-4ca7-95b2-52231ca7e1f6" style={styles.fullInputContainerStates2}>
                        <Text data-layer="e793267b-94a7-49ba-904d-5ad71848683d" style={styles.FullInputLabel}>Name of Medicine *</Text>
                        <TextInput data-layer="18f458f0-7447-45e4-a473-acf944de2d43" style={styles.fullInputInput}>Name of medicine</TextInput>
                        </View>
                    
                    </View>
                </View>

                </View>
            </View>
            <View data-layer="b62817eb-33a7-498f-b774-853c13024ed7" style={styles.fullInputContainerStatesIndicator}></View>
        </View>


    )
  }
}
/**End of header section */