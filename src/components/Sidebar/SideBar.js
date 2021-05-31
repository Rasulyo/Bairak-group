import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SideBarElements'
import SocialSide from '../Navbar/SocialSide'

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="projects">
                        наши проекты
                    </SidebarLink>
                    <SidebarLink to="about">
                        о нас
                    </SidebarLink>
                    <SidebarLink to="founders" >
                        основатели
                    </SidebarLink>
                    <SidebarLink to="clients">
                        наши клиенты
                    </SidebarLink>
                    <SidebarLink to="contacts">
                            контакты
                    </SidebarLink>
                    <SocialSide />
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
