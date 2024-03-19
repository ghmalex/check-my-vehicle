import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';
import styles from './styles/styles';

// Import screens
import LoadingScreen from './app/LoadingScreen';
import SignInScreen from './app/SignInScreen';
import SignUpScreen from './app/SignUpScreen';
import HomeScreen from './app/HomeScreen';
import VehicleScreen from './app/VehicleScreen';
import SignOutScreen from './app/SignOutScreen';

// Create stack navigation
const Stack = createStackNavigator();
// Create drawer navigation
const Drawer = createDrawerNavigator();

// Main component of the app to initiate the screens
export default class CheckMyVehicle extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoadingScreen">
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VehicleScreen"
            component={VehicleScreen}
            options={{ title: 'View vehicle' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// Drawer navigator component
const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home"
      options={() => ({
        title: 'Home',
        headerTitle: () => (
          <View style={styles.logoContainer}>
            <Image
              source={require('./assets/images/logo.png')}
              style={styles.logoImage}
            />
            <Text style={styles.title}>Check My Vehicle</Text>
          </View>
        ),
        headerLeft: null,
      })}
      component={HomeScreen} />
    <Drawer.Screen name="Sign out"
      options={{ headerShown: false }}
      component={SignOutScreen} />
  </Drawer.Navigator>
);
