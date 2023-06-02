'use strict';

const { io } = require('socket.io-client');

// we establish ourself as a socket client, and connect
const socket = io('http://localhost:3001/caps');

const { orderHandler, thankDriver } = require('./handler');

// emits a pickup event periodically using the orderHandler function, and listens for the delivered event from the server, triggering the thankDriver function with a delay.
setInterval(() => {

  orderHandler(socket);
}, 5000);

socket.on('delivered', (payload) => {
  setTimeout(() => {
    thankDriver(payload);
  }, 1000);
});
