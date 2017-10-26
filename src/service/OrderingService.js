import * as firebase from firebase;
import BaseDatabaseService from './BaseDatabaseService.js';
const uuid = require('uuid/v4');

export default class OrderingService extends BaseDatabaseService {
  constructor() {
    this.database = firebase.database();
    this.refPrefix = this.refPrefix + 'orders/';
    this.ordersRef = this.database.ref(this.refPrefix)
  }

  placeOrder(cart) {
    var uuid = uuidv4();
    this.database().ref('orders/' + uuid).set({
      uuid: uuid,
      user: firebase.auth().currentUser,
      cart: cart,
      status: 0,
    });
  }
}
