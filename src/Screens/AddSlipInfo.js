import React, {Component} from 'react';
import {FlatList,View, ScrollView} from 'react-native';
import {updateItem} from '../helpers/editItemHelper';
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
import appLabels,{appDescription, formInputLabel,appMessages} from '../../assets/static_resources/strings'

export default class AddSlipInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {

        rootKey:null,
        childKey:null,
        value:null,
        savedData:null,
        itemKey:null,
        sexChoice: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female'}],
        stateData: require("../../assets/data/states.json"),
        requiredItems:appObjects.addSlipInfoRequiredItems,
        
        updateAbleItems:null,
        opendateAppointed : false,
        opendateRefilled : false,
        openDatePicker : false,
        disabled:true,
        openModal:false,
        opacity:1,
        formData:null,
        imageData:null,
        dateAdded:new Date().toLocaleDateString("en-US"),
        spinnerOn:false
      };
  }
  /****
   * init screen
   */
  componentDidMount=()=>{
    let currentData = this.getNavData()
    if(currentData){
      this.setState({
        savedData:currentData,
        itemKey: this.props.route.params.key,
        updateAbleItems:appObjects.addSlipInfoUpdateableItems,
      })
    }else{
      this.onChangeData("medicationDetails","dateAdded", this.state.dateAdded)

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
  /*********************************
   * track drawer navigation params
   */
  getNavData = ()=>{
    let item=this.props.route.params.item
    let key = this.props.route.params.key
    if(item){
      return item[key]
    }else{
      return false
    }
  }
  /*******************************
   * parse data from navigation params
   * or return image or null
   */
  getDataCurrent =(parent,child)=>{
    let currentData = this.getNavData()
    if(currentData){
      let parentData = {...currentData[parent]}
      let result =  parentData[child] ? parentData[child] :null
      return result
    }else if(child==="imageData"){
      return this.props.route.params.imageData
    }else{
      return null
    }
  }


  /**************************
   * track pop up 
   */
  saveDataConfirmed=(data,confirmed)=>{
    console.log("confirmed ",confirmed)
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
        this.props.navigation.navigate(appLabels.homeTitle)},1000)
      
    }

  }
  /******************************
   * save/update slip info
   */
  saveData=async(data,currentData)=>{
    var date = new Date();
    var itemId =   date.getFullYear()+ ""+ date.getMonth()+ "" 
                 + date.getDate()+ ""+date.getHours()+ ""
                 + date.getMinutes()+ "" + date.getSeconds()+ "" + date.getMilliseconds()+"";

    var slipInfo = {"slipInfo":[],"slipInfoDiscontinued":[]};

      if(data == null){
        slipInfo["slipInfo"].push(
          {[itemId]:currentData}
        )
      }else{
        if(this.state.itemKey != null){
           slipInfo = updateItem(data,this.state.itemKey,currentData)
           //slipInfo["slipInfo"].push({[this.state.itemKey]:currentData})
        }else{
          data["slipInfo"].push({[itemId]:currentData})
          slipInfo = data
        }

      }
      this.setState({
        formData:slipInfo,
        openModal:true,
        opacity:0.2
      })
  }

  /**************************
   * chec if field is required
   */
  required=(child,parent)=>{
    
    let result = false;
    this.state.requiredItems.forEach(element => {
       let childKey = element[1]
       let parentKey = element[0]
       if(child == childKey && parent == parentKey){
          result =  true;
       }
    });

    return result
    
  }
  
  render() {
    return (

      this.state.spinnerOn? <Spinner message={appMessages.savingSlip}/>:
      <MyInfoCall 
                  rootKey={this.state.rootKey}
                  childKey={this.state.childKey}
                  value={this.state.value}
                  navigation={this.props.navigation}
                  requiredItems={this.state.requiredItems}
                  saveData={this.saveData}
                  savedData={this.state.savedData}
                  saveKey={"@myMedListSlipInfo"}>
            {/** Header Section */}

               <View style={{alignItems:'center',paddingLeft:15}}>
               <SlipPicEditContainer
                                    childKey={"imageData"}
                                    rootKey = {"medicationDetails"}
                                    onChangeText={this.onChangeData}
                                    inputContent={this.getDataCurrent}
                                    updateAble={this.isUpdateAble("imageData")}/>      
              </View>          
              <FlatList
                  data={slipInfoFormLabels.folds}
                  renderItem={({ item, index }) => (

                    <Fold labelTitle = {item.title}>
                      {
                        <FlatList
                         data={item.content}
                         renderItem={({ item, index }) => 

                           
                          item.group ?
                          <View style={styles.hallfInputContainer}>
                                
                                <HalfInputContainer   
                                         width={"49%"}
                                         iconName = {item.group[0].iconName?item.group[0].iconName:null}
                                         iconName2 = {item.group[0].iconName2?item.group[0].iconName2:null}
                                         func={item.group[0].func?item.group[0].func:null}
                                         inputLabel={item.group[0].inputLabel}
                                         childKey={item.group[0].childKey}
                                         rootKey ={item.group[0].rootKey}
                                         editAble={item.group[0].editAble?item.group[0].editAble:null}
                                         
                                         
                                         inputContent={this.getDataCurrent}
                                         onChangeText={this.onChangeData}
                                         loadSingleItem={this.state.loadSingleItem}
                                         updateAble={this.isUpdateAble(item.group[0].childKey)}
                                         required = {this.required}
                                      
                                      />
                                 <HalfInputContainer  width={"49%"} 
                                         width={"49%"}
                                         iconName = {item.group[1].iconName?item.group[1].iconName:null}
                                         iconName2 = {item.group[1].iconName2?item.group[1].iconName2:null}
                                         func={item.group[1].func?item.group[1].func:null}
                                         inputLabel={item.group[1].inputLabel}
                                         childKey={item.group[1].childKey}
                                         rootKey ={item.group[1].rootKey}
                                         editAble={item.group[1].editAble?item.group[1].editAble:null}
                                         
                                         
                                         inputContent={this.getDataCurrent}
                                         onChangeText={this.onChangeData}
                                         loadSingleItem={this.state.loadSingleItem}
                                         updateAble={this.isUpdateAble(item.group[1].childKey)}
                                         required = {this.required}
                                      
                                      />
                          </View>
                          :(<HalfInputContainer  
                                width={"100%"}
                                iconName = {item.iconName?item.iconName:null}
                                iconName2 = {item.iconName2?item.iconName2:null}
                                func={item.func?item.func:null}
                                inputLabel={item.inputLabel}
                                childKey={item.childKey}
                                rootKey ={item.rootKey}
                                editAble={item.editAble?item.editAble:null}
                                
                                
                                inputContent={this.getDataCurrent}
                                onChangeText={this.onChangeData}
                                loadSingleItem={this.state.loadSingleItem}
                                updateAble={this.isUpdateAble(item.childKey)}
                                required = {this.required}/>
                          )}/>}
                    </Fold>
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