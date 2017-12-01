import React from 'react';
import 'react-native';
var chai = require('chai');
var sinon = require('sinon');
var Firebase = require('firebase-mock').MockFirebase;
const FirebaseData = require('./litbit_fire.json')

const acceptAnOrder = (orderStat) => {
  if(!orderStat){
    FirebaseData.development.deliverers.available[10214312867285232].order = true
  }
};

const placeAnOrder = (order) => {
  FirebaseData.development.deliverers.available[10210669950444906].order = order
};

const getOrder = (order) => {
  return FirebaseData.development.deliverers.available[10214312867285232].order != order
};

describe('deliverer service', function () {
  it('accept an order', () => {
    var orderstatus = FirebaseData.development.deliverers.available[10214312867285232].order
    acceptAnOrder(orderstatus);
    orderstatus = FirebaseData.development.deliverers.available[10214312867285232].order
    console.log(orderstatus)
    expect(orderstatus).toEqual(true);
  });

  it('trigger an order', () => {
    var orderstatus = FirebaseData.development.deliverers.available[10214312867285232].order
    placeAnOrder(orderstatus);
    orderstatus = FirebaseData.development.deliverers.available[10214312867285232].order
    console.log(orderstatus)
    expect(orderstatus).toEqual(true);
  });

  it('place an order', () => {
    var order = {
      "cart" : [ {
        "defaultQuantity" : 10,
        "imageUrl" : 1,
        "key" : 1,
        "pricePerDefaultQuantity" : 2.99,
        "quantityOrdered" : 5,
        "title" : "Cups"
      }, {
        "defaultQuantity" : 2,
        "imageUrl" : 2,
        "key" : 2,
        "pricePerDefaultQuantity" : 2.99,
        "quantityOrdered" : 4,
        "title" : "Balls"
      } ],
      "ordererId" : "00000000000000002"
    }
    placeAnOrder(order);
    var delivererData = FirebaseData.development.deliverers.available[10210669950444906].order;
    expect(delivererData).toEqual(order);
  });

  it('get an order from deliverer', () => {
    var order = {
      "cart" : [ {
        "defaultQuantity" : 10,
        "imageUrl" : 1,
        "key" : 1,
        "pricePerDefaultQuantity" : 2.99,
        "quantityOrdered" : 5,
        "title" : "Cups"
      }, {
        "defaultQuantity" : 2,
        "imageUrl" : 2,
        "key" : 2,
        "pricePerDefaultQuantity" : 2.99,
        "quantityOrdered" : 4,
        "title" : "Balls"
      } ],
      "ordererId" : "00000000000000001"
    }
    var getOrderStatus = getOrder(order);
    expect(getOrderStatus).toEqual(true);
  });
});

describe('order service', function () {
  it('finish an order', () => {
    var orderstatus = FirebaseData.development.deliverers.available[10214312867285232].order
    acceptAnOrder(orderstatus);
    orderstatus = FirebaseData.development.deliverers.available[10214312867285232].order
    console.log(orderstatus)
    expect(orderstatus).toEqual(true);
  });
});
