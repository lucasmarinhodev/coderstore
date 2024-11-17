import React, { useState } from 'react';
import './Contador.css';

const Contador = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => count > 0 && setCount(count - 1);

    return (
        <div className="contador">
            <button onClick={decrement} className="contador-btn">-</button>
            <span className="contador-valor">{count}</span>
            <button onClick={increment} className="contador-btn">+</button>
        </div>
    );
};

export default Contador;