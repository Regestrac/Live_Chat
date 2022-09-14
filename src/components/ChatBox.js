import React, { useEffect, useState } from 'react'
import './ChatBox.css'
export const messageListContext = React.createContext()
const ChatBox = ({ socket }) => {
  const [messageList, setMessageList] = useState([])
  useEffect(()=>{
    socket.on("receive_message",(data)=>{
      console.log("Received message data: ");
      console.log(data);
      setMessageList((list)=>[...list, data])
    })
  },[socket])
  return (
    <messageListContext.Provider value={ setMessageList } >
   <div className='chat-box'>
   { messageList && messageList.map((messageContent, index)=>{
      return(
     <div className='chats' key={index} >
        <div className='user-name'>{messageContent.author}</div>
        <div className='chat-text'>{messageContent.message}</div>
        <div className='chat-time'>{messageContent.time}</div>
      </div > 
      )})}
    </div>
    </messageListContext.Provider>
  )
}

export default ChatBox