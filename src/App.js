import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./css/App.css";

const App = () => {
  const [todoArray, setTodoArray] = useLocalStorage("todo-list", []);

  const addTodo = (text) => {
    setTodoArray([
      { text, isCompleted: false, id: new Date().getTime().toString() },
      ...todoArray,
    ]);
  };

  const removeTodo = (id) => {
    setTodoArray(todoArray.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, text) => {
    setTodoArray(
      todoArray.map((todo) => {
        if (todo.id === id) return { ...todo, text };
        return todo;
      })
    );
  };

  const completeTodo = (id, value) => {
    setTodoArray(
      todoArray.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted: value };
        return todo;
      })
    );
  };

  const clearAllTodos = () => {
    setTodoArray([]);
  };

  return (
    <>
      <header className="todo-header">
        <h1>Todo app</h1>
      </header>
      <main className="todo-main">
        <section className="todo-section">
          <TodoForm addTodo={addTodo} />
          {todoArray.length > 0 && (
            <TodoList
              list={todoArray}
              removeTodo={removeTodo}
              editTodo={editTodo}
              clearAllTodos={clearAllTodos}
              completeTodo={completeTodo}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default App;
