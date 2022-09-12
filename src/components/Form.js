import React from 'react'
import './Form.css'

const Form = ({setIsAuth, setUsername, setRoomId }) => {
    return (
        <div className='form-box'>
            <form className='form' onSubmit={()=>setIsAuth(true)} >
                <input className='name-input' onChange={(e)=>setUsername(e.target.value)} autoComplete='off' type='text' required></input>
                <label className='name-label'><span className='content-name'>Name</span></label>
                <input className='room-input' onChange={(e)=>setRoomId(e.target.value)} autoComplete='off' type='text' required></input>
                <label className='room-label'><span className='content-room'>RoomID</span></label>
                <button className='enter-btn' >Enter Chat</button>
            </form>
        </div>
    )
}

export default Form