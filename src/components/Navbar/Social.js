import React from 'react';
import face from '../../assets/face.svg';
import insta from '../../assets/insta.svg';
import you from '../../assets/you.svg'


import './Social.css';

function Social() {
    return (
        <div className="social">
            {/* <i class="fab fa-youtube-square"></i> */}

            {/* <i class="fab fa-instagram-square"></i> */}
            {/* <i class="fab fa-facebook-square"></i> */}

            <a href="https://www.facebook.com/bairakgroup/" target="_blank" rel="noreferrer">
                <img className="social-item" src={face } alt="facebook"/>
            </a>
    
        <a href="https://www.instagram.com/bairak_group/?utm_medium=copy_link" target="_blank" rel="noreferrer">
             <img className="social-item" src={insta} alt="instagram"/>
        </a>
        <a href="https://www.youtube.com/channel/UCKAfrQfMBZ4wOY5RRgb6lbQ" target="_blank" rel="noreferrer">
             <img className="social-item" src={you} alt="youtube"/>
        </a>

        </div>
    )
}

export default Social
