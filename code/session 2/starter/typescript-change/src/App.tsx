
function DevCampButton({ origin, children }) {
  // console.log(origin);
  // console.log(children);
  return <button onClick={() => alert(`Hello from ${origin}`)}>{children}</button>
}

function App() {
  return <DevCampButton origin="My First React App"><span>Hello there</span>Click me!</DevCampButton>;
}

export default App;