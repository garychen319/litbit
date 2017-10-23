import React from 'react';
import Expo from 'expo';
import {View, Button, StyleSheet} from 'react-native';
import secrets from '../config/secrets.js';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super()
    this.loginWithFacebook = this.loginWithFacebook.bind(this)
  }

  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      secrets.facebookSecrets.appId,
      { permissions: ['public_profile', 'email'] }
    );

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.loginWithFacebook}
          title="Login"
          color="#841584"
          accessibilityLabel="Login"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
