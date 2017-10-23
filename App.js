import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/LoginScreen.js';
import * as firebase from 'firebase';
import {StackNavigator} from 'react-navigation';

import secrets from './config/secrets.js';
var firebaseApp = firebase.initializeApp(secrets.firebaseConfig)

const Navigator = StackNavigator({
  Login: { screen: LoginScreen }
});

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    );
  }
}
