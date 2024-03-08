import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Counter delta={1} label={"Counter with delta 1 "}/>
    </div>
  );
}

export default App;
