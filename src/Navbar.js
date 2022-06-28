import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import Profile from './Profile'
import ReadMore from './ReadMore'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const [showProfile, setShowProfile] = useState(true)
 

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height; //cordinates, width/height of the  container(vanilla JS)
    if(showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else {
        linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <>
    <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src='https://i.imgur.com/5TsXCFr.jpg' alt='logo' className='logo-pic'/>
                <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                    <FaBars />
                </button>
            </div>
             <div className='links-container' ref={linksContainerRef}>
               <ul className='links' ref={linksRef}>
                    {
                        links.map((link) => {
                            const {id, text, icon} = link
                            return (
                               <li key={id}>
                                <button>{icon}{text}</button>
                               </li> 
                            )
                        })
                    }
               </ul> 
            </div>           
            <ul className='social-icons'>
                  {
                    social.map((link) => {
                        const {id, url, icon} = link
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })
                  }
            </ul>
        </div>
    </nav>
    <ReadMore/>
    {showProfile && <Profile />}
  </>
  )
}

export default Navbar