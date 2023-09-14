import React, { useState } from "react";
import { questions } from "./Questions";
import Result from "./Result";

let nextValue = 0;

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
  const { answerOption, isImage, index, onClick } = props;

  return (
    <button className={`Question-${index + 1}`} onClick={() => onClick(index)}>
      {isImage ? (
        <img
          style={{ width: "90%", height: "90%" }}
          className="questionImage"
          src={`./recursos${answerOption.answerText}`}
          alt="answer"
        />
      ) : (
        <p className="questionText">{answerOption.answerText}</p>
      )}
    </button>
  );
}

export default function Quiz() {
  const initialValue = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];
  const [responses, setResponses] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerValue, setAnswerValue] = useState(initialValue);
  const limit = 25;

  const handleAnswerButtonClick = (index) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < limit) {
      setResponses([...responses, [currentQuestion, index]]);
      setCurrentQuestion(nextQuestion);
    } else {
      console.log(responses);
      alert("No more questions for you");
      return Result;
    }
  };

  const question = questions[currentQuestion];

  const updateAnswerValue = (index) => {
    const newValue = answerValue.map((values) => {
      if (index === 1 && values.id === 1) {
        setAnswerValue([...values, { value: nextValue++ }]);
      } else if (index === 2 && values.id === 2) {
        setAnswerValue([...values, { value: nextValue++ }]);
      } else if (index === 3 && values.id === 3) {
        setAnswerValue([...values, { value: nextValue++ }]);
      } else if (index === 4 && values.id === 4) {
        setAnswerValue([...values, { value: nextValue++ }]);
      }
    });
    console.log(newValue);
    return newValue;
  };

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
            updateAnswerValue={updateAnswerValue}
          />
          <div className="Questions">
            {question.answerOptions.map((answerOption, index) => (
              <AnswerOption
                key={index}
                isImage={question.imageAnswer}
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
