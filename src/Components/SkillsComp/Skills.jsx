import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section>
      <div className="skills__container">
        <div className="skills__content">
          <h2> Expertise</h2>

          <div className='progress__bars'>
          <label htmlFor="#" className='pt'>HTML: </label>
          <progress id='file' value={98} max='100'/>
          <br /> <br />
          <label htmlFor="#" className='pt' >CSS: </label>
          <progress id='file' value={90} max='100'/>
          <br /> <br />
          <label htmlFor="#" className='pt'>Javascript: </label>
          <progress id='file' value={70} max='100'/> 
          <br /> <br />
          <label htmlFor="#" className='pt'>React: </label>
          <progress id='file' value={80} max='100'/>
          <br /> <br />
          <label htmlFor="#" className='pt'>SCSS: </label>
          <progress id='file' value={90} max='100'/>
          <br /> <br />
          <label htmlFor="#" className='pt'>Analytic skill: </label>
          <progress id='file' value={98} max='100'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills