import React from 'react'
import BannerImage from '../assets/background.jpeg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className='mainPage' style={{background :`url(${BannerImage})`}}>
        <div className='order'>
           <Link to='/Menu'>
            <button>Sipariş Ver</button>
            </Link> 
        </div>
    </div>
  )
}

export default Home