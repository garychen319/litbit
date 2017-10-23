import React from 'react';
import { Image, TouchableHighlight, Picker, TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
  };

  signOut() {
    firebase.auth().signOut().then(() => {
      console.log("Signed out!")
    }, (error) => {
      console.log("Error occured")
    })
  }

  onPress() {
    console.log("button clicked");
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {[
            {
              key: 'cups',
              title: 'Cups',
              imageUrl: require('./img/cup.png'),
              defaultQuantity: 10,
            }
          ]}
          renderItem={({item}) => {
            return (
              <View style={styles.itemButtonContainer}>
                <TouchableHighlight onPress={this.onPress}>
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
            <Button
              style={styles.checkoutButton}
              onPress={() => {}}
              title="Checkout"
              color="#841584"
              accessibilityLabel="Login"
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
    alignItems:'flex-start',
    padding: 15,
  }
});
