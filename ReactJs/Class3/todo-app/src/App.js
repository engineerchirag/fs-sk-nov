import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import LifeCycleExample from './components/LifeCycle';
import { useState, useEffect } from 'react';

function App() {
  const [isCounterVisible, setCounterVisibility] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCounterVisibility(false);
    }, 10000);
  }, []);


  return (
    <div className="App">
        { isCounterVisible ? <LifeCycleExample /> :  null }
        {/* <TodoApp /> */}
    </div>
  );
}

export default App;
