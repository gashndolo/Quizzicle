import { useState } from "react"
import clsx from "clsx"

export default function Answer({children, pickAnswer, objKey, selected, checkingAnswers, correctAnswer}) {

    function clickAnswer() {
        pickAnswer(objKey, children)
    }

    const wrong = checkingAnswers && correctAnswer !== children && selected
    const right = checkingAnswers && correctAnswer == children && selected
    return (
        <button 
            onClick={clickAnswer}
            className={clsx('choice', selected && 'selected',  right && "correct", wrong && "wrong")}
        >
            {children}
        </button>
    )
}
//className={clsx('choice', selected && 'selected',  )}