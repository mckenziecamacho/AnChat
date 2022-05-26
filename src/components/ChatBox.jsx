import React from "react";

const ChatBox = () => {
    return(
        <div className="chat-box">

        <form onSubmit="{}">
            <input className="input" placeholder="Type something here..."/>
            <button className="send-button">Send</button>
        </form>

        </div>
    )
}
export default ChatBox;