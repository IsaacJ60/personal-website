import React from 'react'
import './PortfolioPage.css'
import GradientBackground from '../GradientBackground/GradientBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const PortfolioPage = () => {
  return (
    <div>
      <GradientBackground />
      <div className='portfolio-page'>
        <h1>Links</h1>
        <div className='portfolio-container'>
        <div className="link-list">
        <ul>
        <li><a href="https://www.youtube.com/@eyesackle" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faYoutube} /> &nbsp; YouTube</a></li>
        <li><a href="https://github.com/IsaacJ60" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /> &nbsp; GitHub</a></li>
        <li><a href="https://dmoj.ca/user/IsaacJ60" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faCode} /> &nbsp; DMOJ</a></li>
        <li><a href="https://www.linkedin.com/in/isaac6/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> &nbsp; LinkedIn</a></li>
        {/* Add more links as needed */}
      </ul>
    </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage