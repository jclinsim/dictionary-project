import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          {" "}
          <Dictionary />{" "}
        </main>
        <footer className="text-center">
          <small>
            {" "}
            <a href="https://github.com/jclinsim/dictionary-project">
              {" "}
              Coded by Johanna Lingard{" "}
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
