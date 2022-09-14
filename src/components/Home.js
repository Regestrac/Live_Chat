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

  return (
    <div className='home'>
      <div>
        <div className='head-div'>
          <Header roomId={roomId} />
        </div>
        <div className={!isAuth && "blur"} >
          <ChatBox socket={socket} />
          <Base socket={socket} roomId={roomId} username={username} />
        </div>
        {!isAuth &&
          <div className='form-div'>
            <Form setIsAuth={setIsAuth} setUsername={setUsername} setRoomId={setRoomId} socket={socket} username={username} />
          </div>}
      </div>
    </div>
  )
}

export default Home