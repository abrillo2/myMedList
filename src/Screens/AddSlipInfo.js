import React, {Component} from 'react';
import {FlatList,View} from 'react-native';
import { saveData as saveDataAsync} from '../helpers/AsyncHelper';

//components import
import HalfInputContainer from '../components/HalfInputContainer';
import Fold from '../callBacks/Fold';
import MyInfoCall from '../callBacks/MyInfoCall';
import SlipPicEditContainer from '../components/SlipPicEditContainer';
import Spinner from '../helpers/Spinner'
//styles
import styles from '../../assets/styles/AddSlipInfoStyle'
//import notification modal
import  Notification from '../hooks/Notification'
//static resources
import appObjects,{slipInfoFormLabels} from '../../assets/static_resources/objects'
import appLabels,{appDescription} from '../../assets/static_resources/strings'
//helpers
import { handelOption } from '../helpers/UpdateSlipHelper';
import HeaderSection from '../components/HeaderSection';
import {getNavData,getCurrentData,prepSaveData,required} from '../helpers/AddSlipDetailsHelper'


export default class AddSlipInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {

        rootKey:null,
        childKey:null,
        value:null,
        savedData:null,
        itemKey:null,
        
        openModal:false,
        opacity:1,
        formData:null,
        imageData:null,
        dateAdded:new Date().toLocaleDateString("en-US"),

        spinnerOn:false,
        refresh:false,

        requiredItems:appObjects.addSlipInfoRequiredItems
      };
  }
  /****
   * init screen
   */
  componentDidMount=()=>{
    let currentData = getNavData(this.props.route)

   
    if(currentData){
      this.setState({
        savedData:currentData,
        itemKey: this.props.route.params.key,
        updateAbleItems:appObjects.addSlipInfoUpdateableItems,
      })
      this.props.navigation.setOptions({
        header:() => {
          return <HeaderSection navigation={this.props.navigation} Title={appLabels.addSlipTitle} 
          onPressOption={this.handelOptionMenu}
                />;
        },
      });
    }else{
      this.onChangeData("medicationDetails","dateAdded", this.state.dateAdded)

    }
  }

  /**************
   * check if refresh was recently called
   */

  stopRefresh=()=>{

       if(this.state.refresh){
         this.setState({
           refresh:false
         })
       }

  }

  /**********************
   * 
   * handel option
   */
  handelOptionMenu=async(item)=>{
    this.setState({
    spinnerOn:true
    })
    let response = await handelOption(item, this.props.navigation,this.state.itemKey,"@myMedListSlipInfo")
    
    if(response != null){
      console.log("response is ", response.data[response.key])
      this.setState({
        savedData:response.data[response.key],
        itemKey:response.key,
        spinnerOn:false,
        refresh:true,
        rootKey:null,
        childKey:null,
        value:null,
      })
    }
  
  }

  /***************************
   * check updateAble items
   */

  isUpdateAble = (childKey)=>{ 
    if(this.state.updateAbleItems){
      return this.state.updateAbleItems.indexOf(childKey) !== -1;
    }else{
      return true
    }  
  }

  /*************************************
   * track form input value change
   */
  onChangeData=(rootKey,childKey, value)=>{
    this.setState({
      rootKey,
      childKey,
      value
    })
  }
  /*******************************
   * parse data from navigation params
   * or return image or null
   */
  getDataCurrent =(parent,child)=>{
    return getCurrentData(parent,child,this.props.route)
  }
  /**************************
   * track pop up 
   */
  saveDataConfirmed=(data,confirmed)=>{
    this.setState({
      openModal:false,
      opacity:1
    })
    if(confirmed){

      this.setState({
        spinnerOn:true
      })
      saveDataAsync(this.state.formData,"@myMedListSlipInfo")

      setTimeout(()=>{
        this.props.navigation.navigate(!confirmed ?appLabels.reconcileTitle: appLabels.homeTitle)},1000)}

  }
  /******************************
   * save/update slip info
   */
  saveData=(data,currentData)=>{

    var slipInfo = prepSaveData(data,currentData,this.state.itemKey);
    this.setState({
        formData:slipInfo,
        openModal:true,
        opacity:0.2
      })
  }

  render() {

    let halfList = []
    return (

      this.state.spinnerOn? <Spinner/>:
      <MyInfoCall 
                  rootKey={this.state.rootKey}
                  childKey={this.state.childKey}
                  value={this.state.value}
                  navigation={this.props.navigation}
                  requiredItems={this.state.requiredItems}
                  saveData={this.saveData}
                  savedData={this.state.savedData}
                  saveKey={"@myMedListSlipInfo"}

                  refresh={this.state.refresh}
                  stopRefresh={this.stopRefresh}>


      <FlatList
        data={[1]}
        removeClippedSubviews={false}
        extraData={this.state.refresh}
        renderItem={({ item, index }) => (    
          
          
        <View>
                 <SlipPicEditContainer
          childKey={"imageData"}
          rootKey = {"medicationDetails"}
          onChangeText={this.onChangeData}
          inputContent={this.getDataCurrent}
          loadKey={this.props.route.params.key}
          updateAble={this.isUpdateAble("imageData")}/> 

              <FlatList
                  data={slipInfoFormLabels.folds}
                  extraData={this.state.itemKey}
                  removeClippedSubviews={false}
                  renderItem={({ item, index }) => (

                    <Fold labelTitle = {item.title}>
                      {
                        <FlatList
                         data={item.content}
                         extraData={this.state.itemKey}
                         renderItem={({ item, index }) => 

                           
                          item.group ?
                          
                         
                          item.group.map((item,index)=>{

                              

                              let content =   <HalfInputContainer  
                                width={"49%"}
                                iconName = {item.iconName?item.iconName:null}
                                iconName2 = {item.iconName2?item.iconName2:null}
                                func={item.func?item.func:null}
                                inputLabel={item.inputLabel}
                                childKey={item.childKey}
                                rootKey ={item.rootKey}
                                editAble={item.editAble!=null?item.editAble:null}
                                
                                
                                inputContent={this.getDataCurrent}
                                onChangeText={this.onChangeData}
                                loadSingleItem={this.state.loadSingleItem}
                                updateAble={this.isUpdateAble(item.childKey)}
                                required = {required}/>
                                
                                halfList.push(content)
                                console.log(halfList.length)
                                if(halfList.length >= 2){
                                  let listCp = [...halfList]
                                  halfList = []
                                 return (<View style={styles.hallfInputContainer}>
                                                {listCp}
                                       </View>)

                                  
                                }

                              })
                          :( <View style={styles.hallfInputContainer}><HalfInputContainer  
                                width={"100%"}
                                iconName = {item.iconName?item.iconName:null}
                                iconName2 = {item.iconName2?item.iconName2:null}
                                func={item.func?item.func:null}
                                inputLabel={item.inputLabel}
                                childKey={item.childKey}
                                rootKey ={item.rootKey}
                                editAble={item.editAble!=null?item.editAble:null}
                                
                                
                                inputContent={this.getDataCurrent}
                                onChangeText={this.onChangeData}
                                loadSingleItem={this.state.loadSingleItem}
                                updateAble={this.isUpdateAble(item.childKey)}
                                required = {required}/></View>
                          )}/>}
                    </Fold>
                  )}/></View>
    )}/>
              <Notification
                modalVisible={this.state.openModal}
                onPress={this.saveDataConfirmed}
                pTitle={appDescription.addSlipInfoSaveDescription}
                lTitle={appLabels.yes}
                rTitle={appLabels.no}
                showTwin={true}
            /> 
      </MyInfoCall>
      );
  }
}