'use strict';

const eventEmitter = require('../eventEmitter');

const pickupHandler = (payload) => {
  setTimeout(() => {
    eventEmitter.emit('EVENT', 'pickup', payload);
    eventEmitter.emit('PICKUP', payload);
  }, 5000);
};

const deliveredHandler = (payload) => {
  setTimeout(() => {
    console.log('VENDOR: Thank you for your order', payload.customer);
    eventEmitter.emit('DELIVERED', payload);
  }, 500);
};

module.exports = { pickupHandler, deliveredHandler };
