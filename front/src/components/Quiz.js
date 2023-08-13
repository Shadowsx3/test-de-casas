import React, { useState } from "react";
import questions from "./Questions";
import questionText from "./Questions"; //i dont get why it doesnt work

export default function Quiz() {
  const answerValue = [0, 0, 0, 0];
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
            <div className="Text">{questions[0]}</div>
          </div>
          <div className="Text-Background">
            <button>Answer 1</button>
            <button>Answer 2</button>
            <button>Answer 3</button>
            <button>Answer 4</button>
          </div>
        </>
      )}
    </>
  );
}
