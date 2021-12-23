import React, {useEffect,Suspense} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Bullets, InstagramLoader } from 'react-native-easy-content-loader';
//import header section
import  HeaderSection  from '../components/HeaderSection';
//import body style
import ReconcileStyle from '../assets/styles/ReconcileStyle';

export default function Reconcilelist() {


    const state = {
        itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"]
      };

    
    const ScrollabelItemContainer= React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
          () => import("../components/ScrollabelItemContainer")
        );
    });

    useEffect(() => {
        return () => {
            ScrollabelItemContainer = null;    
        }
      }, []);

    return (
    <View data-layer="7efa9ff4-a5ac-46ee-9a8f-90047aa52600" style={ReconcileStyle.reconcilelist}>
       
        {/** APP BAR View begins */}
        <HeaderSection Title={"RECONICLE"}/>
        {/** APP BAR View ends */}

        {/** RECONCILE list view begins */}

        <Suspense fallback={<Bullets active listSize={10} />}>
                  <ScrollabelItemContainer  listButton={true}/>
        </Suspense>

    </View>
    );
  
}

