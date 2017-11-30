import React from 'react';
import { Image, TouchableHighlight, Picker, TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import * as firebase from 'firebase';
import {StackNavigator} from 'react-navigation';

import DelivererService from'./service/DelivererService.js';
import OrdererService from './service/OrdererService.js';

const _ = require('lodash');

export default class ConfirmationScreen extends React.Component {
  static navigationOptions = {
    title: "Confirm Order",
  };

  constructor() {
    super();
    this.ordererService = new OrdererService()
    this.delivererService = new DelivererService();

    this.state = {
      cart: {},
      price: 0,
      availableDeliverers: [],
    }
  }

  confirmCart() {
    var uid = this.props.screenProps.user.providerData[0].uid

    _.each(this.state.availableDeliverers, (delivererUid) => {
      
    })
    this.ordererService.addOrderToOrdererPromise(this.state.cart, uid).then((response) => {
      this.props.navigation.navigate('OrderConfirmed', {'user': this.props.screenProps.user, 'cart': this.props.navigation.state.params.cart})
    })
  }

  componentWillMount() {
    this.delivererService.ref.child('available/').on('value', (data) => {
      console.log(_.keys(data.val()))
      this.setState({
        availableDeliverers: _.keys(data.val())
      })
    })
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
            Ready to confirm your order?
          </Text>
          <FlatList
            data={_.values(this.props.navigation.state.params.cart)}
            renderItem={({item}) => <Text style={styles.itemListed}>
            {item.title}: {item.quantityOrdered}
            </Text>}
            />
          <Text style={styles.price}>Price: {this.state.price} </Text>

        <View style={styles.checkoutWrapper}>
          <Button
            style={styles.checkoutButton}
            disabled={_.sum(_.values(this.state.cart)) === 0}
            onPress={() => this.confirmCart()}
            title="Press to confirm"
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
