import React from 'react'
import Showreel from '../../assets/Showreel.mp4'
import "./Showreel.css"

export default function Show() {
    return (
        <div className="video-show">
           
           <div className="hero-container">
               <video className="hero_video" autoPlay loop muted>  
                    
                <source 
                    src={Showreel}
                    type="video/mp4"
                    />
               </video>
           </div>           
        </div>
    )
}

