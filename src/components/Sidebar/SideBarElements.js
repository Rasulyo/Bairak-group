import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import { FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 100;
width: 50%;
height: 100%;
background: #fff;
display: grid;
align-items: center;
top: 50px;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen? '100%' : '0')};
top: ${({ isOpen}) => (isOpen? "0%" : "100% ")};
@media screen and (max-width: 768px){
    // top: 14%;
    // right: 0;
    // width: 40%;
    // left: 60%;
}
`

export const CloseIcon = styled(FaTimes)`
color: black;
margin-top: 30px;
`

export const Icon = styled.div`
postion: absolute;
top: 1.2rem;
right: 1.2rem;
background: transparent;
cursor: pointer;
outline: none;
font-size: 2rem;
`

export const SidebarWrapper = styled.div`
color: #black;

`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
    grid-template-rows: repeat(14, 60px);

text-align: center;
top: 10px;
@media screen and (max-width: 540px){
    grid-template-rows: repeat(6, 50px);
}
`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: black;
cursor: pointer;

&:hover {
    color: black;
    transition: 0.2s ease-in-out;
}
`

// export const SideBtnWrap = styled(Link)`
// display: flex;
// justify-content: center;
// `