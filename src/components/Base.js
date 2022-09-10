import React from 'react';
import { useState } from 'react';
import './Base.css'

const Base = ({setMessage}) => {
  const [newMessage, setNewMessage] = useState("")
  return (
    <div className='base'>
        <div >
          <form onSubmit={setMessage( newMessage)} className='msg-box' >
            <input className='input' onChange={(e) =>setNewMessage(e.target.value)} placeholder='Message...'></input>
            <button className='btn' ><i class="fa-sharp fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    </div>
  )
}

export default Base