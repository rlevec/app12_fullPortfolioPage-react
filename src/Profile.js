import React, {useState} from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { cards } from './data'

const Profile = () => {

  return (
    <>
    <div className='profile-container'>
        <img src='https://i.imgur.com/snovgnr.jpg' alt='my photo' className='profile-img'/>
        <h3 className='profile-header'>rene levec</h3>
        <p className='profile-text'>I’m a front-end developer working to better understand how to use HTML, JavaScript and CSS to bring concepts to life. My expertise includes determining the structure and design of web pages, developing features to enhance the user experience and utilizing a variety of markup languages to design web elements.</p> 
    </div>
    <h2 className='mid_header'>personal skills</h2>
    <div className='profileCard-container'>
      {
        cards.map((card) => {
          const {id, img, alt, header, cardList} = card
          return (
            <div key={id} className='profile-card'>
              <img src={img} alt={alt} className='card-img'/>
              <div className='text-container'>
                <h4 className='text-container-header'><b>{header}</b></h4>
                <div className='underline'></div>
                <div>
                  {cardList?.map((item, index) => {
                    return (
                      <p key={index} className='text-container-paragraph'>{<FaAngleDoubleRight className='text-container-icon'/>}{item}</p>
                    )
                  })}
                </div>
              </div>           
            </div>            
          )
        })
      }
    </div>
    <footer className='profile-footer'>
        <img src='https://i.imgur.com/Zb8Oi8o.png' alt='img-1' className='footer-img'/>
        <img src='https://i.imgur.com/dxxRv1l.jpg' alt='img-2' className='footer-img'/>
        <img src='https://i.imgur.com/Z6rWZHO.jpg' alt='img-3' className='footer-img'/>
    </footer>
    <div className='footer-header'>
      <p>enter your email:</p>
      <button>subscribe now</button>
    </div>
    </>
  )
}

export default Profile