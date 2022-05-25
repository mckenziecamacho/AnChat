const express = require('express');
//creating express server
const app = express();
const http = require('http');

//creating http server
// const { Server } = require("socket.io");
// const PORT = 3005
const cors = require("cors")

app.use(cors());

const server = http.createServer(app);
//creating server passing in express app

const socket = require("socket.io");
const io = socket(server);

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"],
//     }, 
//     //cors allows any origin
// });
// reads a JavaScript file executes it
// and then proceeds to return the export object
//server is a class

app.get('/', (req, res) => {
  // function that tells the server what to do when a get request at 
  // the given route is called
  res.sendFile(__dirname + '/src');
});

io.on("connection", socket => {
  socket.emit("your socket id", socket.id);
  //when the server connects the client recieves an id
  socket.on("send message", body => {
    io.emit("message", body)
    //all clients connected should get this event
  })
}) 



// io.on('connection', (socket) => {
//   //making sure the connection is on
//   console.log(`a user connected: ${socket.id}`);
//   //msg a user connected displayed when user is connected to server
//   socket.on("join_room", (data) => {
//     socket.join(data)
//   });
//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });
// });
//printing out chat message



// socket.on('chat message', msg => {
//   io.emit('chat message', msg);
//   // .emit() sends a message to all the connected clients
// }); 

// http.listen(PORT, () => {
//     console.log(`listening on *:${PORT}`);
// });

server.listen(3005, () => {
  console.log('listening on *:3005');
});