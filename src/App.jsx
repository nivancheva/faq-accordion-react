import './App.css'
import iconStar from './assets/images/icon-star.svg';
import Question from './Question';


const questions = [
  {
    question: 'What is Frontend Mentor, and how will it help me?',
    answer: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It is suitable for all levels and ideal for portfolio building.',
    open: true
  },
  {
    question: 'Is Frontend Mentor free?',
    answer: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    open: false
  },
  {
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It is an excellentway to showcase your skills to potential employers!',
    open: false
  },
  {
    question: 'How can I get help if I am stuck on a Frontend Mentor challenge?',
    answer: 'The best place to get help is inside Frontend Mentor-s Discord community. There is a help channel where you can ask questions and seek support from other community members.',
    open: false
  }
]

function App() {
  
  return (
    <div className='wrapper'>
      <div className='flex header'>
        <img src={iconStar} className='star-icon'/>
        <h1>FAQs</h1>
      </div>

      <div>
        {questions.map((question, idx) => {
          return (
            <Question key={idx} question={question}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
