import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import header section
import  HeaderSection  from './components/HeaderSection';
//import body style
import ReconcileStyle from './assets/styles/ReconcileStyle';
//import reconcile items
import ReconcileItems from './components/ReconcileItems';

export default class Reconcilelist extends Component {

  constructor(props) {
      super(props);
      this.state = {
        itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"]
      };
  }
  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {

    return (
    <View data-layer="7efa9ff4-a5ac-46ee-9a8f-90047aa52600" style={ReconcileStyle.reconcilelist}>
       
        {/** APP BAR View begins */}
        <HeaderSection />
        {/** APP BAR View ends */}

        {/** RECONCILE list view begins */}

        <ScrollView horizontal={true}  style={ReconcileStyle.scroll}>
            <View data-layer="fe8a5532-602b-4a4f-8ef9-29385f267300" style={ReconcileStyle.reconcilelist1_bodycontainer} >
                <View data-layer="a693814e-7cbd-4622-9173-f2d631cd4b75" style={ReconcileStyle.listlabelcontainer}>
                    
                    {this.state.itemLabels.map((item,index)=>{
                        return <View  key={item.key} data-layer="1e582648-322c-4992-9b6e-566399c93165" style={ReconcileStyle.labelTopContainer}>
                                <View data-layer="b3c27851-64c8-420d-8546-a299c306f151" style={ReconcileStyle.labelContainer}>
                                  <Text data-layer="0855b938-1b65-44d1-be90-e4e1eff5e2e9" style={ReconcileStyle.labelTextStyle}>{item}</Text>
                                </View>
                              </View>
                    })}

                </View>

                {/** reconcile list item value container begins here */}
                
                <ScrollView horizontal ={false} style={ReconcileStyle.scroll2}>
                      <ReconcileItems listButton={true}/>
                </ScrollView>
                {/** reconcile list item value container ends here */}
                
            </View>
            {/** RECONCILE list view ends */}
          
        </ScrollView>

    </View>
    );
  }
}

Reconcilelist.propTypes = {

}

Reconcilelist.defaultProps = {

}

function hrp(value){
  return value*100 / 736;
}

function wrp(value){
  return value*100 / 414;
}


