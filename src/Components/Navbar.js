import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='nav-wrapper'>
        <div className='nav-left'>
            <div className='nav-name'>Vimukthi</div>
            <span>toggle</span>
        </div>
        <div className='nav-right'>
            <div className='nav-list'>
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='button nav-button' style={{width:'140px'}}>
                Contact Me
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
