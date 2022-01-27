import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import appLabels,{ appScreenName } from './assets/static_resources/strings';

import drawerItems from './assets/data/drawerItem';

import LeftDrawer from './src/components/LeftDrawer'
import HeaderSection from './src/components/HeaderSection';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

//react navigation 
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function stackNav(props){
return (  <Stack.Navigator

            initialRouteName={appLabels.homeTitle}
            
            screenOptions={
              {headerStyle: {
                backgroundColor: "rgba(34, 171, 226, 1)",
              },headerTintColor: '#fff',headerRight: (navigation) => (
                <Icon.Button
                underlayColor={'white'}
                name="options-vertical"
                backgroundColor="rgba(34, 171, 226, 1)"
                onPress={()=>{ props.navigation.openDrawer()}}
              />
              ),}
            }
        >

  {drawerItems.map((item,index)=>{
        
        if(item.title != appLabels.exit && item.title != appScreenName.Reconcile && item.title != appScreenName.share){
          let showHeader = item.screenTitle == appLabels.homeTitle ? false: true
          let lazy = item.screenTitle == appLabels.addSlipTitle |
                     item.screenTitle == appLabels.myInfoTitle   ? true:false;
            let screen =(<Stack.Screen name={item.screenTitle} options={{headerShown: showHeader,unmountOnBlur: false}} component={item.component} />)
          return screen
        }else if(item.title != appLabels.exit){
          //let screen =(<Stack.Screen name={item.screenTitle} options={{headerShown: false,unmountOnBlur: true}} component={item.component} />)
          //return screen
        }
        
  })}
</Stack.Navigator>)
}


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
        
            return <HeaderSection navigation={navigation} Title={title}/>;
          },
        }
      }>
        <Drawer.Screen name="stack" options={{headerShown: false,unmountOnBlur: false}}component={stackNav}/>
        {drawerItems.map((item,index)=>{
              
              if(item.title != appLabels.exit && (item.title == appScreenName.share | item.title == appScreenName.Reconcile)){
                let showHeader = item.screenTitle == appLabels.homeTitle ? false: true
                let lazy = item.screenTitle == appLabels.addSlipTitle |
                           item.screenTitle == appLabels.myInfoTitle   ? true:false;
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
