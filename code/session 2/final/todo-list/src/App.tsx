import { useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <div className="container">
      <input
        className="input"
        onChange={(e) => setInput(e.target.value.trim())}
        value={input}
        placeholder="Add todo..."
      />

      <button
        className="button"
        disabled={!input}
        onClick={() =>
          setTodos([
            ...todos,
            { id: todos.length + 1, text: input, done: false },
          ])
        }
      >
        Add todo
      </button>

      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="list-item">
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
