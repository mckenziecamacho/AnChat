import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';
import Chat from './components/Chat';




import "./App.css";
import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";


const socket = io("http://localhost:3005");

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
      <Header/>
      <Chat messages={messages}/>
      <ChatBox/>

 

    </div>
  );
}

export default App;
