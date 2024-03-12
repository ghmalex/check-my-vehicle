//
// App: Check My Vehicle
// Author: Alex Ghimici
// Student ID: 20136277
//
// Github: https://github.com/ghmalex/check-my-vehicle.git
//
// SignInScreen.js
// Sign in screen component, responsible for loading sign in components
//
// Last Updated: 12/03/2024
//

import React, { Component } from 'react'
import { SafeAreaView, Text, View, Image, Pressable } from 'react-native';
import styles from '../styles/styles';
import { TextInput } from 'react-native-web';
import RequestManager from '../components/common/RequestManager';
import Encryption from '../components/common/Encryption';
import UserToken from '../components/common/UserToken';


export default class SignInScreen extends Component {

  //Class constructor
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  //Change the value of email when entered
  onChangeTextEmail = (text) => {
    this.setState({ email: text });
  }

  //Change the value of password when entered
  onChangeTextPassword = (text) => {
    this.setState({ password: text });
  }

  //Sign in
  onPressSignIn = async () => {
    //Get data
    const email = this.state.email;
    const password = this.state.password;

    //Encrypt data
    const emailEncrypted = Encryption.encrypt(email);
    const passwordEncrypted = Encryption.encrypt(password);

    //Send request to sign up
    try {
      const response = await RequestManager.sendRequestAuthentication('sign_in', {
        email: emailEncrypted,
        password: passwordEncrypted,
      });
      //Check response
      if (response.result === 'successful') {
        //Sign up successful
        //Display message
        const responseMessage = response.message;
        alert(responseMessage);

        //Set user token
        const userToken = response.user_token;
        await UserToken.setUserToken(userToken);

        //Redirect user to the loading screen
        //This will validate the new user token and
        //automatically redirect the user to the home screen
        this.props.navigation.replace("LoadingScreen");

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

  //Create an account
  onPressCreateAnAccount = () => {
    //Redirect to create account page 
    this.props.navigation.navigate("SignUpScreen");
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../assets/images/authentication_banner.png')}
          style={styles.authenticationBannerImage}
        />
        <View style={styles.containerAuthentication}>

          <Text style={styles.heading}>Sign in</Text>

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

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.buttonActive}
              onPress={this.onPressSignIn}
            >
              <Text style={styles.buttonActiveText}>Sign in</Text>

            </Pressable>

            <Pressable
              style={styles.buttonInactive}
              onPress={this.onPressCreateAnAccount}
            >
              <Text style={styles.buttonInactiveText}>Create an account</Text>

            </Pressable>
          </View>


        </View>


      </SafeAreaView>
    );
  }
}
