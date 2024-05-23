import './App.css';

function Button() {
  return (
    <button>I am button</button>
  );
}

const name = 'Chaitaly';

function App() {
  return (
    <>
    <div className='app'>
      <h1>Hello World</h1>
      <Button />

    <h1>Hedy Lamarr's Todos</h1>
    <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      className="photo"
    />
    <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
    </ul>
    </div>

    <div className="todo">
      <h1>{name}'s ToDo List</h1>
    </div>
    </>
  );
}

export default App;
