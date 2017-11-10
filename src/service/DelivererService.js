import BaseDatabaseService from './BaseDatabaseService.js';
const uuid = require('uuid/v4');

export default class DelivererService extends BaseDatabaseService {
  constructor() {
    super('/deliverers/');
  }

  getAvailableDeliverers() {
    return this.ref.child('available/').once('value', (snapshot) => {
      return snapshot;
    });
  }

  addAvailableDeliverer(uid) {
    this.ref.child('available/').push({'uid': uid});
  }

  removeAvailableDeliverer(uid) {
    this.ref.child('available/').orderByChild('uid').equalTo(uid).once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        childSnapshot.ref.remove();
      })
    })
  }
}
