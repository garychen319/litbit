import React from 'react';
import { Image, TouchableHighlight, Picker, AppRegistry, TextInput, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import AuthService from './service/AuthService.js';
import OrderService from './service/OrderService.js';
import DelivererService from './service/DelivererService.js';

import {StackNavigator, NavigationActions} from 'react-navigation';

const _ = require('lodash');

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})


export default class DeliveryScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Enter Delivery Info",
    //headerRight: <Button title='Done' onPress={() => navigation.dispatch(resetAction)}/>,
    //Change headerRight onPress function to do something with data
    //headerLeft is <-Home
  });

  constructor() {
    super();
    this.authService = new AuthService();
    this.delivererService = new DelivererService();
    this.orderService = new OrderService();
    this.state = {
      pendingDelivery: null,
      delivererUid: null,
    }

    this.state = {
    dorm: '',
    roomno:'',
    phone:''};
  }


  renderDefault() {
    return (
      <View style={styles.container}>

        <Text style={styles.titletext}>
          Please Enter Your Delivery Info:
        </Text>
        <Text></Text>

        <TextInput
          style={{height: 40}}
          placeholder="Dorm"
          onChangeText={(dorm) => this.setState({dorm})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Room Number"
          onChangeText={(roomno) => this.setState({roomno})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Phone Number"
          onChangeText={(phone) => this.setState({phone})}
        /> 

      {/*Change this button, info is stored in this.state, pressing button prints to console*/}
        <Button title="Submit" 
        onPress={() => console.log("Dorm:", this.state.dorm,
        "Room #:", this.state.roomno, "Phone #:", this.state.phone)}/>

      </View>

    )
  }









  renderDelivery() {
    return (
      <View style={styles.container}>

      </View>
    )
  }

  componentWillMount() {
    var uid = this.props.screenProps.user.providerData[0].uid;
    if(!_.isNull(uid)) {
      this.setState(_.merge({}, this.state, {
        delivererUid: uid
      }))
    }
    var currentDeliveryRef = this.delivererService.ref.child('available/' + uid + '/order');

    currentDeliveryRef.on('value', (data) => {
      this.setState(() => {
        return { pendingDelivery: data.val() }
      });
    });
  }

  componentWillUnmount() {
    var currentDeliveryRef = this.delivererService.ref.child('available/' + this.state.delivererUid);
    currentDeliveryRef.off();
  }

  render() {
    var hasDelivery = Boolean(this.state.pendingDelivery);
    var hasAccepted = Boolean(this.state.pendingDelivery && this.state.pendingDelivery.delivererId)
    if (hasDelivery) {
      if (hasAccepted) {
        return this.renderDelivery();
      }
      return this.renderConfirmation();
    }
    return this.renderDefault();
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
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
  titletext: {
    fontSize: 18,
  },
  checkoutButton: {
  },
  myinfo: {
    fontSize: 25,
    textAlign: 'left'
  },
  checkoutWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  }
});
