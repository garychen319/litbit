import React from 'react';
import { Image, TouchableHighlight, Picker, TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import * as firebase from 'firebase';
import {StackNavigator} from 'react-navigation';


const _ = require('lodash');

export default class ConfirmationScreen extends React.Component {
  static navigationOptions = {
    title: "Confirm Order",
    headerLeft: null,
  };

  constructor() {
    super();
    this.state = {
      cart: {},
      price: 0,
    }
  }

  returnHome() {

    this.props.navigation.navigate('Home')
  }

  componentDidMount() {
    var cart = this.props.navigation.state.params.cart
    var price = _.sum(_.map(cart, (item) => {
      return item.quantityOrdered*item.pricePerDefaultQuantity
    }))

    this.setState(_.merge({}, this.state, {
      cart: this.props.navigation.state.params.cart,
      price: price,
    }))
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>
            Your order has been confirmed! {"\n"}
          </Text>

          <Text style={styles.header2}>Order Summary: </Text>
           
          <FlatList
            data={this.props.navigation.state.params.cart}
            renderItem={({item}) => <Text style={styles.itemListed}>
            {item.title}: {item.quantityOrdered}
            </Text>}
            />

          <Text style={styles.price}>Total price: {this.state.price} </Text>

        <View style={styles.checkoutWrapper}>
          <Button
            style={styles.checkoutButton}
            onPress={() => this.returnHome()}
            title="Return Home"
            color="#841584"
            accessibilityLabel="Press to confirm"
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
  header: {
    fontSize: 28,
    textAlign: 'center',
    paddingBottom: 40
  },
   header2: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 40
  },
  price: {
    fontSize: 30
  },
  itemListed: {
    fontSize: 25,
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
