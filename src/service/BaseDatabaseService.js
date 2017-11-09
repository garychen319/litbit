import * as firebase from firebase;

export default class BaseDatabaseService {
  constructor() {
    this.database = firebase.database();
    this.refPrefix = 'development/'
  }
}
