import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className="navbar">
      <div className="ruksak">
        <div>RukSak</div>
        <div className="tagline">Adventure Together</div>
      </div>
      <div className="nav-links">
        <li><Link className="link" to="/home">Home</Link></li>
        <li><Link className="link" to="/planning">Plan</Link></li>
        <li><Link className="link" to="/profile">Profile</Link></li>
      </div>
    </div>
  )
}

export default Header
