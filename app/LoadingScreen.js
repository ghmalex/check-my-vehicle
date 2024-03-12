//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// LoadingScreen.js
// Loading screen component, responsible for checking if the user is logged in.
// If user is logged in, redirect to home, if not, redirect to sign in
//
// Last Updated: 12/03/2024
//

import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native';
import { COLOURS } from '../constants/colours';
import { SIZES } from '../constants/sizes';
import UserToken from '../components/common/UserToken';

export default class LoadingScreen extends Component {

    //Use the componentDidMount lifecycle method to allow async method to be used
    //from the user token class
    async componentDidMount() {
        // Get UserToken
        const userTokenValidation = await UserToken.checkUserToken();

        //Check if UserToken is valid
        if(userTokenValidation){
            //User token is valid, redirect user to the Home screen
            this.props.navigation.navigate("HomeScreen");
        }else{
             //User token is invalid, redirect user to the Sign in screen
             this.props.navigation.navigate("SignInScreen");

        }
    }

    render() {
        //Initiate navigation
        const navigation = this.props.navigation;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLOURS.white }}>
                <ActivityIndicator size="large" color={COLOURS.primary} />
                <Text style={{ marginTop: SIZES.large, color: COLOURS.gray }}>Please wait</Text>
            </View>
        );
    }
}
