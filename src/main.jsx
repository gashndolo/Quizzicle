import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'


function App() {
  const [allAnswered, setAllAnswered] = useState(false)

  

  function newGame() {
    useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
  }
  
  function renderQuestions(questionsArray) {

  }
  return (
    <>
      <h1>Quizzical</h1>
    </>
  )
}

createRoot(document.getElementById('root')).render(
    <App />,
)
