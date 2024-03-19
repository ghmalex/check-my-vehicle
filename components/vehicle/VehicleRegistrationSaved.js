//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleRegistrationSaved.js
// Vehicle info component, responsible for displaying information about a vehicle and a button to save vehicle details.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/styles';
import LocalDatabaseManager from '../common/LocalDatabaseManager';

export default class VehicleRegistrationSaved extends Component {
    //Class constructor
    constructor(props) {
        super(props);
    }

    //Unsave vehicle
    onPressUnsave = async () => {

        //Delete vehicle data from the local storage
        try{
            const registrationNumber = this.props.registrationNumber;
            await LocalDatabaseManager.deleteSavedVehicleByRegistrationNumber(registrationNumber);
            alert("Unsaved vehicle: " + registrationNumber);

            //Replace navigation to the vehicle screen
            this.props.navigation.replace("VehicleScreen", { registrationNumber });
        }catch{
            //Something went wrong
            console.log('Error unsaving vehicle:', error);
        }

    }

    render() {
        return (
            <View style={styles.horizontalContainer}>

                <View style={styles.registrationNumberContainer}>
                    <Text style={styles.registrationNumberText}>{this.props.registrationNumber}</Text>
                </View>

                <Pressable
                    style={styles.buttonVehicleSearchUnsave}
                    onPress={this.onPressUnsave}
                >
                    <Text style={styles.buttonInactiveText}>Unsave</Text>

                </Pressable>

            </View>

        );
    }
}
