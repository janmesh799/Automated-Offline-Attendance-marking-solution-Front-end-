import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Signup_img from "../static/graphics/Signup.png"
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import "./Signup.css"
import { toast } from 'react-toastify'

import { setPage } from '../features/applicationData/applicationSlice';
import { reset, signup } from '../features/auth/authSlice';


const Signup = () => {
  // const authToken = null
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {  authToken, isLoading, isError,  message } = useSelector((
    state) => state.auth
  )
  useEffect(() => {
    dispatch(setPage('signup'));
    if (isError) {
      // console.log("yes")
      toast.error(message);
    }
    if (authToken) {
      navigate('/dashboard')
    }
    dispatch(reset());
  }, [isError,authToken, message, navigate, dispatch])


  const handleChange = (e) => {
    setCreds((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === cpassword) {
      const data = { name, email, password };

      dispatch(signup(data))
    }
  }
  const { name, email, password, cpassword } = creds;
  const [showPassword, setshowPassword] = useState(false);
  if (isLoading) {
    return (
      <Spinner />
    )
  }


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
                  <input onChange={() => { }} onClick={() => { setshowPassword(!showPassword) }} checked={showPassword} style={{ width: '5%', marginLeft: "7rem" }} type='checkbox' label="showpassword" />
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