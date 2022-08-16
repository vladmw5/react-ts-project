import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { ITodo } from "./types/todo";
import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Partial<ITodo>[]>([]);
  return (
    <div className="App">
      <TodoList todos={todos as ITodo[]} />
    </div>
  );
};

export default App;
