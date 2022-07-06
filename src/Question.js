import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className='contact-question'>
        <header>
            <h4>{title}</h4>
            <button className='contact-btn' onClick={() => setShowMore(!showMore)}>
                {showMore ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </header>
        {showMore && <p>{info}</p>}
    </div>
  )
}

export default Question