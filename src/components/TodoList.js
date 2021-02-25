import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";
import "../css/TodoList.css";
import "../css/buttons.css";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <>
      <div className="todo-list">
        {state.todoArray.map((item) => {
          return <TodoItem key={item.id} {...item} />;
        })}
        <button
          className="btn--clear-all"
          onClick={() => dispatch({ type: "CLEAR_ALL_TODOS" })}
        >
          Clear all
        </button>
      </div>
    </>
  );
};

export default TodoList;
