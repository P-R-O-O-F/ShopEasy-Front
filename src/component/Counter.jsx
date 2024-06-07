import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Compteur: {count}</h1>
            <button onClick={increment}>CLICK LOOSER</button>
        </div>
    );
};

export default Counter;