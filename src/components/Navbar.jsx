import { useEffect } from "react";
import { Link } from "react-router-dom"
import './Navbar.css'

import { useSelector, useDispatch } from 'react-redux';
import { setpage } from '../controllers/pageController';
import Wordmark from "../static/graphics/Wordmark.png"
const Navbar = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page).activePage.activePage;
  // console.log(page)
  useEffect(()=>{
    
  })
  // const page = "home";
  return (
    <div className="navbar">
      {// for Logo
      }
      <div>
        <img className="wordmark" src={Wordmark} alt="wordmark" />
      </div>
      {
        //for tabs
      }
      <div style={{ display: "flex" }}>
        <ul className="nav-links">
          <Link className={page === "home" ? 'active-nav-link nav-link' : 'nav-link'} to='/'>
            <button onClick={() => { dispatch(setpage("home")) }} > Home</button>
          </Link>
          <Link className={page === "about" ? 'active-nav-link nav-link' : 'nav-link'} to='/about'>
            <button onClick={() => { dispatch(setpage("about")) }}> About Us</button>
          </Link>
          <Link className={page === "login" ? 'active-nav-link nav-link' : 'nav-link'} to='/login'>
            <button onClick={() => { dispatch(setpage("login")) }}> Login</button>
          </Link>
          <Link className={page === "signup" ? 'active-nav-link nav-link' : 'nav-link'} to='/signup'>
            <button onClick={() => { dispatch(setpage("signup")) }}> Signup</button>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar