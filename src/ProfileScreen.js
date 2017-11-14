import React from 'react';
import { Image, TouchableHighlight, Picker, TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import * as firebase from 'firebase';
import {StackNavigator} from 'react-navigation';


const _ = require('lodash');

export default class DeliveryScreen extends React.Component {
  static navigationOptions = {
    title: "Profile",
  };

  constructor() {
    super();
  }

  acceptOrder(){
    this.props.navigation.navigate('AcceptOrder')
    console.log('Navigate to order accept order screen')
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>
            hello111
          </Text>
          <Button
            onPress={() => {this.acceptOrder()}}
            title="Accept"
            color="#841584"
            accessibilityLabel="Accept"
          />

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
  header: {
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingBottom: 40
  },
  price: {
    fontWeight: 'bold',
    fontSize: 40
  },
  itemListed: {
    fontSize: 40,
    textAlign: 'left'
  },
  checkoutButton: {
  },
  checkoutWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  }
});
