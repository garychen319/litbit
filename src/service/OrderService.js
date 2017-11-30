import BaseDatabaseService from './BaseDatabaseService.js';
import DelivererService from './DelivererService.js';
import OrdererService from './OrdererService.js';
const uuid = require('uuid/v4');

export default class OrderService extends BaseDatabaseService {
  constructor() {
    super('/orders/');
    this.delivererService = new DelivererService();
    this.ordererService = new OrdererService();
  }

  finishOrder(delivererUid) {
    var finishedOrder = this.delivererService.removeOrderFromDeliverer(delivererUid)
    console.log(finishedOrder)
    this.ordererService.removeOrderFromOrderer(finishedOrder.ordererId)
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
