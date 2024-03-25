//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// VehicleSearchHistory.js
// Vehicle search history component, get the previously searched records from the local database.
//
// Last Updated: 13/03/2024
//

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native';

//Import components
import VehicleCard from '../cards/VehicleCard';
import LocalDatabaseManager from '../common/LocalDatabaseManager';

export default class VehicleSearchHistory extends Component {

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

        //Only show the first 5 search history items
        const searchHistorySliced = this.state.searchHistory.slice(0, 5);

        return (
            <View>

                {searchHistorySliced.length === 0 ? (
                    <Text>No search history found.</Text>
                ) : (
                    <FlatList
                        data={searchHistorySliced}
                        renderItem={({ item, index }) => (
                            <VehicleCard
                                navigation={this.props.navigation}
                                key={index}
                                vehicleRegistration={item.vehicleRegistration}
                                make={item.make}
                                searchDate={item.searchDate}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                )}
            </View>
        );
    }
}
