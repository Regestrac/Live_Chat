import React from 'react';
import './Base.css'

const Base = () => {
  return (
    <div className='base'>
        <div className='msg-box'>
            <input className='input' placeholder='Message...'></input>
            <button className='btn'>Send</button>
        </div>
    </div>
  )
}

export default Base