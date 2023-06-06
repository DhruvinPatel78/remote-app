import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    return <div style={{ width: 350, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15, marginTop: 20 }}>
        <button style={{ width: 100, borderRadius: '8px',background: 'transparent', height: 40, border: '1px solid #2980b9', color: '#2980b9', fontSize: '20px' }} onClick={decrement}>-</button>
        <div>Count {count}</div>
        <button style={{ width: 100, borderRadius: '8px',background: '#2980b9', height: 40, borderColor: 'transparent', color: 'white', fontSize: '20px' }} onClick={increment}>+</button>
    </div>
}

export default Counter
