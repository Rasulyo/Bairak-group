import styled from 'styled-components'
import {Link as Link} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'




export const Nav = styled.nav`
    background: #fff;
    margin-top: 20px;
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 1;
    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
display: none;
justify-content: center;
z-index: 1;
width: 100%;
height: 100px;
max-width: 1400px;
@media screen and(max-width: 768px) {
    margin-top: 150px;
}
`
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
z-index: 1;
margin: 0 auto;
width: 100%;
max-width: 1400px;
`

export const NavLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    // padding-left: 80px;
`

export const MobileIcon = styled.div`
display: block;
    font-size: 2rem;
    padding-top: 25px;
    z-index: 999;
    opacity: ${({isOpen}) => (isOpen? '0' : '100%')};
    top: ${({ isOpen}) => (isOpen? "0%" : "-100%")};
    

    @media screen and (max-width: 768px){
        // display: block;
        position: absolute;
        top: 10px;
        right: 0; 
        align-items: center;
        justify-content: center;
        
        transform: translateY(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: black;
        
    }
    // @media screen and (max-width: 540px){
    //     display: block;
    //     position: absolute;
    //     top: 60px;
    //     left: 50%;
        
    //     transform: translateY(-100%, 60%);
    //     font-size: 1.7rem;
    //     cursor: pointer;
    //     color: rgb(209,210,212);
        
    // }
`

export const NavMenu = styled.ul`
display: none;
align-items: space-between;
list-style: none;
text-align: center;
height: 100%;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
    heigth: 80px;
    color: black;
    padding: 10px 20px;
    cursor: pointer;

`

export const NavLinks = styled(LinkS)`
color: rgb(85, 85, 85);
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
padding: 0 1rem;
heigth: 100%;
font-size: 20px;
font-weigth: 600;

&.active {
    color: red;
}
`

// export const NavLinks = styled(Link)`
// color: rgb(85, 85, 85);
// display: flex;
// align-items: center;
// text-decoration: none;
// cursor: pointer;
// padding: 0 1rem;
// heigth: 100%;
// font-size: 20px;
// font-weigth: 600;

// &:active {
//     color: red;
// }
// `
