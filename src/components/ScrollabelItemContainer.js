import React, {Component} from 'react';
//import body style
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
            
                     <ReconcileItems listButton={this.props.listButton}
                                     sortIndex={this.props.sortIndex}
                                     data={this.props.data}
                                     dataKeys={this.props.dataKeys}
                                     itemlen={this.props.itemlen}
                                     listButtonPressed={this.props.listButtonPressed}
                                     itemLabels={this.props.itemLabels}
                                     onPress={this.props.onPress}
                                     refresh={this.props.refresh}/>
          
    )
  }
}
