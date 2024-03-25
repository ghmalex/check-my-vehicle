//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// SavedVehicleCardFull.js
// Vehicle info component, responsible for displaying information about a saved vehicle.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles/styles';

export default class SavedVehicleCardFull extends Component {
    //Class constructor
    constructor(props) {
        super(props);
    }

    //Vehicle card press
    onPressVehicleCard = () => {

        //Get vehicle registration
        const vehicleRegistration = this.props.vehicleRegistration;

        //Redirect to vehicle page 
        this.props.navigation.navigate("SavedVehicleScreen", { vehicleRegistration });

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
                    <View style={styles.verticalSavedVehicleCardContainer}>
                        <Text style={styles.headingMediumUppercase}>{this.props.make}</Text>
                    </View>
                    <View style={styles.registrationNumberCardContainer}>
                        <Text style={styles.headingMediumUppercase}>{this.props.vehicleRegistration}</Text>
                    </View>
                </Pressable>


            </View>
        );
    }
}
