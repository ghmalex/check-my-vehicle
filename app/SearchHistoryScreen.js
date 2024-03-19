//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// SearchHistoryScreen.js
// Search history screen component, responsible getting search history.
//
// Last Updated: 19/03/2024
//

import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native';
import styles from '../styles/styles';
import LocalDatabaseManager from '../components/common/LocalDatabaseManager';

//Import components
import VehicleCard from '../components/cards/VehicleCard';

export default class VehicleScreen extends Component {

    //Class constructor
    constructor(props) {
        super(props);
        this.state = {
            searchHistory: [],
        };
    }

    //Use the componentDidMount lifecycle method to allow async method to be used
    //from the local database manager class
    async componentDidMount() {
        //Get search history data
        try {
            //Get search history and set state
            const history = await LocalDatabaseManager.getSearchHistory();
            this.setState({ searchHistory: history });

        } catch (error) {
            //Something went wrong
            console.log('Error fetching search history:', error);
        }

    }

    render() {


        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>
                    {this.state.searchHistory.map((item, index) => (
                        <VehicleCard
                            navigation={this.props.navigation}
                            key={index}
                            vehicleRegistration={item.vehicleRegistration}
                            make={item.make}
                            searchDate={item.searchDate}
                        />

                    ))}


                </View>

            </SafeAreaView>
        );
    }
}
