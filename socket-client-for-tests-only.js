'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');


module.exports = socket;

// create a socket and take it over with a mock! 
// sets up a Socket.IO client that connects to a Socket.IO server running on http://localhost:3001/caps and exports the client object for further usage in other parts of the codebase.