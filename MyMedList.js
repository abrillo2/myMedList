import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import appLabels, { appScreenName } from './assets/static_resources/strings';

import drawerItems from './assets/data/drawerItem';

import LeftDrawer from './src/components/LeftDrawer'
import HeaderSection from './src/components/HeaderSection';

import PdfReviewList from './src/components/PdfReviewList'
import SlipReviewList from './src/components/SlipReviewList';

import Share from './src/Screens/Share'

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './assets/static_resources/colors';

//react navigation 
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ShareTab(props){
  return(
  
  <Tab.Navigator
  
  screenOptions={({route})=>
    ({tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === appLabels.activeTitle) {
        iconName = focused
          ? 'ios-eye-sharp'
          : 'ios-eye-outline';
      } else if (route.name === appLabels.discontinuedTitle) {
        iconName = focused ? 'ios-eye-off-sharp' : 'ios-eye-off-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarLabel: route.name == appLabels.activeTitle ? appLabels.active.toUpperCase():
                               appLabels.discontinued.toUpperCase(),
    tabBarLabelStyle:{
        fontSize:20,
    },
    tabBarStyle:{
      backgroundColor:'white'
    },
    tabBarActiveTintColor: 'rgba(34, 171, 226, 1)',
    tabBarInactiveTintColor: 'gray',
  headerShown:false})
  }
  
  >
    <Tab.Screen name={appLabels.activeTitle} component={Share} />
    <Tab.Screen name={appLabels.discontinuedTitle} component={Share} />
  </Tab.Navigator>)
}


function reviewTab(props){
  return(
  
  <Tab.Navigator
  
  screenOptions={({route})=>
    ({tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === appLabels.activeSlips) {
        iconName = focused
          ? 'ios-list-sharp'
          : 'ios-list-outline';
      } else if (route.name === appLabels.sharedPdfs) {
        iconName = focused ? 'ios-share-sharp' : 'ios-share-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    }, tabBarLabelStyle:{
      fontSize:15,
  },
  tabBarStyle:{
    backgroundColor:'white',
  },
  tabBarActiveTintColor: 'rgba(34, 171, 226, 1)',
  tabBarInactiveTintColor: 'gray',
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })
  }
  
  >
    <Tab.Screen name={appLabels.activeSlips} component={SlipReviewList} />
    <Tab.Screen name={appLabels.sharedPdfs} component={PdfReviewList} />
  </Tab.Navigator>)
}

function stackNav(props){
return (  <Stack.Navigator

            initialRouteName={appLabels.homeTitle}
            
            screenOptions={
              {header:({ navigation, route, options }) => {
                const title = getHeaderTitle(options, route.name);
            
                return <HeaderSection navigation={navigation} Title={title}/>;
              },
            }
            }
        >

  {drawerItems.map((item,index)=>{
        
        if(item.title != appLabels.exit && item.title != 'Review' && item.title != appScreenName.share){
          let showHeader = item.screenTitle == appLabels.homeTitle ? false: true
          let lazy = item.screenTitle == appLabels.addSlipTitle |
                     item.screenTitle == appLabels.myInfoTitle   ? true:false;
            let screen =(<Stack.Screen name={item.screenTitle} options={{headerShown: showHeader,unmountOnBlur: false}} component={item.component} />)
          return screen
        }else if(item.title == 'Review'){
          
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
      screenOptions={({route})=>({
        drawerStyle: {
          width: "70%",},header:({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
        
            return <HeaderSection navigation={navigation} Title={title}/>;
          }
        
        })
      }>
        <Drawer.Screen name="stack" options={{headerShown: false,unmountOnBlur: false}}component={stackNav}/>
        <Drawer.Screen name={appLabels.reviewTitle} options={{headerShown: true}} component={reviewTab} />
        <Drawer.Screen name="SHARE" options={{headerShown: true,unmountOnBlur: false}}component={ShareTab}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyMedList;