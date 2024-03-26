import React from 'react'
import Photo from '../assets/logo.jpeg'
import '../styles/contact.css'
function Contact() {
  return (
    <div className='contact'>
      <div style={{backgroundImage: `url(${Photo})`,
       }} className='leftside'>
      </div>
      <div style={{ flexDirection:"column", display:"flex", flex:"50%"}} className='rightside'>
          <h1>Bizimle İletişime Geçin</h1>
          <p>
            Adres: 1234 Elm St. New York, NY 10003
            Telefon: 555-555-5555
            </p>
            <form>
              <label>Ad Soyad:</label>
              <input type='text' placeholder='Lütfen Adınızı Soyadınızı Giriniz..' />
              <label>Email:</label>
              <input type='email' placeholder='Lütfen Email Adresinizi Giriniz..' />
              <label>Mesaj:</label>
              <textarea rows="6" placeholder='Lütfen Mesajınızı Giriniz'></textarea>
              <button>Gönder</button>
            </form>
      </div>
      
    </div>
  )
}

export default Contact