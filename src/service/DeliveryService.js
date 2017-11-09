import BaseDatabaseService from './BaseDatabaseService.js';
const uuid = require('uuid/v4');

export default class OrderingService extends BaseDatabaseService {
  constructor() {
    this.refPrefix = this.refPrefix + 'orders/';
    this.ordersRef = this.database.ref(this.refPrefix)
  }

  

}
