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
            itemHeaderCount : 4,
            data : null,
            content : null,
            dataKeys:null,
        };
    }

    byString = (o, s) => {
        let kk = s.split("][");
        let rK = kk[0].replace('[','').replace('"','').replace('"','')
        let lK = kk[1].replace(']','').replace('"','').replace('"','')

        return (o[rK][lK]) 
    }

    //render list
    renderReconcileList(itemVal){

        let content = [];

        for (let index = 0; index < this.state.itemHeaderCount; index++) {
            let elementVal = this.byString(itemVal,this.state.dataKeys[index])

            content.push(<View  key={elementVal}  style={ReconcileStyle.listItemLabelTopContainer}>
                            <View  style={ReconcileStyle.listItemLabelInnerContainer}>
                                <View  style={ReconcileStyle.listItemLabelInnerColorContainer}>
                                  <View  style={ReconcileStyle.listItemTextContainer}>
                                    <Text  style={ReconcileStyle.listItemLText}>{elementVal}</Text>
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
        for (let index = 0; index < this.state.data.length; index++) {
            let item = this.state.data[index]
            Object.keys(item).forEach( rootKey => {
                let content = this.renderReconcileList(item[rootKey])
                content2.push(
                    <View key={rootKey} style={ReconcileStyle.listItemContainer}>
                     {content}
                    </View>
                  )
            })
        }
        /*for (let index = 0; index < this.state.data.length; index++) {
           /* Object.keys(item).forEach( rootKey => {

               let content = this.renderReconcileList(item[this.state.data[rootKey]])
                content2.push(
                  <View key={rootKey} style={ReconcileStyle.listItemContainer}>
                   {content}
                  </View>
                )
                
            });

        }*/
        this.setState({content:content2});
        return content2

    }

    componentDidMount() {
        this.setState({data:this.props.data,
                       dataKeys: this.props.dataKeys})
     }

     componentDidUpdate(){
         console.log(this.state.content)
         if(this.state.content == null){
            this.loadListofItems();
        }
     }

    render() { 

        return(
           this.state.content
        )
  }
}