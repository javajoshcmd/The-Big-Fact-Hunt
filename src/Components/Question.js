import React from "react";

function Question(props) {
  const clickAnswer = (event) => {
    props.setIndex(1 + props.index);
    props.setTimeLeft(30);

    if (event.target.value === props.question.correctAnswer) {
      questionCorrect();
    } else {
      questionIncorrect();
    }
    console.log(props.points);
  };

  const questionCorrect = () => {
    if (props.timeLeft >= 0) {
      props.setIndex(props.index + 1);
      props.setPoints(props.points + 10);
    }
  };

  const questionIncorrect = () => {
    if (props.timeLeft >= 0) {
      props.setIndex(props.index + 1);
    }
  };

  return (
    <div>
      <h1 className="question">
        {props.question.question
          .replace("&#039;", "'")
          .replace("&#O39", "'")
          .replace("&quot;", '"')
          .replace("&QUOT;", '"')
          .replace("&qu0t;", '"')
          .replace("&ecirc;", "ê")
          .replace("&ndash;", "-")
          .replace("&ldquo;", '"')
          .replace("&rdquo;", '"')
          .replace("&eacute;", "é")
          .replace("&ocirc;", "ô")
          .replace("&uuml;", "ü")
          .replace("&Uuml;", "Ü")}
      </h1>
      <h2 className="category-difficulty">
        {props.question.category} | {props.question.difficulty}
      </h2>
      <div className="allAnswers">
        {props.question.answers.map((answer, answerID) => (
          <button
            className="answer-button"
            key={answerID}
            onClick={clickAnswer}
            value={answer}
          >
            {" "}
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
