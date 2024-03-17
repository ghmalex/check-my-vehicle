//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// SignOutScreen.js
// Sign out screen component, responsible for deleting user token.
// Send request to make user token invalid on the server as well
//
// Last Updated: 17/03/2024
//

import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native';
import { COLOURS } from '../constants/colours';
import { SIZES } from '../constants/sizes';
import UserToken from '../components/common/UserToken';

export default class SignOutScreen extends Component {

    //Use the componentDidMount lifecycle method to allow async method to be used
    //from the user token class
    async componentDidMount() {
        // Get UserToken
        await UserToken.deleteUserToken();

        //Navigate to loading screen
        this.props.navigation.replace("LoadingScreen");
    }

    render() {
        //Initiate navigation
        const navigation = this.props.navigation;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLOURS.white }}>
                <ActivityIndicator size="large" color={COLOURS.primary} />
                <Text style={{ marginTop: SIZES.large, color: COLOURS.gray }}>Signing out</Text>
            </View>
        );
    }
}
