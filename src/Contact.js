import React, {useState} from 'react'
import {allQuestions} from './data'
import Question from './Question'

const Contact = () => {
 const [questions, setQuestions] = useState(allQuestions)

  return (
    <div className='contact-main'>
       <div className='contact-container'>
            <h3>questions and answers about processes, procedures and standards</h3>
            <div className='contact-underline'></div>
            <div className='contact-section'>
                {
                    questions.map((question) => {
                        return (
                            <Question 
                                key={question.id}
                                {...question}
                            />
                        )
                    })
                }
            </div>
        </div> 
    </div>
  )
}

export default Contact