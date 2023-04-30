import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import Login_img from '../static/graphics/Login.png'
import './Login.css'
import { reset, login } from "../features/auth/authSlice"
import Spinner from '../components/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { setPage } from '../features/applicationData/applicationSlice';
const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [creds, setCreds] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setCreds((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authToken, user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setPage('login'))
    if (authToken) {
      navigate('/dashboard')
    }
    if (isError) {
      // console.log("yes")
      toast.error(message);
    }
    if (isSuccess || user) {
      console.log(isSuccess, user)
      navigate('/')
    }
    dispatch(reset());
  }, [user, authToken, isError, isSuccess, message, navigate, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData))
  }
  const { email, password } = creds;

  if (isLoading) {
    return <Spinner />
  }

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