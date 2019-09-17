import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div>
      <div>
        <div>RukSak</div>
      </div>
      <div>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/planning">Plan</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </div>
    </div>
  )
}

export default Header
