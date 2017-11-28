import BaseDatabaseService from './BaseDatabaseService.js';
const _ = require('lodash');

export default class DelivererService extends BaseDatabaseService {
  constructor() {
    super('/deliverers/');
    this.addAvailableDeliverer = this.addAvailableDeliverer.bind(this);
    this.removeAvailableDeliverer = this.removeAvailableDeliverer.bind(this);
  }

  getAvailableDeliverers() {
    return this.ref.child('available/').once('value', (snapshot) => {
      return snapshot;
    });
  }

  toggleAvailableDeliverer(uid) {
    this.ref.child('available/' + uid).once('value', (snapshot) => {
      if (!snapshot.exists()) {
        this.addAvailableDeliverer(uid)
      } else {
        this.removeAvailableDeliverer(uid)
      }
    })
  }

  addAvailableDeliverer(uid) {
    this.ref.child('available/' + uid).set({order: ''});
  }

  removeAvailableDeliverer(uid) {
    this.ref.child('available/').orderByChild('uid').equalTo(uid).once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        childSnapshot.ref.remove();
      })
    })
  }

  addOrderToDeliverer(newOrder, uid) {
    this.ref.child('available/' + uid).set({order: newOrder})
  }

  removeOrderFromDeliverer(uid) {
    var removedOrder;
    this.ref.child('available/' + uid + '/order').once('value', (snapshot) => {
      if (snapshot.exists()) {
        removedOrder = snapshot.val();
        snapshot.ref.set(false);
      } else {
        console.log("Snapshot does not exist");
      }
    })
    return removedOrder;
  }

  getOrderFromDeliverer(uid) {
    var order;
    this.ref.child('available/' + uid + '/order').once('value', (snapshot) => {
      if (snapshot.exists()) {
        order = snapshot.val();
      } else {
        order = null;
      }
    })
    return order;
  }

  acceptOrder(uid) {
    var orderRef = this.ref.child('available/' + uid + '/order');
    console.log(orderRef)
    return orderRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        if (!_.isUndefined(snapshot.val.delivererId)) {
          console.log("Deliverer ID already defined is not null")
        } else {
          snapshot.ref.child('delivererId').set(uid)
        }
      } else {
        console.log("Order doesn't exist")
      }
    })
  }

}
