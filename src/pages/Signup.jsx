import React from 'react'
import Signup_img from "../static/graphics/Signup.png"
import "./Signup.css"

const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup-image'>
        <img src={Signup_img} alt="SignupImage" />

      </div>
      <div>
        <form className='signup-form'>
          <h3> Create Account</h3>
          <div>
            <input placeholder='First Name' />
            <input placeholder='Last Name' />
            <input placeholder='Email' />
            <input placeholder='Password' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup