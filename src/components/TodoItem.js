import React, { useState } from "react";
import "../css/TodoItem.css";
import "../css/buttons.css";

const TodoItem = ({ text, id, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(text);

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(ev) => setEditingText(ev.target.value)}
            className="todo-item__inline"
          />
          <button
            type="button"
            className="btn--edit"
            onClick={() => {
              editTodo(id, editingText);
              setIsEditing(false);
            }}
          >
            done
          </button>
        </>
      ) : (
        <>
          <p>{`${editingText.slice(0, 40)}...`}</p>
          <div className="todo-item__buttons">
            <button
              type="button"
              className="btn--delete"
              onClick={() => removeTodo(id)}
            >
              remove
            </button>
            <button
              type="button"
              className="btn--edit"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
