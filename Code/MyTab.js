import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Abc from './Abc';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();
function MyTab(navigation) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="mediumvioletred"
      inactiveColor="#3e2465"
      headerShown="false"
      backgroundColor="indigo"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarColor: 'orchid',
          inactiveColor: 'mediumvioletred ',
          activeColor: 'tomato',
          backgroundColor: 'indigo',
          tabBarIcon: ({color}) => (
            <Icon name="grid-outline" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Abc"
        component={Abc}
        options={{
          tabBarLabel: 'Audit Report',
          tabBarColor: 'orange',
          tabBarIcon: ({color}) => (
            <Icon name="ios-document-text-outline" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'orange',

          tabBarIcon: ({color}) => (
            <Icon name="person-add-outline" color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTab;
