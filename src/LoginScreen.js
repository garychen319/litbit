import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AuthService from './service/AuthService.js';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super()
    this.authService = new AuthService();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.authService.loginWithFacebook}
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
