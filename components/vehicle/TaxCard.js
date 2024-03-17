//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// TaxCard.js
// Vehicle info component, responsible for displaying information about taxing.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import styles from '../../styles/styles';

export default class TaxCard extends Component {
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

        //Check if Tax is valid
        if (this.props.taxStatus === 'Taxed') {
            //Tax is valid
            return (
                <View style={styles.containerInfoCardGreen}>
                    <View style={styles.containerIcon}>
                        <Image
                            source={require('../../assets/icons/tick.png')}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.verticalContainer}>
                        <Text style={styles.headingMediumUppercase}>{this.props.taxStatus}</Text>
                        <Text style={styles.textGreen}>Next due on {this.formatBritishDate(this.props.taxDueDate)}</Text>
                    </View>

                </View>
            );
        } else {
            //Tax is not valid
            return (
                <View style={styles.containerInfoCardRed}>
                    <View style={styles.containerIcon}>
                        <Image
                            source={require('../../assets/icons/cross.png')}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.verticalContainer}>
                        <Text style={styles.headingMediumUppercase}>{this.props.taxStatus}</Text>
                        <Text style={styles.textRed}>Next due on {this.formatBritishDate(this.props.taxDueDate)}</Text>
                    </View>

                </View>
            )
        }
    }
}
