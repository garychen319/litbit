import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/LoginScreen.js';
import * as firebase from 'firebase';

import firebaseConfig from './config/secrets.js';
var firebaseApp = firebase.initializeApp(firebaseConfig)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen></LoginScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    width: 150,
  },
});
