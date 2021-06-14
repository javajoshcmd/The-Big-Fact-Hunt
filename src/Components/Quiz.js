import React, { useEffect, useState } from "react";
import Question from "./Question";
import GameEnd from "./GameEnd";
import "./QuizSelect";
import axios from "axios";
import QuizSelect from "./QuizSelect";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [points, setPoints] = useState(0);
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("boolean");

  const getQuestions = async () => {
    let url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`;
    await axios
      .get(url)
      .then((res) => {
        let data = res.data.results.map((question) => {
          return {
            category: question.category,
            type: question.type,
            difficulty: question.difficulty,
            question: question.question,
            answers: shuffle([
              ...question.incorrect_answers,
              question.correct_answer,
            ]),
            correctAnswer: question.correct_answer,
          };
        });
        setQuestions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (questions.length === 0 && quizStarted) {
      getQuestions();
    }
  });

  const startQuiz = (event) => {
    event.preventDefault();
    event.target.style.display = "none";
    setQuizStarted(true);
  };

  const shuffle = (array) => {
    let shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  const playGame = () => {
    if (index === 10) {
      setQuizStarted(false);
      setQuizEnded(true);
      return;
    }

    return (
      <div className="quizBeingPlayed">
        <div className="quizItems">
          {questions[index] ? (
            <Question
              question={questions[index]}
              index={index}
              setIndex={setIndex}
              points={points}
              setPoints={setPoints}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="quizWrapper">
      {quizEnded ? (
        <GameEnd
          points={points}
          type={type}
          difficulty={difficulty}
          category={category}
          setQuizStarted={setQuizStarted}
          quizEnded={quizEnded}
        />
      ) : (
        <>
          {quizStarted && !quizEnded ? (
            playGame()
          ) : (
            <div className="quizData">
              <QuizSelect
                url={url}
                setUrl={setUrl}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                category={category}
                setCategory={setCategory}
                type={type}
                setType={setType}
              />
              <button id="startQuiz" value="startQuiz" onClick={startQuiz}>
                Start Quiz
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
