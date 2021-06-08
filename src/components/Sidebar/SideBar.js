import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SideBarElements'
import SocialSide from '../Navbar/SocialSide'
import ButtonsSide from './ButtonsSide'

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="projects">
                        наши проекты
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="about">
                        о нас
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="founders" >
                        основатели
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="clients">
                        наши клиенты
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="contacts">
                            контакты
                    </SidebarLink>
                    <SidebarLink >
                            
                    </SidebarLink>
                    {/* <SocialSide /> */}
                    <ButtonsSide/>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
