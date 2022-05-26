import React from "react";
import Button from '@mui/material/Button'
import Typography from '@material-ui/core/Typography'

const ChatBox = () => {
    return(
        <div className="chat-box">

        <form onSubmit="{}">
            <input id="input" size="large" placeholder="Type something here...."/>
            {/* <input className="input" placeholder="Type something here..."/> */}
            <Button className="send-button" variant="contained" size="large">Send</Button>
        </form>

        </div>
    )
}
export default ChatBox;