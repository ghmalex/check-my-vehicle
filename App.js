//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// App.js
// Main component of the app, responsible to set up the navigation and the screens
// of the mobile app
//
// Last Updated: 12/03/2024
//

import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, Text } from 'react-native-web';
import styles from './styles/styles';

//Import screens
import LoadingScreen from './app/LoadingScreen';
import SignInScreen from './app/SignInScreen';
import SignUpScreen from './app/SignUpScreen';
import HomeScreen from './app/HomeScreen';
import VehicleScreen from './app/VehicleScreen';

//Create stack navigation
const Stack = createStackNavigator();

//Main component of the app to initiate the screens
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
            component={HomeScreen}
            options={{ 
              title: 'Check My Vehicle',
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
             }}
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