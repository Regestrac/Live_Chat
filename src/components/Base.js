import React from 'react';
import { useState } from 'react';
import './Base.css'

const Base = ({ setMessage }) => {
  const [newMessage, setNewMessage] = useState("")
  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage !== "") {
      setMessage(newMessage);
    }
  }
  return (
    <div className='base'>
      <div >
        <form className='msg-box' >
          <input className='input' onChange={(e) => setNewMessage(e.target.value)} placeholder='Message...'></input>
          <button className='btn' onClick={sendMessage} ><i class="fa-sharp fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  )
}

export default Base