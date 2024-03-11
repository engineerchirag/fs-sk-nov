import { useState, useEffect } from 'react';

const counterReducer = (state, action) => {
    // write business logic
    switch(action.type) {
        case 'INCREMENT': {
            return { count: state.count + 1}
        }
        case 'DECREMENT': {
            return { count: state.count - 1}
        }
        case 'UPDATE' : {
            return { count: state.count + action.payload}
        }
        default: {
            return state;
        }
    }

};

const CounterWithReducer = ({ label, theme }) => {
    const className = `counter-wrapper ${theme}`;

    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const handleDecrease = () => {
        dispatch({ type: 'DECREMENT'});
    };

    const handleIncrease = () => {
        dispatch({ type: 'INCREMENT'});
    };

    const handleUpdate = (e) => {
        const val = Number(e.target.value || 0);
        dispatch({ type: 'UPDATE', payload: val});
    }

    return (
        <div className={className}>
            <h1>Counter {label}</h1>
            <div>
                <button onClick={handleDecrease}>-</button>  { /* In JS: onclick="handleDecrease()" */}
                {count}
                <input type="number" placeholder='New Value' value={state.count} onChange={handleUpdate}/>
                <button  onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}



export default CounterWithReducer;