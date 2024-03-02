import logo from './logo.svg';
import './App.css';
import StopWatch from './components/Stopwatch';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [isVisible, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility((prevState) =>  !prevState);
  };

  return (
    <div className="App">
      <input type='checkbox' onChange={toggleVisibility}/> Toggle Visibility
      { isVisible  ? <StopWatch /> : null }
      {/* <div style={{
        display: isVisible ? 'block' : 'none',
        fontSize: '20px'
      }}>
        <StopWatch /> 
      </div> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
