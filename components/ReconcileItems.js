//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';

//import reconcile items
import ReconcileStyle from '../assets/styles/ReconcileStyle.js';

//reconcileitems section
export default class ReconcileItems extends React.Component{
    constructor(props) {
        super(props);
        this.renderReconcileList = this.renderReconcileList.bind(this);
        this.state = {
            itemValues :["Name of Medicine", "DD/MM/YY", "Name of Doctor", "# Refills Left"],
            itemCount : Array.apply(null, {length: 10}).map(Function.call, Number),
            content : [],
        };
    }

    //render list
    renderReconcileList(){

        let content = [];
        let content2 = [];

        for (let item of this.state.itemValues) {
            content.push(<View  key={item} data-layer="b1a0ec19-f444-4827-ba02-5f5392e3537d" style={ReconcileStyle.listItemLabelTopContainer}>
                            <View data-layer="568abb12-c929-40a5-b952-9c5d906ff530" style={ReconcileStyle.listItemLabelInnerContainer}>
                                <View data-layer="62a1cfe5-b836-42c4-ac2c-453e89d8c751" style={ReconcileStyle.listItemLabelInnerColorContainer}>
                                  <View data-layer="94bf137f-3a0b-468e-bb71-198347f4a1ec" style={ReconcileStyle.listItemTextContainer}>
                                    <Text data-layer="589e07cf-d9d8-4098-ab3d-7e1f07d76b20" style={ReconcileStyle.listItemLText}>{item}</Text>
                                </View>
                                </View>
                            </View>
      
                        </View>)
          }

          if(this.props.listButton){

            content.push(
                <View data-layer="f169dc94-e01e-4e32-aebc-8c2dbc0ac865" style={ReconcileStyle.listItemButtonContainer}>
                                          <View data-layer="35ddee3d-1494-449d-9157-d7ad74c6036d" style={ReconcileStyle.butonIconContainer}>
                                              <View data-layer="e8838411-a724-493f-b59a-52f98878e90a" style={ReconcileStyle.butonIconContainer2}>
                                                  <View data-layer="cf26e3a1-0d0c-487a-8524-197e88061bd9" style={ReconcileStyle.butonIconContainer3}>
                                                      <View data-layer="e26532fd-9729-4002-9465-02c56b7a9e60" style={ReconcileStyle.butonIconContainer3Elevation}>
                                                          <View data-layer="229bb956-cab7-4d86-884f-106d2a08822e" style={ReconcileStyle.butonIconContainer3ElevationShadow}>
                                                              <View data-layer="58ce56c2-58b5-4d51-9953-f8f48f85197f" style={ReconcileStyle.butonIconContainer3ElevationShadowBox1}></View>
                                                              <View data-layer="b7aefc6a-cc2c-40db-a636-50e7330c3fd1" style={ReconcileStyle.butonIconContainer3ElevationShadowBox2}></View>
                                                              <View data-layer="f087192a-eafe-469f-a1d6-231a25249378" style={ReconcileStyle.butonIconContainer3ElevationShadowBox3}></View>
                                                          </View>
                                                      </View>
                                                      <View data-layer="47f44b73-dccd-42b3-a978-d3e54bf99d74" style={ReconcileStyle.buttonIconContainerLevel1}>
                                                        <View data-layer="580bbbc9-8269-4d3c-b1f0-ba7ac28be66f" style={ReconcileStyle.buttonIconContainerLevel2}>
                                                            <View data-layer="aee89303-b48d-482e-aad0-f088c5d71a34" style={ReconcileStyle.buttonIconContainerLevel3}>
                                                            <ReactImage data-layer="89d644f9-bd8d-4b34-8a27-5666aca5eb04" source={require('../assets/icons/edit_white.png')} style={ReconcileStyle.editIcon} />
                                                            </View>
                                                        </View>
                                                      </View>
          
                                                  </View>
                                              </View>
                                              
                                          </View>
                                          <View data-layer="35ddee3d-1494-449d-9157-d7ad74c6036d" style={ReconcileStyle.butonIconContainer}>
                                              <View data-layer="e8838411-a724-493f-b59a-52f98878e90a" style={ReconcileStyle.butonIconContainer2}>
                                                  <View data-layer="cf26e3a1-0d0c-487a-8524-197e88061bd9" style={ReconcileStyle.butonIconContainer3}>
                                                      <View data-layer="e26532fd-9729-4002-9465-02c56b7a9e60" style={ReconcileStyle.butonIconContainer3Elevation}>
                                                          <View data-layer="229bb956-cab7-4d86-884f-106d2a08822e" style={ReconcileStyle.butonIconContainer3ElevationShadow}>
                                                              <View data-layer="58ce56c2-58b5-4d51-9953-f8f48f85197f" style={ReconcileStyle.butonIconContainer3ElevationShadowBox1}></View>
                                                              <View data-layer="b7aefc6a-cc2c-40db-a636-50e7330c3fd1" style={ReconcileStyle.butonIconContainer3ElevationShadowBox2}></View>
                                                              <View data-layer="f087192a-eafe-469f-a1d6-231a25249378" style={ReconcileStyle.butonIconContainer3ElevationShadowBox3}></View>
                                                          </View>
                                                      </View>
                                                      <View data-layer="47f44b73-dccd-42b3-a978-d3e54bf99d74" style={ReconcileStyle.buttonIconContainerLevel1}>
                                                        <View data-layer="580bbbc9-8269-4d3c-b1f0-ba7ac28be66f" style={ReconcileStyle.buttonIconContainerLevel2}>
                                                            <View data-layer="aee89303-b48d-482e-aad0-f088c5d71a34" style={ReconcileStyle.buttonIconContainerLevel3}>
                                                            <ReactImage data-layer="89d644f9-bd8d-4b34-8a27-5666aca5eb04" source={require('../assets/icons/delete_white.png')} style={ReconcileStyle.editIcon} />
                                                            </View>
                                                        </View>
                                                      </View>
          
                                                  </View>
                                            </View>
                                              
                                          </View>
                                      </View>
              )

          }  
          for (let item of this.state.itemCount) {
              content2.push(
                <View data-layer="a954c9e8-51ac-4395-992e-1c3b5d2da13f" style={ReconcileStyle.listItemContainer}>
                 {content}
                </View>
              )
          }
          this.setState({content:content2})
    }

    componentDidMount() {
        this.renderReconcileList()
     }

    render() { 

        return(
            this.state.content
        )
  }
}