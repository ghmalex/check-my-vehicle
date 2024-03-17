//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleInfoCardSecondary.js
// Vehicle info component, responsible for displaying information about a vehicle.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import styles from '../../styles/styles';

export default class VehicleInfoCardSecondary extends Component {
    //Class constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerInfoCard}>
                <View style={styles.verticalContainer}>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>Engine capacity</Text>
                        <Text style={styles.textValueSecondary}>{this.props.engineCapacity}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>Approval type</Text>
                        <Text style={styles.textValueSecondary}>{this.props.typeApproval}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>Revenue weight</Text>
                        <Text style={styles.textValueSecondary}>{this.props.revenueWeight}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>Wheel plan</Text>
                        <Text style={styles.textValueSecondary}>{this.props.wheelplan}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>First registration</Text>
                        <Text style={styles.textValueSecondary}>{this.props.monthOfFirstRegistration}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>CO2 emission</Text>
                        <Text style={styles.textValueSecondary}>{this.props.co2Emissions}</Text>
                    </View>

                </View>

            </View>

        );
    }
}
