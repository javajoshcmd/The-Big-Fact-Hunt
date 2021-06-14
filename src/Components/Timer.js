import React, { useEffect } from "react";

export default function Timer(props) {
  useEffect(() => {
    if (props.timeLeft <= 30 && props.timeLeft >= 1) {
      const timer = setInterval(() => {
        props.setTimeLeft(props.timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (props.timeLeft === 0) {
      props.setIndex(props.index + 1);
      return;
    }
  });
  return <h1 className="quiz-timeLeft">{props.timeLeft}</h1>;
}
