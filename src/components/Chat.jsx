import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const newMessage = "newChatMessage";
const SERVER = "http://localhost:3000";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io(SERVER)
    });

    socketRef.current.on(newMessage, (message) => {
        const incomingMessage = {
            currentUser: message.senderId === socketRef.current.id,
        };
        setMessages((messages) => [...messages, incomingMessage]);
    });
    return () => {
        socketRef.current.disconnect();
    };
    const sendMessage = (messageBody) => {
        socketRef.current.emit(newMessage, {
            body: messageBody,
            senderId: socketRef.current.id,
        })
    }
    return { messages, sendMessage }
}
export default Chat;