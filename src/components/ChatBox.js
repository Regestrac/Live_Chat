import React from 'react'
import './ChatBox.css'

const ChatBox = ({ username, roomId, message, socket }) => {
  return (
    <div className='chat-box'>
      <div className='chats'>
        <p className='user-name'>{username}</p>
        <p className='chat-text'>{message}Chat 0</p>
      </div >
    </div>
  )
}

export default ChatBox