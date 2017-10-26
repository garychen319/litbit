import React from 'react';
import { Image, TouchableHighlight, Picker, TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import * as firebase from 'firebase';
import {StackNavigator} from 'react-navigation';


const _ = require('lodash');

export default class ConfirmationScreen extends React.Component {
  
  navigationOptions = {
    title: "Confirm Order",
  };

  constructor() {
    super();
    this.state = {
      cart: {},
      price: 0,
    }
  }

  returnHome() {
    this.props.navigation.navigate('HomeScreen')
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text style={styles.header}>
            Your Order Has been Confirmed
          </Text>


        <View style={styles.checkoutWrapper}>
          <Button
            style={styles.checkoutButton}
            onPress={() => navigate('Home')}
            title="Return"
            color="#841584"
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
    textAlign: 'center',
    paddingBottom: 40
  },
  price: {
    fontWeight: 'bold',
    fontSize: 30
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

/*
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

            <FlatList
            data={this.props.navigation.state.params.cart}
            renderItem={({item}) => <Text style={styles.itemListed}>
            {item.title}: {item.quantityOrdered}
            </Text>}
            />
            <Text style={styles.price}>Price: {this.state.price} </Text>
*/
