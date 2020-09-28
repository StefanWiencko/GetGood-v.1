import React from "react";
import "../scss/_NewQuizInput.scss";

function NewQuizInput({ changeHandler, elementData }) {
  return (
    <form className="newQuizForm">
      <label>
        Tytuł:
        <input
          onChange={changeHandler}
          type="text"
          name="title"
          value={elementData.title}
        />
      </label>
      <label>
        Treść pytania:
        <input
          onChange={changeHandler}
          type="text"
          name="question"
          value={elementData.question}
        />
      </label>
      <label>
        Poprawna odpowiedź:
        <input
          onChange={changeHandler}
          type="text"
          name="correctAnswer"
          value={elementData.correctAnswer}
        />
      </label>
      <label>
        Pierwsza odpowiedź:
        <input
          onChange={changeHandler}
          type="text"
          name="answer1"
          value={elementData.answer1}
        />
      </label>
      <label>
        Druga odpowiedź:
        <input
          onChange={changeHandler}
          type="text"
          name="answer2"
          value={elementData.answer2}
        />
      </label>
      <label>
        Trzecia odpowiedź:
        <input
          onChange={changeHandler}
          type="text"
          name="answer3"
          value={elementData.answer3}
        />
      </label>
    </form>
  );
}

export default NewQuizInput;
