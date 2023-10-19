import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <Link to="/">
            <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/our-specials">
                Our Specials
              </Link>
            </li>
            <li>
              <Link to="/team">
                Team
              </Link>
            </li>
            <li>
              <Link to="/events">
                Events
              </Link>
            </li>
            
      </div>
    </div>
  )
}

export default Navbar
