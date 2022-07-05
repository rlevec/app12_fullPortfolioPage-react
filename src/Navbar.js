import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import '../src/css/navbar.css'
import { Tree } from 'grommet-icons'
import { Link } from "react-router-dom"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
 

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
                                <Link to={`/${text}`}><button className='links-btn'>{icon}{text}</button></Link>
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
  </>
  )
}

export default Navbar