import React from 'react';
import { Image, TouchableHighlight, Picker, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  signOut() {
    firebase.auth().signOut().then(() => {
      console.log("Signed out!")
    }, (error) => {
      console.log("Error occured")
    })
  }

  onPress() {
    console.log("button clicked");
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onPress}>
          <Image
            style={styles.button}
            source={require('./img/cup.png')}
          />
        </TouchableHighlight>
        <Button
          onPress={this.signOut}
          title="Logout"
          color="#841584"
          accessibilityLabel="Login"
        />
      </View>
	  )
  }
}
const styles = StyleSheet.create({
  button: {
    width: 200,
  },
});
