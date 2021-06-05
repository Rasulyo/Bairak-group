import React from 'react'
import { ContactP, Foo, FooContact, FooContainer, FooP } from './FooterElements'
import './Footer.css'
import face from '../../assets/face.svg';
import insta from '../../assets/insta.svg';
import you from '../../assets/you.svg'






function Footer() {
    return (
       <>
        <Foo>
        <FooP>Следите за нашими проектами в соцсетях!</FooP>
        <FooContainer>
        <a href="https://www.facebook.com/bairakgroup/" target="_blank" rel="noreferrer">
                <img className="social-items" src={face } alt="facebook"/>
            </a>
    
        <a href="https://www.instagram.com/bairak_group/?utm_medium=copy_link" target="_blank" rel="noreferrer">
             <img className="social-items" src={insta} alt="instagram"/>
        </a>
        <a href="https://www.youtube.com/channel/UCKAfrQfMBZ4wOY5RRgb6lbQ" target="_blank" rel="noreferrer">
             <img className="social-items" src={you} alt="youtube"/>
        </a>
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
