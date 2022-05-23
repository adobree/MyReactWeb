import React from 'react'
import './testimonials.css'
import AVR1 from '../../assets/avatar1.jpg'
import AVR2 from '../../assets/avatar2.jpg'
import AVR3 from '../../assets/avatar3.jpg'
import AVR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    id: 1,
    image: AVR1,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, esse quia aliquam, blanditiis, nisi animi similique dicta molestias magni consectetur assumenda laudantium eius nesciunt impedit minima expedita quis eum! Eum!'
  },
  {
    id: 2,
    image: AVR2,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, esse quia aliquam, blanditiis, nisi animi similique dicta molestias magni consectetur assumenda laudantium eius nesciunt impedit minima expedita quis eum! Eum!'
  },
  {
    id: 3,
    image: AVR3,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, esse quia aliquam, blanditiis, nisi animi similique dicta molestias magni consectetur assumenda laudantium eius nesciunt impedit minima expedita quis eum! Eum!'
  },
  {
    id: 4,
    image: AVR4,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, esse quia aliquam, blanditiis, nisi animi similique dicta molestias magni consectetur assumenda laudantium eius nesciunt impedit minima expedita quis eum! Eum!'
  }
 ]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
      {
        data.map(({id, image, title, text}) => {
          return (
            <SwiperSlide key={id} className='testimonial'>
            <div className="client__avatar">
              <img src={image} alt="Avatar" />
            </div>
            <h5>{title}</h5>
              <small className="client__review">
                {text}
              </small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials