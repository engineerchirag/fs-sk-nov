import { useState, useEffect } from 'react';

const LifeCycleExample = ({ label, theme }) => {
    const className = `counter-wrapper ${theme}`;
    const [count, setCount] = useState(0);

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

    useEffect(() => {
        // Birth: Component Did Mount
        console.log("Birth: Component Did Mount");


    }, []);

    useEffect(() => {
        // Update: Component Did Update
        console.log("Update: Component Did Update");
    });

    useEffect(() => {
        return () => {
            // Death: Component Will Unmount 
            console.log("Death: Component Will Unmount ");
        }
    }, []);

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