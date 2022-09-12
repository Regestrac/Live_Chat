import React from 'react'
import './Home.css'
import Base from './Base'
import ChatBox from './ChatBox'
import Header from './Header'
import Form from './Form'
import { useState } from 'react'
import io from "socket.io-client"

const socket = io.connect("http://localhost:3001");

const Home = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [username, setUsername] = useState("")
  const [roomId, setRoomId] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div className='home'>
      <div>
        <div className='head-div'>
          <Header />
        </div>
        <div className={!isAuth && "blur" } >
          <ChatBox username={username} roomId={roomId} message={message} />
          <Base setMessage={setMessage} />
        </div>
       {!isAuth &&
        <div className='form-div'>
          <Form setIsAuth={setIsAuth} setUsername={setUsername} setRoomId={setRoomId} socket={socket} />
        </div>}
      </div>
    </div>
  )
}

export default Home