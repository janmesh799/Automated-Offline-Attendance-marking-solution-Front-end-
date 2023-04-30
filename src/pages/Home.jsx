import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import Logo from "../static/graphics/Logo.png"
import Classroom from "../static/graphics/Classroom.png"

import './Home.css'
import Navbar from '../components/Navbar'
import { setPage } from '../features/applicationData/applicationSlice';


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authToken } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setPage('home'))
    if (authToken) {
      navigate('/dashboard');
    }
  })

  return (<>
    <Navbar />
    <div className='home'>
      <div className='home-component'>
        <div className='logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='welcome-text'>
          <h3>Hassle-free Attendance System for your Classroom
          </h3>
          <p>Reduce to zero late arrivals and attendance excuses. Mark the attendance easily and quickly with Upasthit via Bluetooth, eliminating network issues. Keep the complete attendance history is at your fingertips.</p>
          <button> <Link to='/' >Get Started</Link></button>
        </div>
      </div>

      <div>
        <div className='home-component'>
          <div className='classroom'>
            <img src={Classroom} alt="classroom_pic" />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home