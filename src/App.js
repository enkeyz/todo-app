import React, { useState, useEffect } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import getLocalStorageItems from "./utils/getLocalStorageItems";
import "./css/App.css";

const App = () => {
  const [todoArray, setTodoArray] = useState(getLocalStorageItems());

  const addTodo = (text) => {
    setTodoArray([...todoArray, { text, id: new Date().getTime().toString() }]);
  };

  const removeTodo = (id) => {
    setTodoArray(todoArray.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoArray));
  }, [todoArray]);

  return (
    <>
      <header className="todo-header">
        <h1>Todo app</h1>
      </header>
      <main className="todo-main">
        <section className="todo-section">
          <TodoForm addTodo={addTodo} />
          {todoArray.length > 0 && (
            <TodoList list={todoArray} removeTodo={removeTodo} />
          )}
        </section>
      </main>
    </>
  );
};

export default App;
