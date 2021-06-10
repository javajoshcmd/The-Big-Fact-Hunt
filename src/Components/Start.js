import React from "react";
const start = ({ onQuizStart }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Start The Quiz</h1>
          <p>Good Luck Player Have Fun</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};
export default Start;
