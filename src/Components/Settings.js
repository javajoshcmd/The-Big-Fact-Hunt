import React, { useEffect, useState } from "react";
import Question from "./Question";

function Settings() {
  // useState hooks
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(null);
  const [questionCategory, setQuestionCategory] = useState("");
  const [questionDifficulty, setQuestionDifficulty] = useState("");
  const [bool, setBool] = useState(false);
  const [question, setQuestions] = useState();

  //useEfffect hooks
  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setOptions(response.trivia_categories);
        setQuestions(response.results[0]);
      })
      .catch((err) => console.log(err));
  }, [setOptions]);

  //event called when option chosen
  const handleCategoryChange = (event) => {
    setQuestionCategory(event.target.value);
  };
  const handleDifficultyChange = (event) => {
    setQuestionDifficulty(event.target.value);
  };
  const handleQuestions = () => {
    setQuestions(question.results[0]);
  };

  // loading statement
  if (!loading) {
    return (
      <div>
        {bool ? (
          <div className="question-text">{handleQuestions}</div>
        ) : (
          <div>
            <div className="topic">
              <h2>Topics:</h2>
              <select value={questionCategory} onChange={handleCategoryChange}>
                <option>All</option>
                {options &&
                  options.map((option) => (
                    <option value={option.id} key={option.id}>
                      {option.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="difficulty">
              <h2>Difficulty:</h2>
              <select
                value={questionDifficulty}
                onChange={handleDifficultyChange}
              >
                <option value="" key="difficulty-0">
                  All
                </option>
                <option value="easy" key="difficulty-1">
                  Easy
                </option>
                <option value="medium" key="difficulty-2">
                  Medium
                </option>
                <option value="hard" key="difficulty-3">
                  Hard
                </option>
              </select>
            </div>
            <div className="start">
              <input
                type="submit"
                value="Start Quiz"
                onClick={() => {
                  setBool(true);
                }}
              ></input>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    <p>LOADING...</p>;
  }
}
export default Settings;
