//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// SavedVehicles.js
// Saved vehicles component, get the previously saved records from the local database.
//
// Last Updated: 19/03/2024
//

import React, { Component } from 'react'
import { View, Text } from 'react-native';

//Import components
import SavedVehicleCard from '../cards/SavedVehicleCard';
import LocalDatabaseManager from '../common/LocalDatabaseManager';

export default class SavedVehicles extends Component {

    //Class constructor
    constructor(props) {
        super(props);
        this.state = {
            savedVehicles: [],
        };
    }

    //Use the componentDidMount lifecycle method to allow async method to be used
    //from the local database manager class
    async componentDidMount() {
        //Get search history data
        try {
            //Get search history and set state
            const savedVehicles = await LocalDatabaseManager.getSavedVehicle();
            this.setState({ savedVehicles: savedVehicles });

        } catch (error) {
            //Something went wrong
            console.log('Error fetching saved vehicles:', error);
        }

    }


    render() {
        const { savedVehicles } = this.state;

        return (
            <View>
                {savedVehicles === null ? (
                    <Text>No saved vehicles found.</Text>
                ) : (
                    savedVehicles.map((item, index) => (
                        <SavedVehicleCard
                            navigation={this.props.navigation}
                            key={index}
                            vehicleRegistration={item.vehicle.registrationNumber}
                            make={item.vehicle.make}
                            searchDate={item.searchDate}
                        />
                    ))
                )}
            </View>
        );
    }
}
