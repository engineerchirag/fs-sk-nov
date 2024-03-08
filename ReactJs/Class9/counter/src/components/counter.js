import { useState } from 'react';
import { change, decrease, increase } from '../reducers/counterReducer';
import { useDispatch, useSelector } from 'react-redux';

const Counter = ({ label, theme, delta }) => {
    const className = `counter-wrapper ${theme}`;
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleDecrease = () => {
        dispatch(decrease(delta));
    };

    const handleIncrease = () => {
        dispatch(increase(delta));
    };

    const handleUpdate = (e) => {
        dispatch(change(e.target.value));
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

export default Counter;