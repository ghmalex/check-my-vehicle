//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleScreen.js
// Vehicle screen component, responsible getting vehicle information components.
//
// Last Updated: 12/03/2024
//

import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../styles/styles';
import RequestManager from '../components/common/RequestManager';

export default class VehicleScreen extends Component {

    //Use the componentDidMount lifecycle method to allow async method to be used
    //from the user token class
    async componentDidMount() {

        //Get vehicle registration
        const { vehicleRegistration } = this.props.route.params;

        //Make request to DVLA to get car details
        //Send request to sign up
        try {
            const response = await RequestManager.sendRequestDVLA({
                registrationNumber: vehicleRegistration,
            });
            alert(response.registrationNumber);
            
        } catch (error) {
            // Something went wrong
            alert("Something went wrong, please try again later");
            console.error('Error in the request:', error);
        }
    }

    render() {


        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>

                    <Text style={styles.heading}>Vehicle</Text>

                </View>

            </SafeAreaView>
        );
    }
}
