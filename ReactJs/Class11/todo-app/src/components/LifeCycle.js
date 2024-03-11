import { useState, useEffect } from 'react';

const LifeCycleExample = ({ label, theme, details }) => {
    console.log(details);
    const className = `counter-wrapper ${theme}`;
    const [count, setCount] = useState(() => {
        return 15;
    });

    const handleDecrease = () => {
        setCount(count - 1);
        console.log(count);
    };

    const handleIncrease = () => {
        setCount(count + 1);
        console.log(count);
    };

    const handleUpdate = (e) => {
        const val = Number(e.target.value || 0);
        setCount(val);
    }

    return (
        <div className={className}>
            <h1>Counter {label}</h1>
            <div>
                <button onClick={handleDecrease}>-</button>  { /* In JS: onclick="handleDecrease()" */}
                {count}
                <input type="number" placeholder='New Value' value={count} onChange={handleUpdate}/>
                <button  onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}



export default LifeCycleExample;