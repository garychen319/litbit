import React from 'react';
import { Picker, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from "./src/OnboardingScreen.js"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <OnboardingScreen/>
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
