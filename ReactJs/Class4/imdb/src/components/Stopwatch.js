import { useState, useEffect } from 'react';

const StopWatch = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            console.log('A');
            setCount((prevCount) => {
                return prevCount + 1;
            });
        }, 1000);

        return () => {
            // Willunmount 
            clearInterval(intervalRef);
        }
    }, []);

    return (
        <div>
            <h1>Stopwatch</h1>
            {count}
        </div>
    )
}

export default StopWatch;