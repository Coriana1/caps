'use strict';

var Chance = require('chance');
const eventEmitter = require('../eventEmitter');

var chance = new Chance();

const orderHandler = (payload=null) => {
  if(!payload){
    payload = {
      store: chance.company(),
      orderId: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }
  console.log('VENDOR: ORDER ready for pickup:', payload);
  eventEmitter.emit('pickup', payload);
};

const thankDriver = (payload) => console.log('VENDOR: Thank you for your order', payload.customer);


const deliveredMessage = (payload) => {
  setTimeout(() => {
    thankDriver(payload);
  }, 1000);
};

module.exports = { orderHandler, deliveredMessage, thankDriver };




// 'use strict';

// let eventEmitter = require('../eventEmitter');


// // extracting the handler makes it testable!
// module.exports = (payload) => {
//   console.log(`Eyes: see brightness of ${payload.brightness}`);
//   eventEmitter.emit('BRIGHTNESS', payload);

// };