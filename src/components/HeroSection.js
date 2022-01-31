import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import { Link, animateScroll as scroll } from "react-scroll";


function HeroSection() {
    
    return (
        
        <div class='hero-container' id="heroSection">
            
            <h1>HI! I'M RAN!</h1>
            <p> You are welcomed to check out my work below</p>
            <div className='hero-btns'>
            <Link to='cardSection' smooth={true} className='btn-mobile'>
                <Button className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    //onClick='handleOverview'
                    >OVERVIEW
                    </Button>
                    </Link>
            <Link to='contactSection' smooth={true} className='btn-mobile'>
                    <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    //onClick='handleContact'
                    >CONTACT ME 
                    </Button>
                    </Link>
                
            </div>
        </div>
    );
}

export default HeroSection;
