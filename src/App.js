import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import socketio from "socket.io-client";
// import React, { useEffect, useState } from "react";
import Chat from './components/Chat';
import ChatBox from './components/ChatBox';
// import { emit } from 'nodemon';
// import io from 'socket.io-client';
// const socket = io.connect("http://localhost:3005")
// //connection to socket server ^^

import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/';
import Form from '@material-ui/core/';
import MyMessage from '@material-ui/core/';
import MyRow from '@material-ui/core/';
import PartnerMessage from '@material-ui/core/';
import PartnerRow from '@material-ui/core/';



import "./App.css";
import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";

const socket = io.connect("http://localhost:3000");



const App = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("");

  const socketRef = useRef();
  
  useEffect(() => { 
    socketRef.current = io.connect("http://localhost:3000");

    //event handlers that the socket listens out for
    socketRef.current.on("your id", id => {
      setYourID(id)
      //event where we are connecting we get our own ids from the server to the client
    })
    socketRef.current.on("message", (message) => {
      receive_message(message);
    })
    
  })
  function receive_message(message){
    setMessages(oldMessages =>[...oldMessages, message])
  }

  function send_message(e) {
    e.preventDefault();
    const messageObject = {
      body: chat,
      id: yourID,
    };
    setMessages("")
    socketRef.current.emit("send message", messageObject);
  }
  function handleChange(e) {
    setMessages(e.targe.value)
  }

return (
<div>
  <Header />
  <ChatBox/>
  <Footer/>
 
<div>
  <Container>
  {messages.map((message, index) => {
    if (message.id === yourID){
      return(
        <MyRow key={index}>
        <MyMessage>
          {message.body}
        </MyMessage>
        </MyRow>
      )
    }
    return(
      <PartnerRow key={index}>
      <PartnerMessage>
      {message.body}
      </PartnerMessage>
      </PartnerRow>
    )
  })}

  </Container>
  <Form onSubmit={send_message}>
  <TextField value={chat} onChange={handleChange} placeholder="Type here....."/>
  <Button>Send</Button>
  </Form>
  </div> 

</div>
);
};

export default App;




// function App() {
//   //Room State
//   const [room, setRoom] = useState("");

//   // Messages States
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");

//   const joinRoom = () => {
//     if (room !== "") {
//       socket.emit("join_room", room);
//     }
//   };

//   const sendMessage = () => {
//     socket.emit("send_message", { message, room });
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, [socket]);
//   return (
//     <div className="App">
//       <input
//         placeholder="Room Number..."
//         onChange={(event) => {
//           setRoom(event.target.value);
//         }}
//       />
//       <button onClick={joinRoom}> Join Room</button>
//       <input
//         placeholder="Message..."
//         onChange={(event) => {
//           setMessage(event.target.value);
//         }}
//       />
//       <button onClick={sendMessage}> Send Message</button>
//       <h1> Message:</h1>
//       {messageReceived}
//     </div>
//   );
// }

// export default App;


// const SERVER = "http://192.168.1.165:3000";
// function App() {
//   const [socket, setSocket] = useState("");

//   useEffect(() => {
//     const newSocket = socketio(SERVER)
//     //connecting to the backend
//     setSocket(newSocket);
//     return () => newSocket.close();
//   }, [setSocket]);
//   // connection established??
//   //what do i have to return
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header/>
//       </header>
//       <div>
//         <Chat socket={socket}/>
//         <ChatBox socket={socket}/>
//         {/* <div>{socket}</div> */}
//       </div>
//       <input className="message" placeholder='message...'/>
//       <button>Send</button>
//       <Footer/>
//     </div>
//   );
// }
// //trying to connect to the server using socket.io
// export default App;
