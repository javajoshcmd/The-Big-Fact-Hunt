import React, { useState, useEffect } from "react";
import "./App.css";
import Start from "./Components/Start";
import Question from "./Components/Question";
import End from "./Components/End";
import Modal from "./Components/Modal";
import HandleFetch from "./Components/FetchData";
let interval;
const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);
  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  return (
    <div className="App">
      {step === 1 && <start onQuizStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={quizData.data[aciveQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={quizData.data}
          onReset={resetClickHandler}
          onAnswersCheck={() => setShowModal(true)}
          time={time}
        />
      )}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          results={answers}
          data={quizData.data}
        />
      )}
    </div>
  );
};
export default App;
