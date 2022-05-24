import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import socketio from "socket.io-client";
import React, { useEffect, useState } from "react";
import Chat from './components/Chat';
import ChatBox from './components/ChatBox';

const SERVER = "http://192.168.1.165:3000";
function App() {
  const [socket, setSocket] = useState("");

  useEffect(() => {
    const newSocket = socketio(SERVER)
    //connecting to the backend
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  // connection established??
  //what do i have to return
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div>
        <Chat socket={socket}/>
        <ChatBox socket={socket}/>
        {/* <div>{socket}</div> */}
      </div>
      <input className="message" placeholder='message...'/>
      <button>Send</button>
      <Footer/>
    </div>
  );
}
//trying to connect to the server using socket.io
export default App;
