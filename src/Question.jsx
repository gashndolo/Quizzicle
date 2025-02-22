import { useRef, useState } from "react"
import Answer from "./Answer"
import clsx from "clsx"
/*
export default function Question({questionObj, checkingAnswers}) {
    const [selectedAnswer, setSelectedAnswer] = useState({})
    const correctAnswer = "Napoleon"

    function pickAnswer(key, value) {
        setSelectedAnswer({key, value})
    }
    return (
        <div>
            <p>{questionObj}</p>
            <Answer objKey={1} pickAnswer={pickAnswer} selected={selectedAnswer.value === "Cleopatra"} 
                checkingAnswers={checkingAnswers} 
                correctAnswer={correctAnswer}
            >
                Cleopatra
            </Answer>
            <Answer objKey={2} pickAnswer={pickAnswer} selected={selectedAnswer.value === "Alexandra the great"} 
                checkingAnswers={checkingAnswers}  
                correctAnswer={correctAnswer}
            >
                Alexandra the great
            </Answer>
            <Answer objKey={3} pickAnswer={pickAnswer} selected={selectedAnswer.value === "King Tut"} 
                checkingAnswers={checkingAnswers} 
                correctAnswer={correctAnswer}
            >
                King Tut
            </Answer>
            <Answer objKey={4} pickAnswer={pickAnswer} selected={selectedAnswer.value === "Napoleon"} 
                checkingAnswers={checkingAnswers} 
                correctAnswer={correctAnswer}
            >
                Napoleon
            </Answer>
        </div>
    )
}*/


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
                {answer}
            </Answer>
        )
    })

    const attempted = checkingAnswers && !answered
    return (
        <div className={clsx(attempted && 'not-attempted')}>
            <p>{questionObj.question}</p>
            {answerElements}
        </div>
    )
}