import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#999999',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Steps"
        component={OnboardingScreen}
        options={{
          tabBarLabel: 'Steps',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person-outline" color={color} size={size} />
          ),
          headerShown:false,
        }}
      />
      <Tab.Screen
        name="About us"
        component={AboutScreen}
        options={{
          tabBarLabel: 'Aboutus',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-information-circle-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
