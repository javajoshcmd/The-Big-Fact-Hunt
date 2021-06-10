import React, { useEffect, useState } from "react";
function HandleFetch() {
  // useState hook
  const [quizData, setQuizData] = useState(null);

  // useEffect hook
  useEffect(() => {
    const apiUrl = `https://opentdb.com/api.php?amount=30&category=11&difficulty=easy`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setQuizData(response.results);
      });
  });
  return <div>{}</div>;
}
export default HandleFetch;
