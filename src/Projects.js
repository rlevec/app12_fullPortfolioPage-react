import React, {useState} from 'react'
import {projects} from './data'

const allCategories = ['all', ...new Set(projects.map((project) => project.category))] 
console.log(allCategories)

export const Projects = () => {
  const [projectItems, setProjectItems] = useState(projects)
  const [categories, setCategories] = useState(allCategories)
  
  const filterItems = (category) => {
    if(category === 'all') {
        setProjectItems(projects)
        return
    } 
    const newItems = projects.filter((item) => item.category === category)
    setProjectItems(newItems)
  }
  
  return (
    <>
        <div>
            <div>
                <h2 className='project-header'>our projects</h2>
            </div>
            <div className='project-btn-container'>
                {
                    categories.map((category, index) => {
                        return (
                             <button type='button' key={index} className='filter-btn'
                                onClick={() => filterItems(category)}
                                >
                                    {category}
                                </button>                                

                        )
                    })
                }
            </div>
            <div className='project-card-container'>
                {
                    projects.map((project) => {
                        const {id, title, technologies, desc, img, link} = project
                        return (
                            <div key={id} className='project-profile-card'>
                                <a href={link}>
                                    <img src={img} alt={title} className='project-img'/>
                                </a>
                                <div className='text-container'>
                                    <h4 className='text-container-header'><b>{title}</b></h4>
                                    <div className='underline'></div>
                                    <p className='project-text fix-stroke'>{technologies}</p>
                                    <h4 className='project-desc'>{desc}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
