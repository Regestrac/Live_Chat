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
        <div className={!isAuth && "blur"} >
          <ChatBox username={username} roomId={roomId} message={message} socket={socket} />
          <Base setMessage={setMessage} socket={socket} roomId={roomId} username={username} />
        </div>
        {!isAuth &&
          <div className='form-div'>
            <Form setIsAuth={setIsAuth} setUsername={setUsername} setRoomId={setRoomId} socket={socket} roomId={roomId} username={username} />
          </div>}
      </div>
    </div>
  )
}

export default Home