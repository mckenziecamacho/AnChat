import React from 'react';
import './App.css';
import Header from './components/Header';
import ChatBox from './components/ChatBox';
import Chat from './components/Chat';
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("http://localhost:3005", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

// const socket = io('http://localhost:3005')

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, [])

  socket.on('message received', (message) => {
  setMessages([...messages, message]) 
  })

  return (
    <div className="App">
      <title>AnChat</title>
      <Header/>
      <Chat messages={messages}/>
      <ChatBox/>
    </div>
  );
}

export default App;
