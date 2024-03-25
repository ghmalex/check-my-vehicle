import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

// Import components
import SavedVehicleCard from '../cards/SavedVehicleCard';
import LocalDatabaseManager from '../common/LocalDatabaseManager';

export default class SavedVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedVehicles: [],
    };
  }

  async componentDidMount() {
    try {
      const savedVehicles = await LocalDatabaseManager.getSavedVehicle();
      this.setState({ savedVehicles: savedVehicles });
    } catch (error) {
      console.log('Error fetching saved vehicles:', error);
    }
  }

  render() {
    const { savedVehicles } = this.state;

    return (
      <View>
        {savedVehicles === null || savedVehicles.length === 0 ? (
          <Text>No saved vehicles found.</Text>
        ) : (
          <FlatList
            data={savedVehicles}
            renderItem={({ item, index }) => (
              <SavedVehicleCard
                navigation={this.props.navigation}
                key={index}
                vehicleRegistration={item.vehicle.registrationNumber}
                make={item.vehicle.make}
                searchDate={item.searchDate}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
          />
        )}
      </View>
    );
  }
}
