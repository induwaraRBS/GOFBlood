import React from 'react'
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const NotificationsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Notifications Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Screen</Text>
  </View>
);

const AppTabNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" size={24} color={tintColor} />
          ),
        },
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" size={24} color={tintColor} />
          ),
        },
      },
      Notifications: {
        screen: NotificationsScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-notifications" size={24} color={tintColor} />
          ),
        },
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-settings" size={24} color={tintColor} />
          ),
        },
      },
    },
    {
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: '#e91e63',
        inactiveTintColor: '#aaa',
      },
    }
  );

  export default AppTabNavigator;
const styles = StyleSheet.create({})