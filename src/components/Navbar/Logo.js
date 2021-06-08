import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'



import {  NavLogo } from './NavbarElements'

function Bairak() {
    return (
        <div className="logo">
            <div className="logo-left"></div>
            <Link to="/">
            <NavLogo><img src={logo} alt="logo" className="logo-image" /></NavLogo>
            </Link>
            <div className="logo-right"></div>
        </div>
    )
}

export default Bairak
