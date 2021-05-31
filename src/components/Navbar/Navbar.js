import React from 'react'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'
import Bairak from './Logo'
import { MobileIcon, Nav, NavbarContainer, NavContainer, NavItem, NavLinks,  NavMenu } from './NavbarElements'
import Social from './Social'
function Navbar({ toggle, isOpen }) {
    
    return (
        <>
            <Nav>

                <NavContainer>
                    <MobileIcon onClick={toggle} isOpen={isOpen} >
                        <FaBars  />
                    </MobileIcon>
                    <Bairak />
                    <Social />
                </NavContainer>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">наши проеты</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">о нас</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="founder">основатели</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="clients">наши клиенты</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contacts">контакты</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

    // <nav className="navbar">
    //     <div className="container">
    //         <div className="navbar-logo">
    //             <div className="logo-left"></div>
    //             <img src={logo} alt="logo" />
    //             <div className="logo-right"></div>
    //         </div>
    //         <div className="navbar-lang">
    //             <span>RU</span> / <span>EN</span>
    //         </div>


    //     </div>

    // </nav>