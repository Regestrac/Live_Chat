import React from 'react'
import './Form.css'

const Form = ({setIsAuth, setName}) => {
    return (
        <div className='form-box'>
            <form className='form' onSubmit={()=>setIsAuth(true)} >
                <input className='name-input' onChange={(e)=>setName(e.target.value)} autoComplete='off' type='text' required></input>
                <label className='name-label'><span className='content-name'>Name</span></label>
                <button className='enter-btn' >Enter Chat</button>
            </form>
        </div>
    )
}

export default Form