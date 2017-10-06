import React from 'react';
import { Picker, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from "./src/OnboardingScreen.js"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "",
    }
    this.onPress = this.onPress.bind(this)

    // firebase.database().ref('/counter').once('value').then(snapshot =>
    //   this.setState({
    //     count: snapshot.val().count
    //   })
    // );
  }

  onPress() {
    // var nextCount = this.state.count + 1
    // this.setState({
    //   count: nextCount,
    // })
    // firebase.database().ref('counter').set({
    //   count: nextCount,
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker} 
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="EastCampus" value="East Campus" />
          <Picker.Item label="Ruggles" value="Ruggles" />
          <Picker.Item label="Hogan" value="Ruggles" />
        </Picker>
        <Text style={{}}>Room number: 
          <TextInput
            style={{height: 30, width: 150, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </Text>
        <Button
          onPress={this.onPress}
          title="submit"
          color="#841584"
        />
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
