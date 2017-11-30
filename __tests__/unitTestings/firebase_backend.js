import React from 'react';
import 'react-native';
var chai = require('chai');
var sinon = require('sinon');
var Firebase = require('firebase-mock').MockFirebase;
const FirebaseData = require('./litbit_fire.json')

const placeAnOrder = (orderStat) => {
  if(!orderStat){
    FirebaseData.development.deliverers.available[10214312867285232].order = true
  }
};

describe('Firebase', function () {
  // console.log(FirebaseData)
  it('place an order', () => {  
    var orderstatus = FirebaseData.development.deliverers.available[10214312867285232].order
    placeAnOrder(orderstatus);
    orderstatus = FirebaseData.development.deliverers.available[10214312867285232].order
    console.log(orderstatus)
    expect(orderstatus).toEqual(true);
  });
});
