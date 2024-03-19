//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleRegistration.js
// Vehicle info component, responsible for displaying information about a vehicle and a button to save vehicle details.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/styles';
import LocalDatabaseManager from '../common/LocalDatabaseManager';

export default class VehicleRegistration extends Component {
    //Class constructor
    constructor(props) {
        super(props);
    }

    //Save vehicle
    onPressSave = () => {
        //Get data
        const registrationNumber = this.props.registrationNumber;

        alert("Saving vehicle: " + registrationNumber);

    }

    render() {
        return (
            <View style={styles.horizontalContainer}>

                <View style={styles.registrationNumberContainer}>
                    <Text style={styles.registrationNumberText}>{this.props.registrationNumber}</Text>
                </View>

                <Pressable
                    style={styles.buttonVehicleSearch}
                    onPress={this.onPressSave}
                >
                    <Text style={styles.buttonActiveText}>Save</Text>

                </Pressable>

            </View>

        );
    }
}
