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




function MyMedList(props) {

return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName={"stack"}
      swipeEnabled={true}
      backBehavior={"history"}
      drawerContent={(props) => <LeftDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          width: "70%",},
        header:({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
        
            return <HeaderSection {...props} navigation={navigation} Title={title}/>;
          },
        }
      }>
        {drawerItems.map((item,index)=>{
              
              if(item.title != appLabels.exit){
                let showHeader = item.screenTitle == appLabels.homeTitle ? false: true
                let lazy = item.screenTitle == appLabels.addSlipTitle  ? true:false;
                let screen = ( <Drawer.Screen key={"screen"+"#"+index} options={{headerShown: showHeader,unmountOnBlur: lazy}} name={item.screenTitle} component={item.component} />
                  )
                return screen
              }
              
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyMedList;
