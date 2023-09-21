import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Introduction from "./components/Introduction";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

// Routing --------------------
const initialValue = { 0: 0, 1: 0, 2: 0, 3: 0 };

const App = () => {
  const [answerValue, setAnswerValue] = useState(initialValue);
  return (
    <>
      <Router>
        <div className="centered-div">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route
              path="/quiz"
              element={
                <Quiz
                  answerValue={answerValue}
                  setAnswerValue={setAnswerValue}
                />
              }
            />
            <Route
              path="/result"
              element={<Result answerValue={answerValue} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
