import BaseDatabaseService from './BaseDatabaseService.js';
import DelivererService from './DelivererService.js';
const uuid = require('uuid/v4');

export default class OrderService extends BaseDatabaseService {
  constructor() {
    super('/orders/');
    this.delivererService = new DelivererService();
  }

  finishOrder(delivererUid) {
    var finishedOrder = this.delivererService.removeOrderFromDeliverer(delivererUid)
    this.ref.push(finishedOrder);
  }
}


/*
Ordering flow

1. Order comes in
2. Get list of all available deliverers
3. For each deliverer:
  await notifyDeliverer(delivererId, order)
  if accepts
    assign order to deliverer
    write order to database
    update deliverer status
    return
4. return error: no deliverers found.
*/
