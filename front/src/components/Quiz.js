import React, { useState } from "react";
import { questions } from "./Questions";

export default function Quiz() {
  const answerValue = [0, 0, 0, 0];
  const [currentQuestion, setCurrentQuestion] = useState(23);

  return (
    <>
      {false ? (
        <div className="Text-Background">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="Text-Background">
            <div className="Text">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="Text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="Text-Background">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button>{answerOption.answerText}</button>
              )
            )}
          </div>
        </>
      )}
    </>
  );
}
