import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { usePersistentReducer } from "./hooks/usePersistentReducer";
import { todoReducer } from "./reducer/todoReducer";
import "./css/App.css";

export const TodoContext = React.createContext();

const initialState = {
  todoArray: [],
};

const App = () => {
  const [state, dispatch] = usePersistentReducer(
    todoReducer,
    initialState,
    "todo-list"
  );

  console.log(state);

  return (
    <>
      <header className="todo-header">
        <h1>Todo app</h1>
      </header>
      <main className="todo-main">
        <section className="todo-section">
          <TodoContext.Provider value={{ state, dispatch }}>
            <TodoForm />
            {state.todoArray.length > 0 && <TodoList />}
          </TodoContext.Provider>
        </section>
      </main>
    </>
  );
};

export default App;
