import React from "react";

function GameEnd(props) {
  const saveResults = async () => {
    console.log(props);

    const restartQuiz = (event) => {
      props.setQuizStarted(false);
    };

    setTimeout(saveResults, 2500);

    return (
      <div className="gameEnd">
        <div className="restart-quiz-container">
          <button id="restartQuiz" value="restartQuiz" onClick={restartQuiz}>
            Play again?
          </button>
        </div>
      </div>
    );
  };
}

export default GameEnd;
