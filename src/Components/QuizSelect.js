import React from "react";

function QuizSelect(props) {
  return (
    <div className="quizSelection">
      <th>
        Difficulty:
        <br />
        <select
          name="difficulty"
          onChange={(event) => {
            props.setDifficulty(
              event.target.options[event.target.selectedIndex].value
            );
          }}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </th>
      <th>
        Quiz Type:
        <br />
        <select
          name="type"
          onChange={(event) => {
            props.setType(
              event.target.options[event.target.selectedIndex].value
            );
            console.log(props.type);
          }}
        >
          <option value="boolean">True/False</option>
          <option value="multiple">Multiple Choice</option>
        </select>
      </th>
      <th>
        Category:
        <br />
        <select
          name="category"
          onChange={(event) => {
            props.setCategory(
              event.target.options[event.target.selectedIndex].value
            );
            console.log(props.category);
          }}
        >
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Musicals & Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
      </th>
    </div>
  );
}
export default QuizSelect;
