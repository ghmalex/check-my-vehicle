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

        //Save vehicle data to the local storage
        try{
            LocalDatabaseManager.insertSavedVehicle({
                registrationNumber: this.props.registrationNumber,
                taxStatus: this.props.taxStatus,
                taxDueDate: this.props.taxDueDate,
                motStatus: this.props.motStatus,
                make: this.props.make,
                yearOfManufacture: this.props.yearOfManufacture,
                engineCapacity: this.props.engineCapacity,
                co2Emissions: this.props.co2Emissions,
                fuelType: this.props.fuelType,
                markedForExport: this.props.markedForExport,
                colour: this.props.colour,
                typeApproval: this.props.typeApproval,
                revenueWeight: this.props.revenueWeight,
                dateOfLastV5CIssued: this.props.dateOfLastV5CIssued,
                motExpiryDate: this.props.motExpiryDate,
                wheelplan: this.props.wheelplan,
                monthOfFirstRegistration: this.props.monthOfFirstRegistration,
            });

            const registrationNumber = this.props.registrationNumber;
            alert("Saved vehicle: " + registrationNumber);
        }catch{
            //Something went wrong
            console.log('Error saving vehicle:', error);
        }

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
