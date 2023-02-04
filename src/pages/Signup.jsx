import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Signup_img from "../static/graphics/Signup.png"
import { useDispatch } from 'react-redux';
import { setpage } from '../controllers/pageController';
import "./Signup.css"


const Signup = () => {

  const [creds, setCreds] = useState({
    name:"",
    email: "",
    password: "",
    cpassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (creds.password !== creds.cpassword) {
      alert('password and Show password should be same');
      return;
    }
    alert("form submitted")
  }
  
  const [showPassword, setshowPassword] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setpage('signup'))

  })

  return (
    <>
      <div className='background_2' >
      

        <Navbar />
      
        <div className='signup'>
          <div className='signup-image'>
            <img src={Signup_img} alt="SignupImage" />

          </div>
          <div className='signup-form'>
            <form onSubmit={handleSubmit} >
              <p> Create Account</p>
              <div className='input-fields'>
                <input onChange={handleChange} name='name' value={creds.name} title='Name' type='text' placeholder='Name' />
                <input onChange={handleChange} name='email' value={creds.email} title='Email' type='email' placeholder='Email' />
                <input onChange={handleChange} name='password' value={creds.password} title='password' type='password' placeholder='Password' />
                <input onChange={handleChange} name='cpassword' value={creds.cpassword} title='Confirm Password' type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' />
                <div className='show-password-check-box' >
                  <input onClick={() => { setshowPassword(!showPassword) }} checked={showPassword} style={{ width: '5%', marginLeft: "7rem" }} type='checkbox' label="showpassword" />
                  <span style={{ alignSelf: "center" }}>Show Password</span>
                </div>
                <button>Create Acccount</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup