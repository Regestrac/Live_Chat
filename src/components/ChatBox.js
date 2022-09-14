import React, { useEffect } from 'react'
import './ChatBox.css'

const ChatBox = ({ socket, setMessageList, messageList }) => {
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data])
      console.log("data::***")
      console.log(data)
    })
  }, [socket]);
  return (
    <div className='chat-box'>
      {messageList && (
        messageList.map((messageContent, index) => {
          console.log(messageList);
          return (
            <div className='chats' key={index} >
              <div className='user-name'>{messageContent.author}</div>
              <div className='chat-text'>{messageContent.message}</div>
              <div className='chat-time'>{messageContent.time}</div>
            </div >
          )
        })
      )}
    </div>
  )
}

export default ChatBox