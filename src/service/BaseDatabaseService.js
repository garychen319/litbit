import * as firebase from 'firebase';

export default class BaseDatabaseService {
  constructor(refPrefix) {
    this.database = firebase.database();
    this.refPrefix = 'development/' + refPrefix;
    this.ref = firebase.database().ref(this.refPrefix);
  }
}
