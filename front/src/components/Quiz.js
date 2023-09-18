import React, { useState } from "react";
import { questions } from "./Questions";
import { useNavigate } from "react-router-dom";

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

export default function Quiz(props) {
  const [responses, setResponses] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const limit = 25;
  const navigate = useNavigate();

  const handleAnswerButtonClick = (index) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < limit) {
      setResponses([...responses, [currentQuestion, index]]);
      updateAnswerValue(index);
      setCurrentQuestion(nextQuestion);
    } else {
      console.log(responses);
      navigate("/result");
    }
  };

  const question = questions[currentQuestion];

  const updateAnswerValue = (index) => {
    const updatedValue =
      currentQuestion === 0 ? { 0: 0, 1: 0, 2: 0, 3: 0 } : props.answerValue;
    updatedValue[index] = updatedValue[index] + 1;
    props.setAnswerValue(updatedValue);
    console.log(updatedValue);
    console.log(index);
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
