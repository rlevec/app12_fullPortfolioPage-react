import React, {useState} from 'react'
import { education } from './data'
import { FaAngleDoubleRight } from 'react-icons/fa'
import '../src/css/education.css'

const Education = () => {
  const [university, setUniversity] = useState(education)
  const [value, setValue] = useState(0)

  const {id, name, order, title, dates, studies, institution} = university[value]

  return (
    <div className='section-education'>
      <div className='title-education'>
        <h2>education</h2>
        <div className='underline'></div>
      </div>
      <div className='institution-center-education'>
        <div className='btn-container-education'>
          {
            university.map((uni, index) => {
              return (
                <button key={uni.id} onClick={() => setValue(index)}
                  className={`university-btn-education ${index === value && 'active-btn'}`}
                >
                  {uni.institution}
                </button>
              )
            })
          }
        </div>
      </div>
      <div className='university-info-education'>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <h4>{institution}</h4>
        <p className='university-date-education'>{dates}</p>
        {
          studies.map((study, index) => {
            return (
              <div key={index} className='university-desc-education'>
                <FaAngleDoubleRight className='unviersity-icon-education'/>
                <p className='university-studies'>{study}</p>
              </div>
            )
          })
        }
      </div>
      <footer className='education-footer'></footer>
    </div>
  )
}

export default Education