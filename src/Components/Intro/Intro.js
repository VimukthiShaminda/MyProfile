import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='intro-left'>
            <div className='intro-name'>
                <span>Hello! I Am</span>
                <span>Vimukthi Shaminda</span>
                <span>Full Stack Developer as a Fresher in web design and development,Producting the Quality work</span>
            </div>
            <button className='button intro-button'>Hire Me</button>
        <div className='intro-icons'>
          <a href='https://github.com/vimukthi871'>
          <img src={Github} alt=""/>
          </a>
          <a href='https://www.linkedin.com/in/vimukthi-shaminda-49358b21b/'>
          <img src={LinkedIn} alt=""/>
          </a>
          <img src={Instagram} alt=""/>

        </div>
        
        </div>
        <div className='intro-right'>
        <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={boy} alt=""/>


        </div>
      
    </div>
  )
}

export default Intro
