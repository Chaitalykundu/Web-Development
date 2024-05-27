import "./App.css";

const name = 'Chaitaly';
const nameElement = <h1> {name}'s Todo List</h1>;

function App() {
  return (
  <>
  {nameElement}
    <div className="container"></div>
  </>
  );
}

export default App;
