import React from 'react'
import '../styles/About.css'
import BannerImage from '../assets/background.jpeg'
function About() {
  return (
    <div className='about'>

          <div className='abouttop' style={{backgroundImage:`url(${BannerImage})`}}></div>

          <div className='aboutbottom'>
              <h1>Hakkımızda</h1>
              <p>
                Hot Wheels is a family-owned business that has been serving the community for over 20 years.
                We specialize in providing the best quality food and service to our customers. 
                Our menu includes a variety of delicious dishes that are sure to satisfy any appetite. 
                Whether you are in the mood for a hearty breakfast, a light lunch, or a delicious dinner, 
                we have something for everyone. Come visit us today and experience the Hot Wheels difference!
              </p>
          </div>
    </div>
  )
}

export default About