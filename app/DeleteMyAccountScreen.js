//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// DeleteMyAccountScreen.js
// Delete my account screen component, responsible deleting users' account.
//
// Last Updated: 25/03/2024
//

import React, { Component } from 'react'
import { ScrollView, View, Text, Pressable } from 'react-native';
import styles from '../styles/styles';
import RequestManager from '../components/common/RequestManager';
import UserToken from '../components/common/UserToken';

export default class DeleteMyAccountScreen extends Component {

    //Class constructor
    constructor(props) {
        super(props);
        this.state = {
            userNumber: '',
            firstName: '',
            lastName: '',
            email: '',
            userAddedDate: '',
        };
    }

    //Delete my account
    onPressDeleteMyAccount = async () => {
        //Send request to delete account
        try {

            //Get user token
            const storedUserToken = await UserToken.getUserToken();

            //Send request
            const response = await RequestManager.sendRequest('delete_user', {
                user_token: storedUserToken
            });
            //Check response
            if (response.result === 'successful') {
                //Account deleted successfully

                //Display message
                alert("Account deleted successfully");

                //Redirect user to the sign out screen
                this.props.navigation.replace("SignOutScreen");

            } else if (response.result === 'error') {
                //There is an error
                //Display message
                const responseMessage = response.message;
                alert(responseMessage);

            } else {
                //Something went wrong
                alert("Something went wrong, please try again later");
            }
        } catch (error) {
            // Something went wrong
            alert("Something went wrong, please try again later");
            console.error('Error in the request:', error);
        }
    }

    //Keep my account
    onPressKeepMyAccount = () => {
        //Redirect to loading 
        this.props.navigation.replace("LoadingScreen");
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.containerInfoCardRed}>
                        <View style={styles.verticalCardContainer}>
                            <Text style={styles.textRed}>Are you sure you would like to delete your account?</Text>
                            <Text style={styles.textRed}>You will permanently lose all your data!</Text>
                        </View>

                    </View>

                    <Pressable
                        style={styles.buttonInactiveRed2}
                        onPress={this.onPressDeleteMyAccount}
                    >
                        <Text style={styles.buttonInactiveRed2Text}>Delete my account</Text>

                    </Pressable>

                    <Pressable
                        style={styles.buttonInactive}
                        onPress={this.onPressKeepMyAccount}
                    >
                        <Text style={styles.buttonInactiveText}>Keep my account</Text>

                    </Pressable>
                </View>

            </ScrollView>
        );
    }
}
