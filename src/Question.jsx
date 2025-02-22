import { useState } from "react"
import Answer from "./Answer"

export default function Question({questionObj, checkingAnswers}) {
    const [selectedAnswer, setSelectedAnswer] = useState({})
    const correctAnswer = "Napoleon"

    function pickAnswer(key, value) {
        setSelectedAnswer({key, value})
    }
    //console.log("Selected Answer", selectedAnswer)
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
}