import React, { Component } from 'react';
import axios from 'axios';
//import { AUTHENTICATION_API_KEY, DVLA_API_KEY } from '@env';
import UserToken from './UserToken';


export default class RequestManager extends Component {

    //Send requests to the authentication server
    static async sendRequestAuthentication(endpoint, data) {
        try {
            //Get API KEY from the environmental variable
            //const apiKey = AUTHENTICATION_API_KEY;
            const apiKey = "hjkjResgh3D87df6827d5h65sEWi387twj";

            //Get User Token
            const [storedUserToken] = await Promise.all([
                UserToken.getUserToken(),
            ]);

            //Add data to the request
            data.mobile_api_key = apiKey;
            data.user_token = storedUserToken;

            //Send request
            const response = await axios.post(`https://ghimici.co.uk/check_my_vehicle/${endpoint}.api.php`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            //Return response
            return response.data;

        } catch (error) {
            //Something went wrong
            //throw new Error('Error in the request', error);
            console.error('Error in the request:', error);
        }
    }

    //Send requests to the authentication server
    static async sendRequestDVLA(data) {
        try {
            //Get API KEY from the environmental variable
            //const apiKey = DVLA_API_KEY;
            const apiKey = "lNI7SCWAy156onvl5AyUI5Ck1WD6EX4R34x3Whre";

            //Registration number should be already added to data
            //The name of the variable should be 'registrationNumber'

            //Send request
            const response = await axios.post(`https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': "lNI7SCWAy156onvl5AyUI5Ck1WD6EX4R34x3Whre",
                },
            });

            console.log('DVLA API response code:', response.status);

            //Return response
            return response.data;

        } catch (error) {
            //Something went wrong
            throw new Error('Error in the request');
        }
    }
}