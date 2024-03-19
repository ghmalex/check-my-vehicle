//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// LocalDatabaseManager.js
// SQLite 2 database manager component, responsible for fetching and inserting data to the local database.
//
// Last Updated: 18/03/2024
//

import AsyncStorage from '@react-native-async-storage/async-storage';

//Key for the Async Storage
const SEARCH_HISTORY_KEY = 'searchHistory';
const MAX_SEARCH_HISTORY_LENGTH = 10;

SAVED_VEHICLES_KEY = 'savedVehicles';

export default class LocalDatabaseManager {

  //Insert search history data
  static async insertSearchHistory(vehicleRegistration) {
    try {
      //Get current date in YYYY-MM-DD format
      const searchDate = new Date().toISOString().split('T')[0];

      //Get search history
      let searchData = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
      searchData = searchData ? JSON.parse(searchData) : [];

      //Remove the oldest record if the limit is exceeded
      if (searchData.length >= MAX_SEARCH_HISTORY_LENGTH) {
        //Remove the oldest record
        searchData.shift();
      }

      //Add data to the search history
      searchData.push({ vehicleRegistration, searchDate });

      //Store search history
      await AsyncStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(searchData));

    } catch (error) {
      console.log('Error inserting data:', error);
    }
  }

  //Get search history data
  static async getSearchHistory() {
    try {
      //Get search history
      const searchData = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);

      //Parse search history
      if (searchData) {
        const data = JSON.parse(searchData);
        console.log('All search history data stored:', data);
        return data;
      } else {
        console.log('No search data found');
        return [];
      }
    } catch (error) {
      console.log('Error fetching search data:', error);
    }
  }

  //Insert saved vehicles data
  static async insertSavedVehicle(response) {
    try {

      //Get saved vechicles
      let vehiclesData = await AsyncStorage.getItem(SAVED_VEHICLES_KEY);
      vehiclesData = vehiclesData ? JSON.parse(vehiclesData) : [];

      //Add data to the saved vehicles
      vehiclesData.push({ response });

      //Store saved vehicles
      await AsyncStorage.setItem(SAVED_VEHICLES_KEY, JSON.stringify(vehiclesData));

      console.log('Vehicle saved successfully');

    } catch (error) {
      console.log('Error saving vehicle:', error);
    }
  }

  //Get saved vehicles data
  static async getSavedVehicle() {
    try {
      //Get saved vehicle
      const responseString = await AsyncStorage.getItem(SAVED_VEHICLES_KEY);

      if (responseString) {
        //Parse saved vehicle
        const responseObject = JSON.parse(responseString);
        console.log('Retrieved saved vehicles:', responseObject);
        return responseObject;

      } else {
        console.log('No saved vehicles found');
        return null;
      }
    } catch (error) {
      console.log('Error fetching saved vehicles:', error);
      return null;
    }
  }
}
