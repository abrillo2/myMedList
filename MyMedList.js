import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';

import appLabels,{ appScreenName } from './assets/static_resources/strings';

import drawerItems from './assets/data/drawerItem';

import LeftDrawer from './src/components/LeftDrawer'
import HeaderSection from './src/components/HeaderSection';


//react navigation 
const Drawer = createDrawerNavigator();

function MyMedList() {

return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName={appScreenName.home}
      swipeEnabled={true}
      drawerContent={(props) => <LeftDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          width: "70%",},
        header:({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
        
            return <HeaderSection navigation={navigation} Title={title}/>;
          },
        }
      }>

        {drawerItems.map((item,index)=>{
              
              if(item.title != appLabels.exit){
                let showHeader = item.screenTitle == appLabels.homeTitle ? false: true
                let screen = ( <Drawer.Screen options={{headerShown: showHeader}} name={item.screenTitle} component={item.component} />
                  )
                return screen
              }
              
        })}

        {/*         <Drawer.Screen options={{headerShown: true}} name={appScreenName.home} component={Home} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.share} component={Share} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.Reconcile} component={Reconcilelist} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.addSlip} component={Addslip} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.takenPhoto} component={Takenphoto} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.addSlipInfo} component={AddSlipInfo} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.myInfo} component={MyInfo} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.pdfViewer} component={PdfViewer} />
        <Drawer.Screen options={{headerShown: false}} name={appScreenName.about} component={About} />*/}

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyMedList;
