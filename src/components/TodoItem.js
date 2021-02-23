import React from "react";
import "../css/TodoItem.css";
import "../css/buttons.css";

const TodoItem = ({ text, id, removeTodo }) => {
  return (
    <div className="todo-item">
      <p className="todo-item__text">{`${text.slice(0, 40)}...`}</p>
      <div className="todo-item__buttons">
        <button
          type="button"
          className="btn--delete"
          onClick={() => removeTodo(id)}
        >
          remove
        </button>
        <button type="button" className="btn--edit">
          edit
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
