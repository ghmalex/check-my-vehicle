//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// SignUpScreen.js
// Sign up screen component, responsible for loading sign up components
//
// Last Updated: 12/03/2024
//

import React, { Component } from 'react'
import { SafeAreaView, Text, View, Image, Pressable } from 'react-native';
import styles from '../styles/styles';
import { TextInput } from 'react-native-web';
import RequestManager from '../components/common/RequestManager';
import Encryption from '../components/common/Encryption';


export default class SignUpScreen extends Component {

    //Class constructor
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordAgain: '',
        };
    }

    //Change the value of first name when entered
    onChangeTextFirstName = (text) => {
        this.setState({ firstName: text });
    }

    //Change the value of last name when entered
    onChangeTextLastName = (text) => {
        this.setState({ lastName: text });
    }

    //Change the value of email when entered
    onChangeTextEmail = (text) => {
        this.setState({ email: text });
    }

    //Change the value of password when entered
    onChangeTextPassword = (text) => {
        this.setState({ password: text });
    }

    //Change the value of password again when entered
    onChangeTextPasswordAgain = (text) => {
        this.setState({ passwordAgain: text });
    }

    //Sign up
    onPressSignUp = async () => {
        //Get data
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;
        const password = this.state.password;
        const passwordAgain = this.state.passwordAgain;

        //Encrypt data
        const firstNameEncrypted = Encryption.encrypt(firstName);
        const lastNameEncrypted = Encryption.encrypt(lastName);
        const emailEncrypted = Encryption.encrypt(email);
        const passwordEncrypted = Encryption.encrypt(password);
        const passwordAgainEncrypted = Encryption.encrypt(passwordAgain);

        //Send request to sign up
        try {
            const response = await RequestManager.sendRequestAuthentication('sign_up', {
                first_name: firstNameEncrypted,
                last_name: lastNameEncrypted,
                email: emailEncrypted,
                password: passwordEncrypted,
                password_again: passwordAgainEncrypted
            });
            //Check response
            if (response.result === 'successful') {
                //Sign up successful
                //Display message
                const responseMessage = response.message;
                alert(responseMessage);

                //Redirect user to the sign in screen
                this.props.navigation.navigate("SignInScreen");

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

    //Back to Sign in
    onPressBackToSignIn = () => {
        //Redirect to sign in screen
        this.props.navigation.navigate("SignInScreen");
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/images/authentication_banner.png')}
                    style={styles.authenticationBannerImage}
                />
                <View style={styles.containerAuthentication}>

                    <Text style={styles.heading}>Create an account</Text>

                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.onChangeTextFirstName}
                        value={this.state.firstName}
                        placeholder="First name"
                        keyboardType="default"
                    />

                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.onChangeTextLastName}
                        value={this.state.lastName}
                        placeholder="Last name"
                        keyboardType="default"
                    />

                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.onChangeTextEmail}
                        value={this.state.email}
                        placeholder="Email address"
                        keyboardType="default"
                    />

                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.onChangeTextPassword}
                        value={this.state.password}
                        placeholder="Password"
                        keyboardType="default"
                        secureTextEntry={true}
                    />

                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.onChangeTextPasswordAgain}
                        value={this.state.passwordAgain}
                        placeholder="Re-enter password"
                        keyboardType="default"
                        secureTextEntry={true}
                    />

                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.buttonActive}
                            onPress={this.onPressSignUp}
                        >
                            <Text style={styles.buttonActiveText}>Sign up</Text>

                        </Pressable>

                        <Pressable
                            style={styles.buttonInactive}
                            onPress={this.onPressBackToSignIn}
                        >
                            <Text style={styles.buttonInactiveText}>Back to Sign in</Text>

                        </Pressable>
                    </View>


                </View>


            </SafeAreaView>
        );
    }
}
