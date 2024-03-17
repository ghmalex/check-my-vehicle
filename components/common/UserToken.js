//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// UserToken.js
// User Token manager component, responsible for checking if user has a user token set,
// setting user token, validating user token and deleting user token
//
// Last Updated: 12/03/2024
//

import AsyncStorage from '@react-native-async-storage/async-storage';
import RequestManager from './RequestManager';

//Key for the Async Storage
const USER_TOKEN_KEY = 'userToken';

export default class UserToken {
    //Get user token
    static async getUserToken() {
        try {
            //Get user token
            const storedUserToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
            return storedUserToken || null;
        } catch (error) {
            //Something went wrong
            console.error('Error getting user token:', error);
            return null;
        }
    }

    //Set user token
    static async setUserToken(userToken) {
        try {
            //Set user token
            await AsyncStorage.setItem(USER_TOKEN_KEY, userToken);
            const storedUserToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
            console.log("User token stored: " + storedUserToken);
        } catch (error) {
            //Something went wrong
            console.error('Error setting user token in AsyncStorage:', error);
        }
    }

    //Delete user token
    static async deleteUserToken() {
        try {
            //Get user token
            const storedUserToken = await AsyncStorage.getItem(USER_TOKEN_KEY);

            //Check user token
            if (storedUserToken !== null) {
                //User token is  stored
                //Send request to to devalidate user token
                await RequestManager.sendRequest('devalidate_user_token', {
                    user_token: storedUserToken
                });

                //Delete user token
                await AsyncStorage.removeItem(USER_TOKEN_KEY);
            }

        } catch (error) {
            //Something went wrong
            console.error('Error deleting user token from AsyncStorage:', error);
        }
    }

    //Validate user token
    static async checkUserToken() {
        try {
            //Get user token
            const storedUserToken = await AsyncStorage.getItem(USER_TOKEN_KEY);

            //Check user token
            if (storedUserToken === null) {
                //User token is not stored
                return false;
            }

            //Send request to to validate user token
            const response = await RequestManager.sendRequest('check_user_token', {
                user_token: storedUserToken
            });

            //Check response
            if (response.result === 'valid') {
                //User token is valid
                return true;

            } else if (response.result === 'invalid') {
                //User token is not valid
                //Delete user token
                this.deleteUserToken();

                return false;

            } else {
                //Something went wrong
                //Delete user token
                this.deleteUserToken();

                return false;
            }
        } catch (error) {
            // Something went wrong
            console.error('Error checking user token:', error);
        }
    }
}
