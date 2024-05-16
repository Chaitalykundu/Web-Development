import "./App.css";

let name = "Chaitaly";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My first App</h1>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </nav>
      </header>
      <main>
        <div className="container"> 
        <h2>Hello {name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic sed
            dolorum illo assumenda consequatur alias vero tempore debitis
            deserunt eveniet, quis iusto ipsa ullam nesciunt obcaecati expedita
            quibusdam. Qui perspiciatis non voluptatibus unde maiores totam
            quaerat dolorem cupiditate?
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
