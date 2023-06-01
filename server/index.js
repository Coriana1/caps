'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;

const server = new Server();
const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('Connected to the CAPS namespace', socket.id);

  socket.on('pickup', (payload) => {
    console.log('Received pickup event:', payload);
    caps.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    console.log('Received in-transit event:', payload);
    caps.to(payload.vendor).emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    console.log('Received delivered event:', payload);
    caps.to(payload.vendor).emit('delivered', payload);
  });

  socket.on('join', (room) => {
    console.log('Joining room:', room);
    socket.join(room);
  });
});

server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

