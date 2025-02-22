import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Question from './Question'

/*
function App() {
  const [checkingAnswers, setCheckingAnswers] = useState(false)
  return (
    <>

      <h1>Quizical</h1>
      <Question questionObj="Who was the guy who did the thing" checkingAnswers={checkingAnswers}/>
      <hr />
      <Question questionObj="Who was the guy who did the thing" checkingAnswers={checkingAnswers}/>
      <hr />
      <button onClick={() => setCheckingAnswers(true)}>Check answers</button>
    </>
  )
}*/



function App() {
  const [allAnswered, setAllAnswered] = useState([])
  const [checkingAnswers, setCheckingAnswers] = useState(false)
  const [questions, setQuestions] = useState([])
  const [newGame, setNewGame] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [reloadCounter, setReloadCounter] = useState(6)


  function addToAllAnswered(answer) {
    setAllAnswered(prev => [...prev, answer])
  }
  function reload() {

    const intervalId = setInterval(() => {
        setReloadCounter(prev => prev - 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(intervalId);;
    }, 6000)
  }

 
  useEffect(() => {
    const url = "https://opentdb.com/api.php?amount=5"
    async function getData() {
      try {
        const res = await fetch(url)
        if (!res.ok) {
          
          reload()
          setError(true)
          throw new Error(`Response status: ${res.status}`);
          
        }
        const data = await res.json()
        setQuestions(data.results)
        setLoading(false)
      } catch(err) {
        console.log(err)
      }
    }
    getData()
  }, [newGame])

  const questionElements = questions.map((question, index) => {
    return (
      <Question 
        key={index}
        questKey={index}
        checkingAnswers={checkingAnswers}
        questionObj={question}
        addToAllAnswered={addToAllAnswered}
      />
    )
  })

  function checkAnswers() {
    setCheckingAnswers(true)
  }

  function startNewGame() {
    setLoading(true)
    setCheckingAnswers(false)
    setNewGame(newGame => !newGame)
  }

  const renderButton = 
    checkingAnswers ? <button onClick={startNewGame}>New Game</button> : 
    loading ? null : error ? null : <button onClick={checkAnswers}>Check answers</button>

  return (
    <>
      <h1>Quizical</h1>
      {error ? `Open trivia DB API call limited to once every five seconds...Reload page ${reloadCounter ==  0 ? 'now' : `in ${reloadCounter} seconds`}` : loading ? "Loading..." : questionElements}
      {renderButton
      }
    </>
  )
}








createRoot(document.getElementById('root')).render(
  <App />,
)