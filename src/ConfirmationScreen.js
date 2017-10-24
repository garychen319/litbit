import React from 'react';
import { Image, TouchableHighlight, Picker, TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import * as firebase from 'firebase';

const _ = require('lodash');

export default class ConfirmationScreen extends React.Component {
  static navigationOptions = {
    title: "Confirm Order",
  };

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Wrong File!!
        </Text>
        <View style={styles.checkoutWrapper}>
          <Button
            style={styles.checkoutButton}
            onPress={() => this.clearCart()}
            title="Rando Button"
            color="#841584"
            accessibilityLabel="Rando button"
          />
        </View>
      </View>
	  )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  feed: {
    alignItems: 'center',
  },
  itemButtonContainer: {
    alignItems: 'center',
  },
  itemButton: {
    width: 200,
  },
  checkoutButton: {
  },
  checkoutWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  }
});
