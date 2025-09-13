import { useState } from 'react'


export default function FormExample() {
const [form, setForm] = useState({ name: '', email: '' })


function handleChange(e) {
const { name, value } = e.target
setForm((f) => ({ ...f, [name]: value }))
}


function handleSubmit(e) {
e.preventDefault()
alert(`Name: ${form.name}\nEmail: ${form.email}`)
}


return (
<form onSubmit={handleSubmit} style={{display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}}>
<input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} />
<input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
<button type="submit">Submit</button>
</form>
)
}