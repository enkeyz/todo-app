import React, { useState, useRef, useEffect, useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { TodoContext } from "../App";
import "../css/TodoItem.css";
import "../css/buttons.css";

const TodoItem = ({ text, id, isCompleted }) => {
  const { dispatch } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setEditingText] = useState(text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isEditing) return;

    inputRef.current.focus();
  }, [isEditing]);

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={todoText}
            onChange={(ev) => setEditingText(ev.target.value)}
            className="todo-item__inline"
            ref={inputRef}
          />
          <button
            type="button"
            className="btn--edit"
            onClick={() => {
              dispatch({ type: "EDIT_TODO", payload: { id, text: todoText } });
              setIsEditing(false);
            }}
          >
            <FaEdit size={20} />
          </button>
        </>
      ) : (
        <>
          <p
            className="todo-item__text"
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
            onClick={() =>
              dispatch({
                type: "COMPLETE_TODO",
                payload: { id, isCompleted: !isCompleted },
              })
            }
          >
            {todoText.length > 50 ? `${todoText.slice(0, 50)}...` : todoText}
          </p>
          <div className="todo-item__buttons">
            <button
              type="button"
              className="btn--delete"
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: { id } })}
            >
              <FaTrashAlt size={20} />
            </button>
            <button
              type="button"
              className="btn--edit"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <FaEdit size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
