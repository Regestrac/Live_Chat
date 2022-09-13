import React from 'react'
import './ChatBox.css'

const ChatBox = ({ username, roomId, message, socket }) => {
  return (
    <div className='chat-box'>
      <div className='chats'>
        <div className='user-name'>{username}</div>
        <div className='chat-text'>{message}Chat 0</div>
        <div className='chat-time'>03:07 PM</div>
      </div >
    </div>
  )
}

export default ChatBox