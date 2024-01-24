import React from 'react';
import './heromem.css';
import HeroMain from "./assets/hero-img.png";
import Background from "./assets/heropagebackgound.png"; 
import Logo from "./assets/memelogo.png"
import Telegram from "./assets/telegram.svg"
import Twitter from "./assets/twitter.svg"

const HeroMeme = () => {
    return (
        <div className="hero-meme-container"> 
            <img src={Background} className="hero-background-image" alt="background" />
            <div className="hero-section-container">
                <img src={HeroMain}  alt="hero-image" className="hero-main-image" />  
                <div className="hero-secton-data"> 
                    <div className="pump-title-hero">Pump C<img src={Logo} alt='logo'/>in</div>
                    <p>It's not just a coin, it's a revolution</p>
                    <button className="buy-now-hero"><h4>BUY NOW</h4></button>
                    <div className='social-media-hero'>
                         <div className='telegram-social'>
                           <img src={Telegram} alt='telegram-icon' />
                         </div>
                          <div className='twitter-social'>
                          <img src={Twitter} alt='twitter-icon' />
                          </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroMeme;
