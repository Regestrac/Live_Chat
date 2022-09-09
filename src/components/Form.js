import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className='form-box'>
            <form className='form'>
                <input className='name-input' autoComplete='off' type='text' required></input>
                <label className='name-label'><span className='content-name'>Name</span></label>
                <button className='enter-btn'>Enter Chat</button>
            </form>
        </div>
    )
}

export default Form