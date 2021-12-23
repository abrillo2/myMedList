//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import { Bullets, InstagramLoader } from 'react-native-easy-content-loader';
//import reconcile items
import ReconcileStyle from '../assets/styles/ReconcileStyle.js';

//reconcileitems section
export default class ReconcileItems extends React.Component{
    constructor(props) {
        super(props);
        this.renderReconcileList = this.renderReconcileList.bind(this);
        this.state = {
            itemValues :["Name of Medicine", "DD/MM/YY", "Name of Doctor", "# Refills Left"],
            itemCount : Array.apply(null, {length: 100}).map(Function.call, Number),
            content : []
        };
    }

    //render list
    renderReconcileList(){

        let content = [];

        for (let item of this.state.itemValues) {
            content.push(<View  key={item}  style={ReconcileStyle.listItemLabelTopContainer}>
                            <View  style={ReconcileStyle.listItemLabelInnerContainer}>
                                <View  style={ReconcileStyle.listItemLabelInnerColorContainer}>
                                  <View  style={ReconcileStyle.listItemTextContainer}>
                                    <Text  style={ReconcileStyle.listItemLText}>{item}</Text>
                                </View>
                                </View>
                            </View>
      
                        </View>)
          }

          if(this.props.listButton){

            content.push(
                <View  style={ReconcileStyle.listItemButtonContainer}>
                                          <View  style={ReconcileStyle.butonIconContainer}>
                                              <View  style={ReconcileStyle.butonIconContainer2}>
                                                  <View  style={ReconcileStyle.butonIconContainer3}>
                                                      <View  style={ReconcileStyle.butonIconContainer3Elevation}>
                                                          <View  style={ReconcileStyle.butonIconContainer3ElevationShadow}>
                                                              <View  style={ReconcileStyle.butonIconContainer3ElevationShadowBox1}></View>
                                                              <View  style={ReconcileStyle.butonIconContainer3ElevationShadowBox2}></View>
                                                              <View  style={ReconcileStyle.butonIconContainer3ElevationShadowBox3}></View>
                                                          </View>
                                                      </View>
                                                      <View  style={ReconcileStyle.buttonIconContainerLevel1}>
                                                        <View  style={ReconcileStyle.buttonIconContainerLevel2}>
                                                            <View  style={ReconcileStyle.buttonIconContainerLevel3}>
                                                            <ReactImage  source={require('../assets/icons/edit_white.png')} style={ReconcileStyle.editIcon} />
                                                            </View>
                                                        </View>
                                                      </View>
          
                                                  </View>
                                              </View>
                                              
                                          </View>
                                          <View  style={ReconcileStyle.butonIconContainer}>
                                              <View  style={ReconcileStyle.butonIconContainer2}>
                                                  <View  style={ReconcileStyle.butonIconContainer3}>
                                                      <View  style={ReconcileStyle.butonIconContainer3Elevation}>
                                                          <View  style={ReconcileStyle.butonIconContainer3ElevationShadow}>
                                                              <View  style={ReconcileStyle.butonIconContainer3ElevationShadowBox1}></View>
                                                              <View  style={ReconcileStyle.butonIconContainer3ElevationShadowBox2}></View>
                                                              <View  style={ReconcileStyle.butonIconContainer3ElevationShadowBox3}></View>
                                                          </View>
                                                      </View>
                                                      <View  style={ReconcileStyle.buttonIconContainerLevel1}>
                                                        <View  style={ReconcileStyle.buttonIconContainerLevel2}>
                                                            <View  style={ReconcileStyle.buttonIconContainerLevel3}>
                                                            <ReactImage  source={require('../assets/icons/delete_white.png')} style={ReconcileStyle.editIcon} />
                                                            </View>
                                                        </View>
                                                      </View>
          
                                                  </View>
                                            </View>
                                              
                                          </View>
                                      </View>
              )

          } 
          return content; 
    }

    loadListofItems = () =>{

        let content2 = [];
        
        let content = this.renderReconcileList()

        for (let item of this.state.itemCount) {
            content2.push(
              <View style={ReconcileStyle.listItemContainer}>
               {content}
              </View>
            )
        }
        this.setState({content:content2});

    }

    componentDidMount() {
        this.loadListofItems();
     }
    render() { 

        return(
            /*this.state.isLoaded ? this.state.content : <View  style={ReconcileStyle.listItemContainer}><Text>Loading...</Text></View>*/
            this.state.content
        )
  }
}