import React from 'react';
//import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/bottomTabScreens/HomeScreen';
import UserScreen from '../screens/bottomTabScreens/UserScreen';
import CartScreen from '../screens/bottomTabScreens/CartScreen';
import CategoriesScreen from '../screens/bottomTabScreens/CategoriesScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        //tabBarActiveTintColor: 'red',  // aktif menu elemanlarinin rengi. Bunu altta tabBarLabel da verdik.
        //tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
        tabBarStyle: {
          //height: 90,
          backgroundColor: '#fff',
          flex: 0.07,
          //paddingTop: 7,
          //paddingBottom: 7,
          borderTopWidth: 0.5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              //size={focused ? 25 : 15}
              size={30}
              color={focused ? '#009BA9' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={30}
              //size={focused ? 25 : 15}
              color={focused ? '#009BA9' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'cart' : 'cart-outline'}
              size={30}
              //size={focused ? 25 : 15}
              color={focused ? '#009BA9' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              //name={'ios-list'}
              name={focused ? 'ios-reorder-four' : 'ios-reorder-four-outline'}
              size={30}
              //size={focused ? 25 : 15}
              color={focused ? '#009BA9' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
