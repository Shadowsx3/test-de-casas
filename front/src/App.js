import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Introduction from "./components/Introduction";
import Quiz from "./components/Quiz";

// Pages ----------------------

const About = () => {
  return <h2>About</h2>;
};

// Routing --------------------
//width: "1821px", height: "876px"

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url("./FONDO.png")`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Router>
        <div>
          <div>
            <Link to="/">Introduction</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/about">About</Link>
          </div>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
