

import React from 'react'
import { View, Text } from 'react-native';
import Login from'./Login';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import MyTab from './MyTab';
import Profile from './Profile';
import ApiView from '../ApiView';


const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false,
        
        
        }}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyTab" component={MyTab} options={{

            headerShown:false,
        
        }} />

<Stack.Screen name="Profile" component={Profile} options={{

headerShown:false,

}} />

<Stack.Screen name="ApiView" component={ApiView} />
      </Stack.Navigator>
    );
  }
  
  export default MyStack;