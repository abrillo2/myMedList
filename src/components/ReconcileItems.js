//imports
import React from 'react';
import {Text, View} from 'react-native';
//import reconcile items
import ReconcileStyle from '../../assets/styles/ReconcileStyle.js';
import ListActionButton from './ListActionButton.js';
//reconcileitems section
export default class ReconcileItems extends React.Component{
    constructor(props) {
        super(props);
        this.renderReconcileList = this.renderReconcileList.bind(this);
        this.state = {
            itemHeaderCount : this.props.itemlen,
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
    renderReconcileList(itemVal,rootKey){

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
                    <ListActionButton icon = {"edit"}
                                      onPress={this.props.listButtonPressed}
                                      action={"edit"}
                                      itemId={rootKey}/>
                    <ListActionButton icon = {"delete"}
                                      onPress={this.props.listButtonPressed}
                                      action={"delete"}
                                      itemId={rootKey}/>
                </View>
                
              )

          } 
          return content; 
    }

    loadListofItems = () =>{

        let content2 = [];
        //for sorting
        let toBesorted = [];
        for (let index = 0; index < this.state.data.length; index++) {
            let item = this.state.data[index]
            Object.keys(item).forEach( rootKey => {
                toBesorted.push({...item[rootKey],rootKey:rootKey})
            })
        }
        let sortIndex = Number(this.props.sortIndex);
        toBesorted.sort( this.compare );
        let sorted = toBesorted;

        for (let index = 0; index < sorted.length; index++) {
            const element = sorted[index];
            let content = this.renderReconcileList(element,element["rootKey"])
            content2.push(
                    <View key={element["rootKey"]} style={ReconcileStyle.listItemsContainer}>
                     {content}
                    </View>
            )

        }
        console.log("sort index",this.props.sortIndex)
        this.setState({content:content2});
        return content2

    }

    compare=( a, b )=>{
        var vala = this.byString(a, this.state.dataKeys[Number(this.props.sortIndex)]); 
        var valb = this.byString(b, this.state.dataKeys[Number(this.props.sortIndex)]);
        if ( vala < valb ){
          return -1;
        }
        if ( vala > valb ){
          return 1;
        }
        return 0;
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