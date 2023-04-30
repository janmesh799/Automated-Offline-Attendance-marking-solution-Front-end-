import { useEffect } from "react";
import { Link } from "react-router-dom"
import './Navbar.css'
import { useSelector } from 'react-redux';
import Wordmark from "../static/graphics/Wordmark.png"


const Navbar = () => {
  // const dispatch = useDispatch();
  const page = useSelector((state) => state.application.page)
  useEffect(() => {

  })
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
            <button > Home</button>
          </Link>
          <Link className={page === "about" ? 'active-nav-link nav-link' : 'nav-link'} to='/about'>
            <button> About Us</button>
          </Link>
          <Link className={page === "login" ? 'active-nav-link nav-link' : 'nav-link'} to='/login'>
            <button > Login</button>
          </Link>
          <Link className={page === "signup" ? 'active-nav-link nav-link' : 'nav-link'} to='/signup'>
            <button > Signup</button>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar