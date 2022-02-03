//imports
import React from 'react';
import {View} from 'react-native';
import {Image as ReactImage} from 'react-native';
import ListActionButton from './ListActionButton.js';
import {openGalery} from '../helpers/slipPhotohelper.js';

//import heaader style
import slipPicEditContainerStyle from '../../assets/styles/SlipPicEditContainerStyle.js'

//Header section
export default class SlipPicEditContainer extends React.Component{
    //  this.setState(...)
    constructor(props) {
      super(props);
      this.state = {
        imageData:null
      };
    }

    setValue=(imageData)=>{
      this.setState({
        imageData
      })
      this.props.onChangeText(this.props.rootKey,this.props.childKey,imageData)
    }

    editSlipImg=async()=>{
       let val = await openGalery()
       if(val.assets){
          this.setValue(val.assets[0])
       }
       
    }

    async componentDidMount(){
      let imageData = await this.props.inputContent(this.props.rootKey,this.props.childKey)
      
      let loadedData = (this.props.loadKey == null)
      if(imageData && loadedData){
        this.props.onChangeText(this.props.rootKey,this.props.childKey,imageData)
      }
      this.setState({
        imageData
      })
    }

    render() {
    return(
               
           <View  pointerEvents={this.props.updateAble ? 'auto' : 'none'} 
           style={[slipPicEditContainerStyle.editPicContainer,{opacity:this.props.updateAble?1:0.6}]}>


             {this.state.imageData? <ReactImage  source={{uri:this.state.imageData.uri}} style={slipPicEditContainerStyle.slipImage}/>         
              :null}
              <View  style={slipPicEditContainerStyle.editButton}>         
              <ListActionButton icon = {"edit"}
                                      onPress={this.editSlipImg}
                                      />              
              </View>
           </View>

    )
  }
}
/**End of header section */
