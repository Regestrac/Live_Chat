import React from 'react'
import './Header.css'

const Header = ({roomId}) => {
  const room = roomId ? "Room: "+roomId : ""
  return (
    <div className='head'>
      <div className='header'>
        <p className='head-info'>Live Chat</p>
        <p className='info-region'>{room}</p>
      </div>
    </div>
  )
}

export default Header