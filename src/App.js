import "./App.css";
import React, { useState } from "react";
import Settings from "./Components/Settings";
import Question from "./Components/Question";

function App() {
  console.log(Question);
  return (
    <div className="App">
      <h1 className="header">The Big Fact Hunt</h1>
      <Settings />
    </div>
  );
}

export default App;
