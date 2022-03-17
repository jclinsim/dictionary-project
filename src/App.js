import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          {" "}
          <Dictionary defaultKeyword="world" />{" "}
        </main>
        <footer className="text-center">
          {" "}
          <a href="https://github.com/jclinsim/dictionary-project">
            {" "}
            Coded by Johanna Lingard{" "}
          </a>{" "}
        </footer>
        <br />
      </div>
    </div>
  );
}

export default App;
