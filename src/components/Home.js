import React from 'react'
import './Home.css'
import Base from './Base'
import ChatBox from './ChatBox'
import Header from './Header'
import Form from './Form'
import { useState } from 'react'

const Home = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [name, setName] = useState("")
  console.log(name)
  return (
    <div className='home'>
      <div>
        <div className='head-div'>
          <Header />
        </div>
        <div className={!isAuth && "blur" } >
          <ChatBox name={name} />
          <Base />
        </div>
       {!isAuth &&
        <div className='form-div'>
          <Form setIsAuth={setIsAuth} setName={setName} />
        </div>}
      </div>
    </div>
  )
}

export default Home