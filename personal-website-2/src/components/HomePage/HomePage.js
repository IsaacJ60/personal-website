import React from 'react'
import './HomePage.css'
import GradientBackground from '../GradientBackground/GradientBackground.js'
import ImageScroller from '../ImageScroller/ImageScroller.js'
import '../OverflowHiddenPage/OverflowHiddenPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'


const HomePage = () => {
  return (
    <div className="overflow-hidden">
<div className="homepage-container">
    <GradientBackground />
        <div>
            <h1 className="homepage-title">Hi, I'm <span className="homepage-name">Isaac</span>!</h1>

            <p className='contact-info'>
            <a className='contact-email' href='mailto:isaac.jiang66@gmail.com'> 
            <FontAwesomeIcon icon={faEnvelope} />
            </a>

            <a className='contact-resume' href='academic_resume_online.pdf' target="_blank" rel="noreferrer"> 
            <FontAwesomeIcon icon={faFilePdf} />
            </a>

            </p>

            <div className="homepage-about">
            <p className="intro-text">
                Waterloo CS '29 🎉
            </p>
            <p className="story-text">
                I have a passion for math and computer science, and I love to problem solve. In my spare time, I enjoy playing badminton, writing, and playing video games (maybe a little too much).
            </p>

            <div className='homepage-images'>


            <ImageScroller />


            </div>

            </div>
        </div>
    </div>
    </div>
  
  )
}

export default HomePage