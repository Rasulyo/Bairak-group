import React from 'react'
import { ContactP, Foo, FooContact, FooContainer, FooP } from './FooterElements'
import './Footer.css'
import { IconContext } from 'react-icons'
import { TiSocialVimeoCircular } from 'react-icons/ti'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { FaVk } from 'react-icons/fa'
import { TiSocialFacebookCircular } from 'react-icons/ti'






function Footer() {
    return (
       <>
        <Foo>
        <FooP>Следите за нашими проектами в соцсетях!</FooP>
        <FooContainer>
            <IconContext.Provider value={{TextAlign: "center",margin:"25px",borderRadius: "50",color: "white", size:"100px", alignItems: "center"}}>
                <TiSocialVimeoCircular />
                <TiSocialYoutubeCircular /> 
                <FaVk />
                <TiSocialFacebookCircular />
            </IconContext.Provider>
        </FooContainer>
        <FooContainer>
            <FooContact>
                <ContactP>+996555182040 / Жумабек, 2883 этаж, 11 кабинет / Бишкек, 720054</ContactP>
            </FooContact>
        </FooContainer>
        </Foo>
       </>
    )
}

export default Footer
