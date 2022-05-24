const express = require('express');
//creating express server
const app = express();
const http = require('http');
const server = http.createServer(app);
//creating http server
const { Server } = require("socket.io");
const PORT = 3005
const cors = require("cors")
app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3005",
        methods: ["GET", "POST"],
    }, 
    //cors allows any origin
});
// reads a JavaScript file executes it
// and then proceeds to return the export object
//server is a class

app.get('/', (req, res) => {
  // function that tells the server what to do when a get request at 
  // the given route is called
  res.sendFile(__dirname + '/src');
});

io.on('connection', (socket) => {
  //making sure the connection is on
  socket.on('chat message', msg =>{
    io.emit('chat message', msg);
    // .emit() sends a message to all the connected clients
  }); 
  console.log('a user connected');
  //msg a user connected displayed when user is connected to server
});
//printing out chat message


http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

server.listen(3005, () => {
  console.log('listening on *:3005');
});