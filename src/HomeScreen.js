import React from 'react';
import { Image, TouchableHighlight, Picker, TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import * as firebase from 'firebase';
// import {StackNavigator} from 'react-navigation';


const _ = require('lodash');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
  };

  constructor() {
    super();
    this.state = {
      cart: {
        1: 0,
        2: 0,
      },
      items: [
        {
          key: 1,
          title: 'Cups',
          imageUrl: require('./img/cup.png'),
          defaultQuantity: 10,
        },
        {
          key: 2,
          title: 'Balls',
          imageUrl: require('./img/cup.png'),
          defaultQuantity: 2,
        },
      ]
    }
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      console.log("Signed out!")
    }, (error) => {
      console.log("Error occured")
    })
  }

  checkoutCart() {
    this.props.navigation.navigate('Confirm')
    console.log('Navigate to order confirmation screen')
  }

  delivery() {
    this.props.navigation.navigate('Delivery')
    console.log('Navigate to delivery mode')
  }

  clearCart() {
    this.setState(_.merge({}, this.state, {
      cart: _.mapValues(this.state.cart, () => 0)
    }))
  }

  onPress(item) {
    var count = this.state.cart[item.key];
    this.setState(_.merge({}, this.state, {
      cart: {
        [item.key]: count+1,
      }
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.checkoutButton}
          onPress={() => {this.delivery()}}
          title="Delivery"
          color="#841584"
          accessibilityLabel="Delivery"
        />
        <FlatList
          contentContainerStyle={styles.feed}
          horizontal = {true}
          data = {this.state.items}
          renderItem={({item}) => {
            return (
              <View style={styles.itemButtonContainer}>
                <TouchableHighlight onPress={() => this.onPress(item)}>
                  <Image
                    style={styles.itemButton}
                    source={item.imageUrl}
                  />
                </TouchableHighlight>
                <Text> { item.title } </Text>
              </View>
            )
          }}
        />
        <View style={styles.checkoutWrapper}>
          <View>
            <FlatList
              data = {this.state.items}
              renderItem={({item}) => {
                return (
                  <Text>
                    {item.title}: {this.state.cart[item.key] * item.defaultQuantity}
                  </Text>
                )
              }}
            />
          </View>
          <Button
            style={styles.checkoutButton}
            onPress={() => this.clearCart()}
            title="Clear Cart"
            color="#841584"
            accessibilityLabel="Clear Cart"
          />
          <Button
            style={styles.checkoutButton}
            disabled={_.sum(_.values(this.state.cart)) === 0}
            onPress={() => {this.checkoutCart()}}
            title="Checkout"
            color="#841584"
            accessibilityLabel="Checkout"
          />
        </View>
      </View>
	  )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
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
