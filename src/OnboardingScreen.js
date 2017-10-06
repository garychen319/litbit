import React from 'react';
import { Picker, TextInput, Button, StyleSheet, Text, View } from 'react-native';


export default class OnboardingScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      roomNumber: "",
      dorm:"East Campus",
    }
    this.onPress = this.onPress.bind(this)

    // firebase.database().ref('/counter').once('value').then(snapshot =>
    //   this.setState({
    //     count: snapshot.val().count
    //   })
    // );
  }

  onPress() {
    var dorm = this.state.dorm
    var roomNumber = this.state.roomNumber
    // this.setState({
    //   count: nextCount,
    // })

    console.log(dorm);
    console.log(roomNumber);
    // firebase.database().ref('counter').set({
    //   count: nextCount,
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker} 
          selectedValue={this.state.dorm}
          onValueChange={(itemValue, itemIndex) => this.setState({dorm: itemValue})}
          value={this.state.dorm}>
          <Picker.Item label="East Campus" value="East Campus" />
          <Picker.Item label="Ruggles" value="Ruggles" />
        </Picker>
        <Text style={{}}>Room number: 
          <TextInput
            style={{height: 30, width: 150, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(roomNumber) => this.setState({roomNumber})}
            value={this.state.roomNumber}
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

