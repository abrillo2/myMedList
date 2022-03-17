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

import ShareActive from './src/Screens/ShareActive'
import ShareDiscontinued from './src/Screens/ShareDiscontinued'

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './assets/static_resources/colors';
import { FlatList } from 'react-native';
import MyInfo from './src/Screens/MyInfo';

//react navigation 
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// share active and discontinued tab nav
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
        fontSize:15,
    },
    tabBarStyle:{
      backgroundColor:colors.bgColorSecondary,
    },
      tabBarActiveTintColor: colors.bgColorPrimary,
      tabBarInactiveTintColor: colors.placeHolderTextColor,
  headerShown:false})
  }
  
  >
    <Tab.Screen name={appLabels.activeTitle} component={ShareActive} />
    <Tab.Screen name={appLabels.discontinuedTitle} component={ShareDiscontinued} />
  </Tab.Navigator>)
}

// active slip image and shared pdfs view page
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
    backgroundColor:colors.bgColorSecondary,
  },
    tabBarActiveTintColor: colors.bgColorPrimary,
    tabBarInactiveTintColor: colors.placeHolderTextColor,
  })
  }
  
  >
    <Tab.Screen name={appLabels.activeSlips} component={SlipReviewList} />
    <Tab.Screen name={appLabels.sharedPdfs} component={PdfReviewList} />
  </Tab.Navigator>)
}

//stack nav
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
 
  <Stack.Screen name={appLabels.shareTitle} options={{headerShown: false}} component={ShareTab}/>
  <Stack.Screen name={appLabels.reviewTitle} options={{headerShown: true}} component={reviewTab} />
  

  {drawerItems.map((item,index)=>{
        
        if(item.screenTitle != appLabels.myInfoTitle &&item.title != appLabels.exit && item.title != 'Review' && item.title != appScreenName.share){
          let showHeader = item.screenTitle == appLabels.homeTitle ? true: true
          let lazy = item.screenTitle == appLabels.addSlipTitle   ? true:false;
            let screen =(<Stack.Screen name={item.screenTitle} options={{headerShown: showHeader}} component={item.component} />)
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
        <Drawer.Screen name="stack" options={{headerShown: false}}component={stackNav}/>
        <Drawer.Screen name={appLabels.myInfoTitle} options={{headerShown: true}}component={MyInfo}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyMedList;