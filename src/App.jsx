import './App.css'
import iconPlus from './assets/images/icon-plus.svg';
import iconMinus from './assets/images/icon-minus.svg';
import iconStar from './assets/images/icon-star.svg';
import { useState } from 'react';


const questions = [
  {
    question: 'What is Frontend Mentor, and how will it help me?',
    answer: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It is suitable for all levels and ideal for portfolio building.'
  },
  {
    question: 'Is Frontend Mentor free?',
    answer: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
  },
  {
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It is an excellentway to showcase your skills to potential employers!'
  },
  {
    question: 'How can I get help if I am stuck on a Frontend Mentor challenge?',
    answer: 'The best place to get help is inside Frontend Mentor-s Discord community. There is a help channel where you can ask questions and seek support from other community members.'
  }
]

function App() {
  const [showquestion, setShowQuestion] = useState(false);

  function toggleQuestion() {
    setShowQuestion(!showquestion);
  }

  return (
    <div className='background'>
      <div className='wrapper'>
        <div className='flex header'>
          <img src={iconStar} className='star-icon'/>
          <h1>FAQs</h1>
        </div>

        <div>
          {questions.map((question, idx) => {
            return (
              <div key={idx} className='flex questions_wrapper'>
                <div>
                  <h3 className='question'>{question.question}</h3>
                  <p className={ showquestion ? `answer` : 'hide-answer'}>{question.answer}</p>
                </div>

                <button onClick={toggleQuestion}>
                  {
                    showquestion
                    ?
                    <img src={iconMinus} className='icon-button'/>
                    :
                    <img src={iconPlus} className='icon-button'/>
                  }
                            
                </button>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
