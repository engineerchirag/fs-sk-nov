import { useState, useTransition } from 'react';

const List = () => {
    const [list, setList] = useState([]);
    const [pending, startTransition] = useTransition();

    const generateList = () => {
        startTransition(() => {
            const data = [];
            for(let i = 0; i < 40000; i++) {
                data.push(i);
            }
            setList(data);
        })
    }

    return (<div>
        <button onClick={generateList}>Show Data</button>
        {pending ? 'Loading...' : ''}
        <ul>
            {list.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </div>)
}

export default List;