import React from 'react'
import { IconContext } from 'react-icons'
import { TiSocialVimeoCircular } from 'react-icons/ti'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import './SocialSide.css';

function SocialSide() {
    return (
        <div className="social-side">
             <IconContext.Provider value={{display: "flex",color: "black", size:"40px", justifyContent: "center"}}>
                <TiSocialVimeoCircular />
                <TiSocialYoutubeCircular /> 
                <TiSocialFacebookCircular />
            </IconContext.Provider>
        </div>
    )
}

export default SocialSide
