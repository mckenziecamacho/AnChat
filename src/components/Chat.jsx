import React from 'react';
import io from "socket.io-client";
const socket = io("http://localhost:3005");

function Chat (props) {
    return(
        <div className='chat'>
        {
          props.messages.map(message => {
            return (
              <p>{message}</p>
            )
          })
        }
      </div>


    )


}
export default Chat;