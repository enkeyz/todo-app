import React from "react";
import "../css/TodoItem.css";

const TodoItem = ({ text, id, removeTodo }) => {
  return (
    <div className="todo-item">
      <p className="todo-item__text">{text}</p>
      <button type="button" onClick={() => removeTodo(id)}>
        remove
      </button>
      <button type="button">edit</button>
    </div>
  );
};

export default TodoItem;
