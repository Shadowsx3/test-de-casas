import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Introduction from "./components/Introduction";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

// Routing --------------------
//width: "1821px", height: "876px"
const initialValue = { 0: 0, 1: 0, 2: 0, 3: 0 };

const App = () => {
  const [answerValue, setAnswerValue] = useState(initialValue);
  return (
    <div
      style={{
        backgroundImage: `url("./FONDO.png")`,
        width: "200vw",
        height: "200vh",
      }}
    >
      <Router>
        <div>
          <div>
            <Link to="/">Introduction</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/result">Result(just for testing)</Link>
          </div>
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
    </div>
  );
};

export default App;
