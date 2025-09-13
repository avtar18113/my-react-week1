import { useState } from 'react'


export default function LoginToggle() {
const [loggedIn, setLoggedIn] = useState(false)
return (
<div style={{display:'flex',alignItems:'center',gap:12}}>
<button onClick={() => setLoggedIn((v) => !v)}>
{loggedIn ? 'Log Out' : 'Log In'}
</button>
{loggedIn ? <p>Welcome User ✅</p> : <p>Please Login ❗</p>}
</div>
)
}