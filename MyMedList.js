import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screens/Home';
import Share from './Screens/Share';
import Reconcilelist from './Screens/Reconcilelist';
import Addslip from './Screens/Addslip';
import Takenphoto from './Screens/Takenphoto'
import AddSlipInfo from './Screens/AddSlipInfo';
import MyInfo from './Screens/MyInfo';
import PdfViewer from './Screens/PdfViewer'


//react navigation 
const Drawer = createDrawerNavigator();

function MyMedList() {

return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Drawer.Screen options={{headerShown: false}} name="Share" component={Share} />
        <Drawer.Screen options={{headerShown: false,drawerItemStyle: { height: 0 }}} name="Reconcile" component={Reconcilelist} />
        <Drawer.Screen options={{headerShown: false}} name="Add slip" component={Addslip} />
        <Drawer.Screen options={{headerShown: false,drawerItemStyle: { height: 0 }}} name="Takenphoto" component={Takenphoto} />
        <Drawer.Screen options={{headerShown: true,drawerItemStyle: { height: 0 }}} name="AddSlipInfo" component={AddSlipInfo} />
        <Drawer.Screen options={{headerShown: false,drawerItemStyle: { height: 0 }}} name="MyInfo" component={MyInfo} />
        <Drawer.Screen options={{headerShown: false,drawerItemStyle: { height: 0 }}} name="PdfViewer" component={PdfViewer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyMedList;
