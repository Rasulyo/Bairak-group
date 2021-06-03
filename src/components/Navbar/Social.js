import React from 'react'
import { IconContext } from 'react-icons'
import { TiSocialInstagramCircular } from 'react-icons/ti'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import './Social.css';

function Social() {
    return (
        <div className="social">
             <IconContext.Provider value={{display: "flex",color: "black", size:"40px"}}>
                <TiSocialInstagramCircular />
                <TiSocialYoutubeCircular /> 
                <TiSocialFacebookCircular />
            </IconContext.Provider>
        </div>
    )
}

export default Social
