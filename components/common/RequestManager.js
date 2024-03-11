import React, { Component } from 'react';
import { API_KEY } from '@env';
import UserToken from './UserToken';


export default class RequestManager extends Component {

    //Send requests to the authentication server
    static async sendRequestAuthentication(endpoint, data) {
        try {
            //Get API KEY from the environmental variable
            const apiKey = API_KEY;

            //Get User Token
            const [storedUserToken] = await Promise.all([
                UserToken.getUserToken(),
            ]);

            //Add data to the request
            data.mobile_api_key = apiKey;
            data.user_token = storedUserToken;

            //Send request
            const response = await axios.post(`https://pbl.ghimici.co.uk/mobile_api/${endpoint}.api.php`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            //Return response
            return response.data;

        } catch (error) {
            //Something went wrong
            throw new Error('Error in the request');
        }
    }
}