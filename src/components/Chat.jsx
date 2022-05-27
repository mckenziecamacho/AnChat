import React from 'react';
import io from "socket.io-client";
const socket = io("http://localhost:3005");

function Chat (props) {
    return(
        <div className='chat'>
        {
          props.messages.map(message => {
            return (
              <div className='chat-message'>
                <p key="key">{message}</p>
              </div>
              
             
            )
          })
        }
      </div>
    )
}
export default Chat;