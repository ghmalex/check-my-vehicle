import React, { Component } from 'react';
import axios from 'axios';
//import { AUTHENTICATION_API_KEY, DVLA_API_KEY } from '@env';
import UserToken from './UserToken';


export default class RequestManager extends Component {

    //Send requests to the authentication server
    static async sendRequest(endpoint, data) {
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
}