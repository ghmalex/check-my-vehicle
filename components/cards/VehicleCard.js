//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleCard.js
// Vehicle info component, responsible for displaying information about MOT.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles/styles';

export default class VehicleCard extends Component {
    //Class constructor
    constructor(props) {
        super(props);
    }

    //Method to convert the standard date format to British date format
    formatBritishDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB');
    }

    //Vehicle card press
    onPressVehicleCard = () => {

        //Get vehicle registration
        const vehicleRegistration = this.props.vehicleRegistration;

        //Redirect to vehicle page 
        this.props.navigation.navigate("VehicleScreen", { vehicleRegistration });

    }

    render() {

        return (
            <View>
                <Pressable style={styles.containerInfoCard} onPress={this.onPressVehicleCard}>
                    <View style={styles.containerCardIcon}>
                        <Image
                            source={require('../../assets/icons/vehicle.png')}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.verticalCardContainer}>
                        <Text style={styles.headingMediumUppercase}>{this.props.make}</Text>
                        <Text >Searched on {this.formatBritishDate(this.props.searchDate)}</Text>
                    </View>
                    <View style={styles.registrationNumberCardContainer}>
                        <Text style={styles.headingMediumUppercase}>{this.props.vehicleRegistration}</Text>
                    </View>
                </Pressable>


            </View>
        );
    }
}
