import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Portfolio</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3>This is a portfolio item</h3>
            <a href="#" className='btn'>GitHub</a>
            <a href="#" className='btn btn-primary'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio