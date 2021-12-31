import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/Home';
import Share from './Screens/Share';
import Reconcilelist from './Screens/Reconcilelist';
import Addslip from './Screens/Addslip';
import Takenphoto from './Screens/Takenphoto'
import AddSlipInfo from './Screens/AddSlipInfo';
import MyInfo from './Screens/MyInfo';


//react navigation 
const Stack = createNativeStackNavigator();

function MyMedList() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Share" component={Share} />
        <Stack.Screen options={{headerShown: false}} name="Reconcile" component={Reconcilelist} />
        <Stack.Screen options={{headerShown: false}} name="Add slip" component={Addslip} />
        <Stack.Screen options={{headerShown: false}} name="Takenphoto" component={Takenphoto} />
        <Stack.Screen options={{headerShown: false}} name="AddSlipInfo" component={AddSlipInfo} />
        <Stack.Screen options={{headerShown: false}} name="MyInfo" component={MyInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyMedList;
