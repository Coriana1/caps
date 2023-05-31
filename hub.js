'use strict';

let eventEmitter = require('./eventEmiitter');

// handlers
const payload = require('./chance');
const { pickupHandler, deliveredHandler } = require('./vendor');
const { driverHandler, intransitHandler } = require('./driver');

// listeners to all events
driverHandler(payload);
eventEmitter.on('PICKUP', pickupHandler);
eventEmitter.on('IN-TRANSIT', intransitHandler);
eventEmitter.on('DELIVERED', deliveredHandler);
eventEmitter.on('EVENT', (event, payload) => {
  let timestamp = new Date().toISOString();
  console.log(`EVENT: { event: ${event}, time: ${timestamp}, payload: ${JSON.stringify(payload)} }` );
});
