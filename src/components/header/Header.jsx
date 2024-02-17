import React from 'react'
import './header.css'
import CTA from './CTA'
// import ahmed from "../../assets/famzy2.png"


import HeaderSocials from './HeaderSocials'
import {Typewriter} from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'

const Header = () => {
  return (
    <header>
        <div id='#home' className="header__container">

          <div className="firstContainer">
            <h3>Hello👋  I'm</h3>
            <h1>Famuyiwa Ahmed</h1>
            <h5 className="text-light type">
            <Typewriter 
              loop
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[ "FrontEnd Dev",  "Freelancer",  "Critical Thinker"]}
              /></h5>
            <CTA />
            <HeaderSocials />
          </div>

            <div className="secondContainer">
              <div className="imgCon">
                {/* <img src={ahmed} alt="me"  className='profile'/> */}
                
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header