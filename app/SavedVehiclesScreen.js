//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// SavedVehiclesScreen.js
// Search vehicles screen component, responsible getting saved vehicles.
//
// Last Updated: 19/03/2024
//

import React, { Component } from 'react'
import { ScrollView, View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import LocalDatabaseManager from '../components/common/LocalDatabaseManager';

//Import components
import SavedVehicleCardFull from '../components/cards/SavedVehicleCardFull';

export default class SavedVehiclesScreen extends Component {

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
            //Get saved vehicles
            const savedVehicles = await LocalDatabaseManager.getSavedVehicle();
            this.setState({ savedVehicles: savedVehicles });

        } catch (error) {
            //Something went wrong
            console.log('Error fetching saved vehicles:', error);
        }

    }

    render() {


        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>

                    {this.state.savedVehicles === null || this.state.savedVehicles.length === 0 ? (
                        <Text>No saved vehicles found.</Text>
                    ) : (
                        <FlatList
                            data={this.state.savedVehicles}
                            renderItem={({ item, index }) => (
                                <SavedVehicleCardFull
                                    navigation={this.props.navigation}
                                    key={index}
                                    vehicleRegistration={item.vehicle.registrationNumber}
                                    make={item.vehicle.make}
                                    searchDate={item.searchDate}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    )}


                </View>

            </ScrollView>
        );
    }
}
