import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Screens/Home';
import Share from './src/Screens/Share';
import Reconcilelist from './src/Screens/Reconcilelist';
import Addslip from './src/Screens/Addslip';
import Takenphoto from './src/Screens/Takenphoto'
import AddSlipInfo from './src/Screens/AddSlipInfo';
import MyInfo from './src/Screens/MyInfo';
import PdfViewer from './src/Screens/PdfViewer'
import { appScreenName } from './assets/static_resources/strings';

import LeftDrawer from './src/components/LeftDrawer'


//react navigation 
const Drawer = createDrawerNavigator();

function MyMedList() {

return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName={appScreenName.home} 
      unmountOnBlur={true}
      drawerContent={(props) => <LeftDrawer {...props} />}>
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.home} component={Home} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.share} component={Share} />
        <Drawer.Screen options={{headerShown: false,drawerItemStyle: { height: 0 }}} name={appScreenName.Reconcile} component={Reconcilelist} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.addSlip} component={Addslip} />
        <Drawer.Screen options={{headerShown: false,drawerItemStyle: { height: 0 }}} name={appScreenName.takenPhoto} component={Takenphoto} />
        <Drawer.Screen unmountOnBlur={true}  options={{unmountOnBlur: true,headerShown: false}} name={appScreenName.addSlipInfo} component={AddSlipInfo} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.myInfo} component={MyInfo} />
        <Drawer.Screen options={{headerShown: false,drawerItemStyle: { height: 0 }}} name={appScreenName.pdfViewer} component={PdfViewer} />
       
        <Drawer.Screen options={{headerShown: false}} name={"LeftDrawer"} component={LeftDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyMedList;
