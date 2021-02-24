import React from "react";
import TodoItem from "./TodoItem";
import "../css/TodoList.css";
import "../css/buttons.css";

const TodoList = ({ list, removeTodo, clearAllTodos, editTodo }) => {
  return (
    <>
      <div className="todo-list">
        {list.map((item) => {
          return (
            <TodoItem
              key={item.id}
              {...item}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          );
        })}
        <button className="btn--clear-all" onClick={clearAllTodos}>
          Clear all
        </button>
      </div>
    </>
  );
};

export default TodoList;
