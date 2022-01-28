import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from '../hooks/Icon';
//import body style
import ReconcileStyle from '../../assets/styles/ReconcileStyle';
//import reconcile items
import ReconcileItems from '../components/ReconcileItems';

export default class ScrollabelItemContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
        itemLabels : this.props.itemLabels,
        isLoaded: false,
        sortIndex: 0,
      };
  }

  render() {
    return (
        <View horizontal={true}  style={ReconcileStyle.scrollr}>
            
                     <ReconcileItems listButton={this.props.listButton}
                                     sortIndex={this.props.sortIndex}
                                     data={this.props.data}
                                     dataKeys={this.props.dataKeys}
                                     itemlen={this.props.itemlen}
                                     listButtonPressed={this.props.listButtonPressed}
                                     itemLabels={this.props.itemLabels}
                                     onPress={this.props.onPress}/>
                      </View>
    );
  }
}
