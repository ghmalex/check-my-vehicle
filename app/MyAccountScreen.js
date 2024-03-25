//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// MyAccountScreen.js
// My account screen component, responsible getting the users' account details.
//
// Last Updated: 19/03/2024
//

import React, { Component } from 'react'
import { ScrollView, View, Text, Pressable } from 'react-native';
import styles from '../styles/styles';
import RequestManager from '../components/common/RequestManager';
import Encryption from '../components/common/Encryption';
import UserToken from '../components/common/UserToken';

//Import components
import MyAccountInfoCard from '../components/myAccount/MyAccountInfoCard';

export default class MyAccountScreen extends Component {

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

    //Use the componentDidMount lifecycle method to allow async method to be used
    //from the request manager class
    async componentDidMount() {
        //Make request to get user details
        try {
            //Get user token
            const storedUserToken = await UserToken.getUserToken();

            //Send request to get user's data
            const response = await RequestManager.sendRequest('get_user', {
                user_token: storedUserToken
            });

            //Check response
            if (response.result === 'successful') {
                //Successful response

                //Decrypt user data
                const userNumber = response.user_number;
                const firstName = Encryption.decrypt(response.first_name);
                const lastName = Encryption.decrypt(response.last_name);
                const email = Encryption.decrypt(response.email);
                const userAddedDate = response.user_added_date;

                //Get user details
                this.setState({ userNumber: userNumber });
                this.setState({ firstName: firstName });
                this.setState({ lastName: lastName });
                this.setState({ email: email });
                this.setState({ userAddedDate: userAddedDate });


            } else if (response.result === 'error_invalid_user_token') {
                //Invalid user token
                const responseMessage = response.message;
                alert(responseMessage);

                //Redirect user to sign out
                this.props.navigation.replace("SignOutScreen");

            } else if (response.result === 'error') {
                //Something went wrong
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

    //Sign out
    onPressSignOut = () => {
        //Redirect to sign out account page 
        this.props.navigation.replace("SignOutScreen");
    }

    //Delete my account
    onPressDeleteMyAccount = () => {
        //Redirect to delete my account page 
        this.props.navigation.navigate("DeleteMyAccountScreen");
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <MyAccountInfoCard
                        userNumber={this.state.userNumber}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        userAddedDate={this.state.userAddedDate}
                    />

                    <Pressable
                        style={styles.buttonInactive}
                        onPress={this.onPressSignOut}
                    >
                        <Text style={styles.buttonInactiveText}>Sign out</Text>

                    </Pressable>

                    <Pressable
                        style={styles.buttonInactiveRed}
                        onPress={this.onPressDeleteMyAccount}
                    >
                        <Text style={styles.buttonInactiveRedText}>Delete my account</Text>

                    </Pressable>
                </View>

            </ScrollView>
        );
    }
}
