import React from 'react'
import '../scss/_NewQuizScrolElements.scss'

function NewQuizScrolElements({quizData}) {
    return (
        <div className='newQuizScrolElements'>
            {quizData.map((e,i) => <div key={i} className ='newQuizScrolElement'>{e.title}</div>)}
        </div>
    )
}

export default NewQuizScrolElements