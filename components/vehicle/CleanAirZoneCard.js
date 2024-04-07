//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// CleanAirZoneCard.js
// Vehicle info component, responsible for displaying information about clean air zone compliance.
//
// Last Updated: 01/04/2024
//

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import styles from '../../styles/styles';

export default class CleanAirZoneCard extends Component {
    //Class constructor
    constructor(props) {
        super(props);
    }

    render() {

        //Check if vehicle is clean air zone compliant
        if (this.props.cleanAirCompliant) {
            //Vehicle is clean air zone compliant
            return (
                <View style={styles.containerInfoCardGreen}>
                    <View style={styles.containerIcon}>
                        <Image
                            source={require('../../assets/icons/tick.png')}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.verticalContainer}>
                        <Text style={styles.headingMediumUppercase}>Clean air zone compliant</Text>
                        <Text style={styles.textGreen}>You can drive in clean air zones</Text>
                    </View>

                </View>
            );
        } else {
            //Vehicle is not clean air zone compliant
            return (
                <View style={styles.containerInfoCardRed}>
                    <View style={styles.containerIcon}>
                        <Image
                            source={require('../../assets/icons/cross.png')}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.verticalContainer}>
                        <Text style={styles.headingMediumUppercase}>Not clean air zone compliant</Text>
                        <Text style={styles.textRed}>Charges apply if you drive in clean air zones</Text>
                    </View>

                </View>
            )
        }
    }
}
