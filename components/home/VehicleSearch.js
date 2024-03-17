//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleSearch.js
// Vehicle search component, a search input for finding vehicles.
//
// Last Updated: 12/03/2024
//

import React, { Component } from 'react'
import { View, TextInput, Pressable, Image } from 'react-native';
import styles from '../../styles/styles';

export default class VehicleSearch extends Component {
    //Class constructor
    constructor(props) {
        super(props);
        this.state = {
            vehicleRegistration: '',
        };
    }

    //Change the value of vehicle registration when entered
    onChangeTextVehicleRegistration = (text) => {
        this.setState({ vehicleRegistration: text });
    }

    //Vehicle search
    onPressVehicleSearch = () => {
        //Get data
        const vehicleRegistration = this.state.vehicleRegistration;

        //Check if vehicle registration is entered
        if (vehicleRegistration === "") {
            //Vehicle registration is not entered
            alert("Please enter vehicle registration");
        } else {
            //Vehicle registration is entered
            //Redirect to vehicle page 
            this.props.navigation.navigate("VehicleScreen", { vehicleRegistration });
        }

    }


    render() {
        return (
            <View style={styles.containerVehicleSearch}>
                <TextInput
                    style={styles.textInputVehicleSearch}
                    onChangeText={this.onChangeTextVehicleRegistration}
                    value={this.state.vehicleRegistration}
                    placeholder="SEARCH..."
                    keyboardType="default"
                    maxLength={8}
                />

                <Pressable
                    style={styles.buttonVehicleSearch}
                    onPress={this.onPressVehicleSearch}
                >
                    <Image
                        source={require('../../assets/icons/search.png')}
                        style={styles.iconVehicleSearch}
                    />

                </Pressable>
            </View>
        );
    }
}
