//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleSearchHistory.js
// Vehicle search history component, get the previously searched records from the local database.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, TextInput, Pressable, Image } from 'react-native';
import styles from '../../styles/styles';

export default class VehicleSearchHistory extends Component {
    //Class constructor
    constructor(props) {
        super(props);
        this.state = {
            vehicleRegistration: '',
        };
    }

    

    render() {
        return (
            <View style={styles.containerVehicleSearch}>
               
            </View>
        );
    }
}
