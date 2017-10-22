import React from 'react';
import Expo from 'expo';
import {View, Button} from 'react-native';
import * as firebase from 'firebase';

var provider = new firebase.auth.GoogleAuthProvider;
const credential = provider.credential(provider)

export default class LoginScreen extends React.Component {
  constructor() {
    super()
    this.onPress = this.onPress.bind(this)
  }

  async fetchToken() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '113910551645-3p8oclffastjura0v6q76fli1uhpnq76.apps.googleusercontent.com',
        iosClientId: '113910551645-d3270cs2082bjo1jcqof3elcm1j9cpg4.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }

  onPress() {
    var token = this.fetchToken()
    console.log(token)

    firebase.auth().signInWithRedirect(provider).then((result) => {
      console.log("Sign in successful")
      // The firebase.User instance:
      var user = result.user;
      console.log(user);
      // The Google firebase.auth.AuthCredential containing the Google
      // access token:
      var credential = result.credential;
    }, (error) => {
      console.log("Sign in error")
      console.log(error)
      // The provider's account email, can be used in case of
      // auth/account-exists-with-different-credential to fetch the providers
      // linked to the email:
      var email = error.email;
      var credential = error.credential;
      // In case of auth/account-exists-with-different-credential error,
      // you can fetch the providers using this:
      // if (error.code === 'auth/account-exists-with-different-credential') {
      //   auth.fetchProvidersForEmail(email).then((providers) => {
      //   });
      // }
    });

    firebase.auth().signOut().then(function() {
      console.log("Sign out successful")
    }).catch(function(error) {
      console.log("Error occured on sign out")
    });
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.onPress}
          title="Login"
          color="#841584"
          accessibilityLabel="Login"
        />
      </View>
    )
  }
}
