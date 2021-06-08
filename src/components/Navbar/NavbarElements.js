import styled from 'styled-components'
import {Link} from 'react-router-dom'
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
    z-index: 10;
    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
justify-content: center;
z-index: 1;
width: 100%;
max-width: 1080px;
position: top;
@media screen and (max-width: 768px){
    display: none;

}
`
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
z-index: 1;
margin: 0 auto;
width: 100%;
max-width: 1080px;
`

export const NavLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    // padding-left: 80px;
`

export const MobileIcon = styled.div`
    display: none;
    font-size: 1.5rem;
    padding-top: 25px;
    z-index: 999;
    opacity: ${({isOpen}) => (isOpen? '0' : '100%')};
    top: ${({ isOpen}) => (isOpen? "0%" : "-100%")};
    

    @media screen and (max-width: 768px){
        display: block;
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
    @media screen and (max-width: 540px){
        // display: block;
        position: absolute;
        top: 10px;
        right: 0; 
        align-items: center;
        justify-content: center;
        
        transform: translateY(-100%, 60%);
        font-size: 1.4rem;
        cursor: pointer;
        color: black;
        
    }
`

export const NavMenu = styled.ul`
display: flex;
justify-content: space-between;
list-style: none;
text-align: center;
height: 100%;
margin: 2px 0;
@media screen and (max-width: 768px){
    display: none;   
}
`

export const NavItem = styled.li`
    // height: 80px;
    color: black;
    padding: px 20px;
    font-family: Segoe UI;
    font-weight: 500;
    cursor: pointer;
    @media screen and (max-width: 768px){
        display: none;   
    }
`

export const NavLinks = styled(LinkS)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
padding: 0 1rem;
height: 100%;
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
