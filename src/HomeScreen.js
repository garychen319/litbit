import React from 'react';
import { Image, TouchableHighlight, Picker, TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  
  onPress() {
    console.log("button clicked");
  }

  render() {
    return (
		<TouchableHighlight onPress={this.onPress}>
	      <Image
	        style={styles.button}
	        source={require('./img/cup.png')}
	      />
	    </TouchableHighlight>    
	)
  }
}
const styles = StyleSheet.create({
  button: {
    width: 200,
  },
});
