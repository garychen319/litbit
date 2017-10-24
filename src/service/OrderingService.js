import * as firebase from firebase
const uuid = require('uuid/v4');

export default class OrderingService {
  constructor() {
    this.database = firebase.database();
  }

  placeOrder(cart, user) {
    this.database().ref('orders/' + userId).set({
      uuid: uuidv4(),
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
}
