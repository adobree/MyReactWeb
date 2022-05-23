import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>adam@adamk.hu</h5>
            <a href="mailto:adam@adamk.hu" target="blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>adobree</h5>
            <a href="https://m.me/adobree" target="blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h5>+3630205440</h5>
            <a href="https://wa.me/+36302054404" target="blank">Send a message</a>
          </article>
        </div>
        <form action="contact.php" method="post">
          <input type="text" id='name' name='name' placeholder='Name' required />
          <input type="email" id='email' name="email" placeholder='Email' required />
          <textarea id='message' name="message"rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact