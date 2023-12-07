import iconPlus from './assets/images/icon-plus.svg';
import iconMinus from './assets/images/icon-minus.svg';
import { useState } from 'react';

export default function Question({ question }) {
    const [showquestion, setShowQuestion] = useState(false);

    function toggleQuestion() {
        setShowQuestion(!showquestion) 
    }  

    return (
        <div className='flex questions_wrapper'>
              <div>
                <h3 className='question'>{question.question}</h3>
                <p className={ showquestion ? `answer` : 'hide-answer'}>{question.answer}</p>
              </div>

              <button onClick={toggleQuestion}>
                <img src={showquestion ? iconMinus : iconPlus}/>                         
              </button>
        </div>
    )
}
