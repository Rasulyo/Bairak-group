import React from 'react'
import face from '../../assets/face.svg';
import insta from '../../assets/insta.svg';
import you from '../../assets/you.svg'
import './SocialSide.css';

function SocialSide() {
    return (
        <div className="social-side">

            <a href="https://www.facebook.com/bairakgroup/" target="_blank">
                <img className="social-sidebar" src={face } alt="facebook"/>
            </a>
    
        <a href="https://www.instagram.com/bairak_group/?utm_medium=copy_link" target="_blank">
             <img className="social-sidebar" src={insta} alt="instagram"/>
        </a>
        <a href="https://www.youtube.com/channel/UCKAfrQfMBZ4wOY5RRgb6lbQ" target="_blank">
             <img className="social-sidebar" src={you} alt="youtube"/>
        </a>
         
        </div>
    )
}

export default SocialSide
