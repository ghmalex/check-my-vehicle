import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const USER_TOKEN_KEY = 'userToken';
const api_key = "2cd687de38msh42b6b683d684bcfp17e6c8jsn8417945d6d24";

export default class UserToken  {
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
        } catch (error) {
            //Something went wrong
            console.error('Error setting user token in AsyncStorage:', error);
        }
    }

    //Delete user token
    static async deleteUserToken() {
        try {
            //Delete user token
            await AsyncStorage.removeItem(USER_TOKEN_KEY);
        } catch (error) {
            //Something went wrong
            console.error('Error deleting user token from AsyncStorage:', error);
        }
    }

    //Check user token
    static async checkUserTokenStatus() {
        try {
            const storedUserToken = await UserToken.getUserToken();
            const storedDeviceNumber = await Device.getDeviceNumber();
            const endpoint = 'authentication/check_user_token';

            const { apiKeyEncrypted, storedUserTokenEnctypted, storedDeviceNumberEnctypted } = UserToken.encryptData(api_key, storedUserToken, storedDeviceNumber);

            const options = {
                method: 'POST',
                url: `https://pbl.ghimici.co.uk/mobile_api/${endpoint}.api.php`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    mobile_api_key: apiKeyEncrypted,
                    device_number: storedDeviceNumberEnctypted,
                    user_token: storedUserTokenEnctypted,
                },
            };

            const { data, error } = await axios.request(options);

            if (error) {
                throw new Error(`Error checking device status: ${error.message}`);
            }

            if (data.status === 'error_inactive_user_token') {
                await UserToken.deleteUserToken();
                return 'error_inactive_user_token';
            } else {
                return data.status;
            }
        } catch (error) {
            console.error('Error checking device status:', error);
            return 'error';
        }
    }

    //Sign in
    static async signIn(username, password) {
        try {
            const storedDeviceNumber = await Device.getDeviceNumber();
            const endpoint = 'authentication/sign_in';

            const { apiKeyEncrypted, storedDeviceNumberEnctypted, usernameEncrypted, passwordEncrypted } = UserToken.encryptData(api_key, null, storedDeviceNumber, username, password);

            const options = {
                method: 'POST',
                url: `https://pbl.ghimici.co.uk/mobile_api/${endpoint}.api.php`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    mobile_api_key: apiKeyEncrypted,
                    device_number: storedDeviceNumberEnctypted,
                    username: usernameEncrypted,
                    password: passwordEncrypted,
                },
            };

            const { data, error } = await axios.request(options);

            if (error) {
                throw new Error(`Error signing in: ${error.message}`);
            }

            if (data.status === 'successful') {
                const userToken = data.user_token;
                await UserToken.setUserToken(userToken);
                return 'successful';
            } else {
                return data.status;
            }
        } catch (error) {
            console.error('Error signing in:', error);
            return 'error';
        }
    }
}
