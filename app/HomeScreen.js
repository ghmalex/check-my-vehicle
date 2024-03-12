//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// HomeScreen.js
// Home screen component, responsible for loading all home screen components.
//
// Last Updated: 12/03/2024
//

import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../styles/styles';
import VehicleSearch from '../components/home/VehicleSearch';

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>

          <VehicleSearch navigation={this.props.navigation} />

          <Text style={styles.heading}>Saved vehicles</Text>

          <Text style={styles.heading}>Search history</Text>

        </View>

      </SafeAreaView>
    );
  }
}
