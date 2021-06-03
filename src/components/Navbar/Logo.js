import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'



import {  NavLogo } from './NavbarElements'

function Bairak() {
    return (
        <div className="logo">
            <div className="logo-left"></div>
            <NavLogo><img src={logo} alt="logo" className="logo-image" /></NavLogo>
            <div className="logo-right"></div>
        </div>
    )
}

export default Bairak
