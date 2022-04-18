import React from 'react'
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'


const Contact = () => {
  return (
    <section >
      <div className='contact__container'>
        <div className="contact__content">
          <h2>Contact</h2>

          <ul>
            <li><AiOutlinePhone className='icon'/> 09055465302</li>
            <li><a href="#"><HiOutlineMail className='icon'/> Greatoakfor15@gmail.com</a></li>
            <li><a href="www.linkedin.com"><AiFillLinkedin className='icon'/> Great Okafor</a></li>
            <li> < GoLocation className='icon' /> 1 Akin Afolabi close,ikeja,Lagos.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact