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

const SAVED_VEHICLES_KEY = 'savedVehicles';

export default class LocalDatabaseManager {

  //Insert search history data
  static async insertSearchHistory(vehicleRegistration, make) {
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
      searchData.push({ vehicleRegistration, make, searchDate });

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

        //Sort search history data to show the newest one first
        const sortedData = data.reverse();
        console.log('All search history data stored:', sortedData);
        return sortedData;
      } else {
        console.log('No search data found');
        return [];
      }
    } catch (error) {
      console.log('Error fetching search data:', error);
    }
  }

  //Insert saved vehicles data
  static async insertSavedVehicle(vehicle) {
    try {

      //Get saved vechicles
      let vehiclesData = await AsyncStorage.getItem(SAVED_VEHICLES_KEY);
      vehiclesData = vehiclesData ? JSON.parse(vehiclesData) : [];

      //Add data to the saved vehicles
      vehiclesData.push({ vehicle });

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
      console.log('Getting saved vehicles');
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

  //Get saved vehicle by registration number
  static async getSavedVehicleByRegistrationNumber(registrationNumber) {
    try {
      //Get saved vehicles
      const responseString = await AsyncStorage.getItem(SAVED_VEHICLES_KEY);

      if (responseString) {
        //Parse saved vehicles
        const savedVehicles = JSON.parse(responseString);

        //Find the vehicle with the given registration number
        const vehicle = savedVehicles.find(entry => entry.vehicle.registrationNumber === registrationNumber);

        //Check if vehicle found
        if (vehicle) {
          console.log('Retrieved saved vehicle by registration number:', vehicle);
          return vehicle;
        } else {
          console.log('No saved vehicle found with the provided registration number:', registrationNumber);
          return null;
        }
      } else {
        console.log('No saved vehicles found');
        return null;
      }
    } catch (error) {
      console.log('Error fetching saved vehicles:', error);
      return null;
    }
  }

  //Check if vehicle is saved
  static async checkVehicleSavedById(registrationNumber) {
    try {
      //Get saved vehicles
      const responseString = await AsyncStorage.getItem(SAVED_VEHICLES_KEY);

      if (responseString) {
        //Parse saved vehicles
        const savedVehicles = JSON.parse(responseString);

        //Find the vehicle with the given registration number
        const vehicle = savedVehicles.find(entry => entry.vehicle.registrationNumber === registrationNumber);

        //Check if vehicle found
        if (vehicle) {
          console.log('Retrieved saved vehicle by registration number:', vehicle);
          return true;
        } else {
          console.log('No saved vehicle found with the provided registration number:', registrationNumber);
          return false;
        }
      } else {
        console.log('No saved vehicles found');
        return false;
      }
    } catch (error) {
      console.log('Error fetching saved vehicles:', error);
      return false;
    }
  }


  //Delete saved vehicle by registration number
  static async deleteSavedVehicleByRegistrationNumber(registrationNumber) {
    try {
      //Get saved vehicles
      let savedVehicles = await AsyncStorage.getItem(SAVED_VEHICLES_KEY);
      savedVehicles = savedVehicles ? JSON.parse(savedVehicles) : [];

      //Remove vehicles with the registration number
      const filteredVehicles = savedVehicles.filter(entry => entry.vehicle.registrationNumber !== registrationNumber);

      //Update the vehicles by overwriting the existing data
      await AsyncStorage.setItem(SAVED_VEHICLES_KEY, JSON.stringify(filteredVehicles));

      console.log(`Vehicle with registration number ${registrationNumber} deleted successfully.`);

    } catch (error) {
      //Something went wrong
      console.log('Error deleting saved vehicle:', error);
    }
  }

}
