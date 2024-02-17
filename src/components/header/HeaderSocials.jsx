import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
// import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://github.com/famzyjr" target="_blank" rel='noopener noreferrer'> <FaGithub /> </a>
      <a href="https://www.linkedin.com/in/famuyiwa-ahmed-645788297/" target="_blank" rel='noopener noreferrer'> <BsLinkedin /></a>
      <a href="https://twitter.com/home" target="_blank" rel='noopener noreferrer'> <IoLogoTwitter /> </a>
    </div>
  )
}

export default HeaderSocials
