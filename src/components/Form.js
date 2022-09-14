import React, { useState } from 'react'
import './Form.css'

const Form = ({ setIsAuth, setUsername, setRoomId, socket, username }) => {
    const [room, setRoom] =useState("")
    const joinRoom = (e) => {
        e.preventDefault();
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setIsAuth(true);
            setRoomId(room);
        }
    }
    return (
        <div className='form-box'>
            <form className='form'>
                <input className='name-input' onChange={(e) => setUsername(e.target.value)} autoComplete='off' type='text' required></input>
                <label className='name-label'><span className='content-name'>Name</span></label>
                <input className='room-input' onChange={(e) => setRoom(e.target.value)} autoComplete='off' type='text' required></input>
                <label className='room-label'><span className='content-room'>Create Room</span></label>
                <button className='enter-btn' onClick={joinRoom} >Enter Chat</button>
            </form>
        </div>
    )
}

export default Form