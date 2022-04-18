import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import mypic from '../../img/mypic.jpg'

const Header = () => {
  return (
    <section className="header__container">
        <div className='header__top'>
            <div className='initials'>
              <div className="initials__content">
              <h4>G</h4>
              <img src={logo} alt="" />
              <h4>O</h4>
              </div>
            </div>

            <div className="headings__text">
                <h1>GREAT OKAFOR</h1>
                <h2>Front-end Web Developer</h2>
            </div>
        </div>

        <div className="header__bottom">
          <div className="header__bottom__content">
          <img src={mypic} alt="" />

          <div className="vl"></div>
            
          <p>Hi,My name is Great Okafor. I am a quality driven individual with proven management and organizational skills. A frontend developer (in view) with proficiency in Reactjs. Asides implementing pixel perfect representations using well structured and beautiful codes, i strive to ensure the software functions efficiently for a perfect user experience. <br /> <br /> I am a jovial person who is willing and always ready to learn. My hobbies are reading and coding.</p>
            
          </div>
        </div>
    </section>
  )
}

export default Header