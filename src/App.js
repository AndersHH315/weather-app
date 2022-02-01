import './App.css';
import Weather from "./Components/Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Amsterdam" />
      </header>
    </div>
  );
}

export default App;
