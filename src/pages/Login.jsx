import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux';
import { setpage } from '../controllers/pageController';
import Login_img from '../static/graphics/Login.png'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("form submitted")
  }

  const [showPassword, setshowPassword] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setpage('login'))

  })

  return (
    <>
      <div className='background_3' >
        <Navbar />
        <div className='login'>
          <div className='login-image'>
            <img src={Login_img} alt="loginImage" />

          </div>
          <div className='login-form'>
            <form onSubmit={handleSubmit} >
              <p> Login</p>
              <div className='input-fields'>
                <input onChange={handleChange} name='email' value={creds.email} title='Email' type='email' placeholder='Email' />
                <input onChange={handleChange} name='password' value={creds.password} title='password' type={showPassword ? 'text' : 'password'} placeholder='Password' />

                <div className='bottom-form'  >
                  <div  >
                    <input onClick={() => { setshowPassword(!showPassword) }} checked={showPassword} type='checkbox' label="showpassword" />
                    <span >Show Password</span>
                  </div>
                  <Link to='/forgotpassword' style={{ alignSelf: "center", justifySelf: "flex-end", marginRight: "7rem" }}  > Forgot Password </Link>
                </div>
                <button >Login</button>
                <span> <Link to='/signup' > Dont have an account? <b> Sign Up</b></Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login