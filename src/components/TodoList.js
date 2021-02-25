import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

import "../css/TodoList.css";
import "../css/buttons.css";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <>
      <TransitionGroup className="todo-list">
        {state.todoArray.map((item) => {
          return (
            <CSSTransition key={item.id} timeout={200} classNames="todo-item">
              <TodoItem {...item} />
            </CSSTransition>
          );
        })}
        <button
          className="btn--clear-all"
          onClick={() => dispatch({ type: "CLEAR_ALL_TODOS" })}
        >
          Clear all
        </button>
      </TransitionGroup>
    </>
  );
};

export default TodoList;
