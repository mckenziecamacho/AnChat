const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// const cors = require('cors');

// const socketio = require("socket.io")(server, {
//   cors: {
//     origin: {"*"},
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-custom-header"],
//     credentials: true
//   }
// });

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
});

io.on('connection', (socket) => {
  socket.on('send message', (msg) => {
    console.log(msg)
    io.sockets.emit('message received', msg);
  })
  socket.on('chat messages', (msg) => {
    console.log('message: ' + msg);
  })
})


io.sockets.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });
//emit => broadcast to everybody on url

io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.sockets.emit('chat message', msg);
    //io.sockets.emit
  });
});

server.listen(3005, () => {
  console.log('listening on 3000')
});

