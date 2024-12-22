import React from 'react'
import Checkbox from '../Components/FormComponents/Checkbox'
import LongAnswer from '../Components/FormComponents/LongAnswer'
import ShortAnswer from '../Components/FormComponents/ShortAnswer'
import Radio from '../Components/FormComponents/Radio'

function QuizPage() {
    return(
        <div className='flex flex-col w-full h-screen'>
          <Checkbox/>
          <LongAnswer/>
          <ShortAnswer/>
          <Radio/>
        </div>
      )
}

export default QuizPage
