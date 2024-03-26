import React from 'react'
import Logo from '../assets/logo.jpeg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={Logo} alt='logo' />
        <div className='mainlink'>
            <Link to='/'>Anasayfa</Link>
            <Link to='/Menu'>Menü</Link>
            <Link to='/About'>Hakkımızda</Link>
            <Link to='/Contact'>İletişim</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar