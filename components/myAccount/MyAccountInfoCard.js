//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// MyAccountInfoCard.js
// My account info component, responsible for displaying information about a user.
//
// Last Updated: 23/03/2024
//

import React, { Component } from 'react'
import { View, Text } from 'react-native';
import styles from '../../styles/styles';

export default class MyAccountInfoCard extends Component {
    //Class constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerInfoCard}>
                <View style={styles.verticalContainer}>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>Full name</Text>
                        <Text style={styles.textValueSecondary}>{this.props.firstName} {this.props.lastName}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>Email</Text>
                        <Text style={styles.textValueSecondary}>{this.props.email}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>User ID:</Text>
                        <Text style={styles.textValueSecondary}>{this.props.userNumber}</Text>
                    </View>

                    <View style={styles.horizontalContainer}>
                        <Text style={styles.textKeySecondary}>Sign up date</Text>
                        <Text style={styles.textValueSecondary}>{this.props.userAddedDate}</Text>
                    </View>

                </View>

            </View>

        );
    }
}
