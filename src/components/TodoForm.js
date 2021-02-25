import React, { useState, useRef, useEffect, useContext } from "react";
import { TodoContext } from "../App";
import "../css/TodoForm.css";
import "../css/buttons.css";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (ev) => {
    ev.preventDefault();

    dispatch({
      type: "ADD_TODO",
      payload: {
        text: todoInput,
        isCompleted: false,
        id: new Date().getTime().toString(),
      },
    });
    setTodoInput("");
  };

  useEffect(() => {
    if (!inputRef) return;

    inputRef.current.focus();
  }, []);

  return (
    <form className="todo-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        name="todo-text"
        id="todo-text"
        placeholder="Todo..."
        className="todo-input"
        required={true}
        value={todoInput}
        onChange={(ev) => setTodoInput(ev.target.value)}
        ref={inputRef}
      />
      <button type="submit" className="btn--submit">
        submit
      </button>
    </form>
  );
};

export default TodoForm;
