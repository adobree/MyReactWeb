import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="https://itexpress.hu" className='footer__logo'>IT-Express</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com">
          <BsFacebook/>
        </a>
        <a href="http://instagram.com">
          <BsInstagram/>
        </a>
        <a href="http://twitter.com">
          <BsTwitter/>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; IT-Express. All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer