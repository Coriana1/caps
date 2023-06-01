'use strict';

// const eventEmitter = require('../eventEmitter');

// const pickupHandler = (payload) => {
//   setTimeout(() => {
//     eventEmitter.emit('EVENT', 'pickup', payload);
//     eventEmitter.emit('PICKUP', payload);
//   }, 5000);
// };

// const deliveredHandler = (payload) => {
//   setTimeout(() => {
//     console.log('VENDOR: Thank you for your order', payload.customer);
//     eventEmitter.emit('DELIVERED', payload);
//   }, 500);
// };

// module.exports = { pickupHandler, deliveredHandler };

//commented above out because not needed for lab 12

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

// socket.on and handlers, and emits go here