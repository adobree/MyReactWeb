import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="http://linkedin.com" target="blank"><BsLinkedin /></a>
        <a href="http://github.com" target="blank"><FaGithub /></a>
        <a href="http://dribbble.com" target="blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials