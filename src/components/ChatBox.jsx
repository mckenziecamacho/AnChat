import React from "react";
import { useState, useRef } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:3005");


const ChatBox = () => {

    const inputRef = useRef(null);

    const [form, setForm] = useState('');

    function handleChange(e) {
    setForm(e.target.value)
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      socket.emit('send message', form);
    }

    return(
        <div className="chat-box">
        <form
        ref={inputRef}
        onChange={ (e) => handleChange(e) }
        onSubmit={ (e) => {
            inputRef.current.reset();
            handleSubmit(e) }}>
        Message: <input name="message" />
        <button type="submit">Send Message</button>
        </form>
        </div>
    )
}
export default ChatBox;