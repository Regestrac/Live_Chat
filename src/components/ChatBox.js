import React, { useEffect } from 'react'
import './ChatBox.css'

const ChatBox = ({ socket, setMessageList, messageList, username }) => {
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data])
    })
  }, [socket]);
  return (
    <div className='chat-box'>
      {messageList && (
        messageList.map((messageContent, index) => {
          return (
            <div id={username === messageContent.author ? "you" : "other"}>
            <div className='chats' key={index}  >
              <div className='user-name'>{messageContent.author}</div>
              <div className='chat-text'>{messageContent.message}</div>
              <div className='chat-time'>{messageContent.time}</div>
            </div >
            </div>
          )
        })
      )}
    </div>
  )
}

export default ChatBox