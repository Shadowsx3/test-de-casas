import React, { useState } from "react";
import { questions } from "./Questions";

export default function Quiz() {
  const answerTotal = [0, 0, 0, 0];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert("finfinfinfin");
    }
  };

  return (
    <>
      <img className="Quiz-Logo" src="./TEST RECURSOS/1.png" />
      {false ? (
        <div className="Text-Background">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="Question-Background">
            <div className="Text">
              <span>Pregunta 1</span>/{questions.length}
              <div className="Question-Text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
          </div>
          <div className="Question-1">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button onClick={() => handleAnswerButtonClick()}>
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </>
  );
}
