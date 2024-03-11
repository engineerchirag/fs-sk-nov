
import { useState } from 'react';
const useCounter = (initialValue, delta=1) => {
    const [count, setCount] = useState(initialValue);

    const increase = () => {
        setCount(preVal => preVal + delta);
    };

    const decrease = () => {
        setCount(preVal => preVal - delta);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return { count, increase, decrease, reset };
}

export default useCounter;
