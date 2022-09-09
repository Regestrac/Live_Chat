import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className='form-box'>
            <form className='form'>
                <label className='label'>Name</label>
                <input placeholder='Name' className='name-input'></input>
                <button className='enter-btn'>Enter Chat</button>
            </form>
        </div>
    )
}

export default Form