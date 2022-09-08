import React from 'react'
import Base from './Base'
import ChatBox from './ChatBox'
import Header from './Header'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <ChatBox />
        <Base />
    </div>
  )
}

export default Home