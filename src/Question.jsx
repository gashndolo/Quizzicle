import { useRef, useState } from "react"
import Answer from "./Answer"
import clsx from "clsx"
import { decode } from "html-entities"



export default function Question({questionObj, checkingAnswers, addToAllAnswered, questKey}) {
    const [selectedAnswer, setSelectedAnswer] = useState({})
    const [answered, setAnswered] = useState(false)
    const randomIndex = useRef(Math.floor(Math.random() * (questionObj.incorrect_answers.length - 0 + 1)) + 0)
    const correctAnswer = questionObj.correct_answer
    const submittedCount = useRef(0)
    //console.log("Checking answeres", checkingAnswers)
    
    function insertItemAtRandomPoint(array, newItem) {
        const array1 = array.slice(0, randomIndex.current)
        const array2 = array.slice(randomIndex.current, array.length)
        return array1.concat([newItem]).concat(array2)
        
    }


    function pickAnswer(key, value) {
        setAnswered(true)
        setSelectedAnswer({key, value})

    }

    const answerElements = insertItemAtRandomPoint(questionObj.incorrect_answers, questionObj.correct_answer).map((answer, index) => {
        
        return (
            <Answer
                key={index}
                objKey={index} pickAnswer={pickAnswer} selected={selectedAnswer.value === answer}
                checkingAnswers={checkingAnswers} 
                correctAnswer={correctAnswer}
            >
                {decode(answer)}
            </Answer>
        )
    })

    const attempted = checkingAnswers && !answered
    return (
        <div className={clsx('question', attempted && 'not-attempted')}>
            <h3>{decode(questionObj.question)}</h3>
            <div className="answers">
                {answerElements}
            </div>
        </div>
    )
}