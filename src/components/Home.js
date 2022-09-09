import React from 'react'
import './Home.css'
import Base from './Base'
import ChatBox from './ChatBox'
import Header from './Header'
import Form from './Form'

const Home = () => {
  return (
    <div className='home'>
      <div>
        <Header />
        <ChatBox />
        <Base />
        <Form />
      </div>
    </div>
  )
}

export default Home