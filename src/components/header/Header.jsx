import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={Logo} alt="logo-img" />
        <div >
            <h1>Cloud Wind Co.td</h1>
        </div>
    
    </div>
  )
}

export default Header