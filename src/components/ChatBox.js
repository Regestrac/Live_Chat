import React from 'react'
import './ChatBox.css'

const ChatBox = ({ username, message }) => {
  return (
    <div className='chat-box'>
      <div className='chats'>
        <p className='user-name'>{username}</p>
        <p className='chat-text'>{message}Chat 0</p>
      </div >
      <div className='chats'>
        <p className='user-name'>{username}</p>
        <p className='chat-text'>{message}A</p>
      </div >
      <div className='chats'>
        <p className='user-name'>{username}</p>
        <p className='chat-text'>{message}Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      <div className='chats'>
        <p className='user-name'>{username}</p>
        <p className='chat-text'>{message}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
      </div>
    </div>
  )
}

export default ChatBox