import React from 'react'
import { FaMagnet } from 'react-icons/fa'

const ReadMore = () => {
  return (
    <div className='readMore-container'>
        <button className='readMore-btn'>info</button>
        <div className='readMore-paragraph'>An overview of the React documentation and related resources:</div>
        <FaMagnet className='readMore-magnet'/>    
        <a href='https://reactjs.org/tutorial/tutorial.html' className='readMore-link'>React is a JavaScript library for building user interfaces</a>
        <FaMagnet className='readMore-magnet'/>        
    </div>
  )
}

export default ReadMore