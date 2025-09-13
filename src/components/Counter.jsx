import { useState } from 'react'


export default function Counter() {
const [count, setCount] = useState(0)
return (
<div style={{display:'flex',alignItems:'center',gap:8}}>
<button onClick={() => setCount((c) => c - 1)}>-</button>
<strong>Count: {count}</strong>
<button onClick={() => setCount((c) => c + 1)}>+</button>
<button className="secondary" onClick={() => setCount(0)}>Reset</button>
</div>
)
}