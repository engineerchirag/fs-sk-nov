import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import LifeCycleExample from './components/LifeCycle';
import { useState, useEffect } from 'react';
import CounterWithHook from './components/CounterWithHook';
import List from './components/List';

function App() {
  const [isCounterVisible, setCounterVisibility] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCounterVisibility(false);
    }, 10000);
  }, []);


  return (
    <List />
    // <div className="App">
    //     {/* { isCounterVisible ? <LifeCycleExample details={{ title: "Sample Counter" }}/> :  null } */}
    //     {/* <TodoApp /> */}
    //     {/* <CounterWithHook /> */}
    // </div>
  );
}

export default App;
