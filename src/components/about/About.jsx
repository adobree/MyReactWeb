import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="conteiner about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years</small>
            </article>
            <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>100+ Clients</small>
            </article>
            <article className='about_card'>
            <BsFolderCheck className='about_icon'/>
            <h5>Projects</h5>
            <small>20+ Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eveniet rem distinctio saepe corrupti expedita tempora animi dolorum quod exercitationem earum amet, cum hic quae natus similique in asperiores mollitia.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About