import React, {useContext} from 'react'
import {QuizContext} from "../Helpers/Contexts";
import {Questions} from '../Helpers/QuestionBank'
import "../App.css";

function EndScreen() {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const restartQuiz =() => {
        setScore(0);
        setGameState("menu");
    }
    return <div className="EndScreen">
        <h2>Congratulations! </h2>
        <h1> Your score was {score} / {Questions.length} </h1>
        <h2>Thanks for playing ! </h2>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
}

export default EndScreen
