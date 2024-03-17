//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleInfoCardPrimary.js
// Vehicle info component, responsible for displaying information about a vehicle.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import styles from '../../styles/styles';

export default class VehicleInfoCardPrimary extends Component {
    //Class constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerInfoCard}>
                <View style={styles.containerIcon}>
                    <Image
                        source={require('../../assets/icons/vehicle.png')}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.verticalContainer}>
                    <Text style={styles.headingMedium}>{this.props.make}</Text>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKey}>Year</Text>
                        <Text style={styles.textValue}>{this.props.yearOfManufacture}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKey}>Colour</Text>
                        <Text style={styles.textValue}>{this.props.colour}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKey}>Fuel</Text>
                        <Text style={styles.textValue}>{this.props.fuelType}</Text>
                    </View>
                </View>

            </View>

        );
    }
}
