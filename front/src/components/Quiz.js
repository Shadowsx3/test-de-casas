import React, { useState } from "react";
import { questions } from "./Questions";

export default function Quiz() {
  const [responses, setResponses] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const limit = 25;

  const handleAnswerButtonClick = (index) => {
    setResponses([...responses, [currentQuestion, index]]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < limit) {
      setCurrentQuestion(nextQuestion);
    } else {
      console.log(responses);
      alert("No more questions for you");
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
              <span>Pregunta {responses.length + 1}</span>/{questions.length}
              <div className="Question-Text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
          </div>
          <div className="Questions">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  className={`Question-${index + 1}`}
                  key={index}
                  onClick={() => handleAnswerButtonClick(index)}
                >
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
