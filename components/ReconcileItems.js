//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import { Bullets, InstagramLoader } from 'react-native-easy-content-loader';
//import reconcile items
import ReconcileStyle from '../assets/styles/ReconcileStyle.js';
import ListActionButton from './ListActionButton.js';
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

            content.push(< View key={index}  style={ReconcileStyle.itemTextContainer}>
                                        <Text numberOfLines={1}  style={ReconcileStyle.itemValStyle}>{elementVal}</Text>
                         </View>
                        )
          }
          if(this.props.listButton){

            content.push(
                <View style={ReconcileStyle.butonIconContainer2}>
                    <ListActionButton icon = {require('../assets/icons/edit_white.png')}/>
                    <ListActionButton icon = {require('../assets/icons/edit_white.png')}/>
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
                    <View key={rootKey} style={ReconcileStyle.listItemsContainer}>
                     {content}
                    </View>
                  )
            })
        }
        this.setState({content:content2});
        return content2

    }

    componentDidMount() {
        this.setState({data:this.props.data,
                       dataKeys: this.props.dataKeys})
     }

     componentDidUpdate(){
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