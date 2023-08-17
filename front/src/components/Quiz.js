import React, { useState } from "react";
import { questions } from "./Questions";

function Question(props) {
  const { responses, currentQuestion } = props;
  const question = questions[currentQuestion];

  return (
    <div className="Question-Background">
      <div className="Text">
        <span>Pregunta {responses.length + 1}</span>/{questions.length}
        <div className="Question-Text">{question.questionText}</div>
      </div>
    </div>
  );
}

function AnswerOption(props) {
  const { answerOption, index, onClick } = props;

  return (
    <button className={`Question-${index + 1}`} onClick={() => onClick(index)}>
      <p className="questionText">{answerOption.answerText}</p>
    </button>
  );
}

export default function Quiz() {
  const [responses, setResponses] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const limit = 25;

  const handleAnswerButtonClick = (index) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < limit) {
      setResponses([...responses, [currentQuestion, index]]);
      setCurrentQuestion(nextQuestion);
    } else {
      console.log(responses);
      alert("No more questions for you");
    }
  };

  const question = questions[currentQuestion];

  return (
    <>
      <img
        className="Quiz-Logo"
        alt="icon"
        src={`./recursos/${question.questionIcon}`}
      />
      {responses.length < questions.length ? (
        <>
          <Question
            responses={responses}
            currentQuestion={currentQuestion}
            handleAnswerButtonClick={handleAnswerButtonClick}
          />
          <div className="Questions">
            {question.answerOptions.map((answerOption, index) => (
              <AnswerOption
                key={index}
                answerOption={answerOption}
                index={index}
                onClick={handleAnswerButtonClick}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="Text-Background">
          You scored {responses.length} out of {questions.length}
        </div>
      )}
    </>
  );
}
