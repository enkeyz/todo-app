import React from "react";
import TodoItem from "./TodoItem";
import "../css/TodoList.css";

const TodoList = ({ list, removeTodo }) => {
  return (
    <>
      {list.map((item) => {
        return <TodoItem key={item.id} {...item} removeTodo={removeTodo} />;
      })}
    </>
  );
};

export default TodoList;
