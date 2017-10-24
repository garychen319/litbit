import * as firebase from firebase
const uuid = require('uuid/v4');

export default class OrderingService {
  constructor() {
    this.database = firebase.database();
  }

  placeOrder(cart, user) {
    this.database().ref('orders/' + userId).set({
      uuid: uuidv4(),
      user: user,
      cart: cart,
      
    });
  }
}
