import "./App.css";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  return (
    <div className="container">
      <input
        className="input"
        placeholder="Add todo..."
      />

      <button
        className="button"
      >
        Add todo
      </button>

      <ul className="list">
        {/* Todo items will go here (with className="list-item") */}
      </ul>
    </div>
  );
};

export default App;