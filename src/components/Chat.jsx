import React from "react";
// import { socket } from "socket.io-client";

// const Chat = () => {
//   socket.emit("messageFromClient", "Hi!");
//   socket.on("messageFromServer", message => console.log(message));
// }
// export default Chat;



const Chat = (messages) => {
    console.log(messages)
    // return(
    //     <div>
    //      {messages.map((message, index) => {
    //     if (message.id === yourID) {
    //       return (
    //         {message.body}
    //       )
    //     }
    //     </div>
    // )
}
export default Chat;




// function Chat({ socket }) {
    // const [chat, setChat] = useState({});

    // useEffect(() => {
    //     const chatListener = (chat) => {
    //         setChat((previousChat) => {
    //             const newChat = {...previousChat};
    //             // spread opperator allows an iterable such as an array expression or string to be expanded or an object expression to be expanded wherever placed
    //             newChat[chat.id] = chat;
    //             return newChat;
    //         });
    //     };
    //     const deleteChatListener = (chatID) => {
    //         setChat((previousChat) =>{
    //             const newChat = {...previousChat};
    //             delete newChat [chatID]
    //             return newChat;
    //         });
    //     };
    //     socket.on('chat', chatListener);
    //     socket.on('deleteChat', deleteChatListener)
    //     socket.emit('getChat');

    //     return () => {
    //         socket.off('chat', chatListener);
    //         socket.off('deleteChat', deleteChatListener)
    //     };
    // }, [socket]);



// }
// export default Chat;