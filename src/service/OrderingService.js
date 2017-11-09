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


/*
Ordering flow

1. Order comes in
2. Get list of all available deliverers
3. For each deliverer:
  send a push notification
  if accepts
    assign order to deliverer
    write order to database
    update deliverer status
    return
4. return error: no deliverers found.
*/
