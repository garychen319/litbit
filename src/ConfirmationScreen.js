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
          <Text style={styles.header}>
            Ready to confirm your order?
          </Text>
          <FlatList
            data={[
              {
                key: 1,
                title: 'Cups',
                imageUrl: require('./img/cup.png'),
                quantityOrdered: 10,
                price: 10
              },
              {
                key: 2,
                title: 'Balls',
                imageUrl: require('./img/cup.png'),
                quantityOrdered: 2,
                price: 5
              },
            ]}
            renderItem={({item}) => <Text style={styles.itemListed}>
            {item.title}: {item.quantityOrdered}</Text>}/>
          <Text style={styles.price}>Price: </Text>

        <View style={styles.checkoutWrapper}>
          <Button
            style={styles.checkoutButton}
            onPress={() => this.clearCart()}
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
