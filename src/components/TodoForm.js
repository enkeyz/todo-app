import React, { useState } from "react";
import "../css/TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  const onFormSubmit = (ev) => {
    ev.preventDefault();

    addTodo(todoInput);
  };

  return (
    <form className="todo-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        name="todo-text"
        id="todo-text"
        className="todo-input"
        value={todoInput}
        onChange={(ev) => setTodoInput(ev.target.value)}
      />
      <button type="submit" className="btn--submit">
        submit
      </button>
    </form>
  );
};

export default TodoForm;
