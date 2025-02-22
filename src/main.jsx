import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Question from './Question'


function App() {
  const [checkingAnswers, setCheckAnswers] = useState(true)
  return (
    <>

      <h1>Quizical</h1>
      <Question questionObj="Who was the guy who did the thing" checkingAnswers={checkingAnswers}/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />,
)