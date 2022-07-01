import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { people1 } from './data'
import '../src/css/team.css'

const Team = () => {
  const [people, setPeople] = useState(people1)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if(index < 0) setIndex(lastIndex)
    if(index > lastIndex) setIndex(0)
  }, [people, index])
  
  useEffect(() => {
    let slider = setInterval(() => {
        setIndex(index + 1)
    }, 4000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
    <section className='section'>
      <div className='title fix-stroke'>
        <h2>our team</h2>
        <div className='underline'></div>
        <p className='title-text'>Abstract Connoisseurs team leads front-end  web and mobile development community through<span className='title-span stroke-fill'> conferences, blogs, open source, videos, books and meetups.</span></p>
        <p className='title-text'>We value open source, learning, remote work and open communication.</p>
      </div>
      <div className='section-center'>
        {
          people.map((person, personIndex) => {
            const {id, title, name, duty, image} = person

            let position = 'nextSlide'
            if(personIndex === index) position = 'activeSlide'
            if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) position = 'lastSlide'


            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className='teamPerson-img'/>
                <h4>{name}</h4>
                <p className='team-title'>{title}</p>
                <h5 className='team-text fix-stroke'>{duty}</h5>
                <FaQuoteRight className='icon'/>
              </article>
            )
          })
        }
        <button className='prev'  onClick={() => setIndex(index - 1)}>
            <FiChevronLeft className='btn-icon'/>
        </button>
        <button className='next'  onClick={() => setIndex(index + 1)}>
            <FiChevronRight className='btn-icon' />
        </button>
      </div>
    </section>
    <footer className='team-footer'>
            <img src='https://i.imgur.com/dihMk0a.jpg' className='team-footerImg'/>
    </footer>
    </>
  )
}

export default Team