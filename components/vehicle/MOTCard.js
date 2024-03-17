//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// MOTCard.js
// Vehicle info component, responsible for displaying information about MOT.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import styles from '../../styles/styles';

export default class MOTCard extends Component {
    //Class constructor
    constructor(props) {
        super(props);
    }

    //Method to convert the standard date format to British date format
    formatBritishDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB');
    }

    render() {

        //Check if MOT is valid
        if (this.props.motStatus === 'Valid') {
            //MOT is valid
            return (
                <View style={styles.containerInfoCardGreen}>
                    <View style={styles.containerIcon}>
                        <Image
                            source={require('../../assets/icons/tick.png')}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.verticalContainer}>
                        <Text style={styles.headingMediumUppercase}>MOT {this.props.motStatus}</Text>
                        <Text style={styles.textGreen}>Next due on {this.formatBritishDate(this.props.motExpiryDate)}</Text>
                    </View>

                </View>
            );
        } else {
            //MOT is not valid
            return (
                <View style={styles.containerInfoCardRed}>
                    <View style={styles.containerIcon}>
                        <Image
                            source={require('../../assets/icons/cross.png')}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.verticalContainer}>
                        <Text style={styles.headingMediumUppercase}>MOT {this.props.motStatus}</Text>
                        <Text style={styles.textRed}>Next due on {this.formatBritishDate(this.props.motExpiryDate)}</Text>
                    </View>

                </View>
            )
        }
    }
}
