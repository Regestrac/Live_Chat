import React, { useEffect } from 'react'
import './ChatBox.css'

const ChatBox = ({ message, socket, setMessage }) => {
  
  useEffect(()=>{
    socket.on("receive_message",(data)=>{
      console.log("Received message data: ");
      console.log(data);
      setMessage(data)
    })
  },[socket])
  return (
   <div className='chat-box'>
   { message && 
      <div className='chats'>
        <div className='user-name'>{message.author}</div>
        <div className='chat-text'>{message.message}</div>
        <div className='chat-time'>{message.time}</div>
      </div > }
    </div>
  )
}

export default ChatBox