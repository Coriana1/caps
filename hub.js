'use strict';

const eventEmitter = require('./eventEmitter');

// making system aware of vendor and driver
require('./vendor/index');
require('./driver/index');

// listeners: listen to all events and log expected content
eventEmitter.on('pickup', (payload) => logger('pickup', payload));
eventEmitter.on('in-transit', (payload) => logger('in-transit', payload));
eventEmitter.on('delivered', (payload) => logger('delivered', payload));

// logs the event, a timestamp and the payload
function logger(event, payload){
  const timestamp = new Date();
  console.log('EVENT: ', { event, timestamp, payload });
}
