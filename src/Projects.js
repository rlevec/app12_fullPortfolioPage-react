import React, {useState} from 'react'
import { projects } from './data'
import '../src/css/projects.css'

const Projects = () => {
  const [projectItems, setProjectItems] = useState(projects);
  const [categories, setCategories] = useState([])


  return (
    <>
        <section className='project section'>
            <div className='title'>
                <h2>our projects</h2>
                <div className='underline'></div>       
            </div>
            <div className='section-center'>
                {
                    projectItems.map((project) => {
                        const {id, title, desc, technologies, img} = project
                        return (
                            <article key={id} className='project-item'>
                                <img src={img} alt={title} className='photo'/>
                                <div className='item-info'>
                                    <header>
                                        <h4>{title}</h4>
                                        <h4 className='technologies'>{technologies}</h4>
                                    </header>
                                    <p className='item-text'>{desc}</p>
                                </div>
                            </article>
                        ) 
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default Projects