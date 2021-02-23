import React from "react";
import TodoItem from "./TodoItem";
import "../css/TodoList.css";
import "../css/buttons.css";

const TodoList = ({ list, removeTodo }) => {
  return (
    <>
      <div className="todo-list">
        {list.map((item) => {
          return <TodoItem key={item.id} {...item} removeTodo={removeTodo} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
