import React from "react";
import "./App.css";
import "./Components/Quiz.css";
import Quiz from "../src/Components/Quiz";

function App() {
  return (
    <div className="App">
      <h1 className="Header">The Big Fact Hunt</h1>
      <Quiz />
    </div>
  );
}

export default App;
