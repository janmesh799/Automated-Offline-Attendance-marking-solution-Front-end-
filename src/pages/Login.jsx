import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { setpage } from '../controllers/pageController';
import Login_img from '../static/graphics/Login.png'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { LoginTeacher } from '../controllers/UserController';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authToken = useSelector(state=>state.user.authToken)
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
    // console.log(creds.email, creds.password)
    dispatch(LoginTeacher({ email: creds.email, password: creds.password }))
  }

  // let token = localStorage.getItem('authToken');
  const [showPassword, setshowPassword] = useState(false);
  useEffect(() => {
    dispatch(setpage('login'))
    // console.log("authToken => ", authToken)
    if (authToken) {
      navigate('/allCourses');
    }
  },[authToken,navigate,dispatch])

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
                    <input onChange={() => { }} onClick={() => { setshowPassword(!showPassword) }} checked={showPassword} type='checkbox' label="showpassword" />
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