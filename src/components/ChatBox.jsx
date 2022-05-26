import React from "react";
import { useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:3005");
// import Button from '@mui/material/Button'
// import Typography from '@material-ui/core/Typography'

const ChatBox = () => {
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
        onChange={ (e) => handleChange(e) }
        onSubmit={ (e) => handleSubmit(e) }>
        Message <input name="message" />
        <button type="submit">Send Message</button>
      </form>
        </div>
    )
}
export default ChatBox;