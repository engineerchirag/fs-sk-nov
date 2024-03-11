import useCounter from "../hooks/counter.hook";

const CounterWithHook = () => {
  const { count, increase, decrease, reset } = useCounter(10);
  return (
    <div>
      Count: {count}
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterWithHook;
