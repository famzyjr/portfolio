import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});



const Footer = () => {
  return (
    <footer id="footer" data-aos="zoom-in-down">
      <a href="#" className='footer__logo'>Famuyiwa Ahmed</a>


      
      <div className="footer__socials">
        <a href="https://https://github.com/dashboard"><FaGithub /></a>
        <a href="https://https://twitter.com/famzy_Jnr"><IoLogoTwitter /></a>
        <a href="https://https://web.facebook.com/"><FaFacebookF /></a>
        <a href="https://https://www.instagram.com/"><FiInstagram /></a>
      </div>
        <div className="footer__copyright">
          <small>&copy; Copyright <b className='name'>Famuyiwa Ahmed</b>. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer