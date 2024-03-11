import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { COLOURS } from './constants/colours';
import { SIZES } from './constants/sizes';
import UserToken from './components/common/UserToken';
import { useNavigation } from '@react-navigation/native';

export default class CheckMyVehicle extends Component {

  async componentDidMount() {
    const navigation = useNavigation();

    //Check user token
    const userToken = await UserToken.getUserToken();
    if (userToken === null) {
      //User token is not set
      //Redirect user to the signIn page
      navigation.replace('index');
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLOURS.primary }}>
        <ActivityIndicator size="large" color={COLOURS.white} />
        <Text style={{ marginTop: SIZES.large, color: COLOURS.white }}>Please wait</Text>
      </View>
    );
  }
}
