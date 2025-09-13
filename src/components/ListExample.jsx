export default function ListExample() {
const students = [
{ id: 1, name: 'Aarav' },
{ id: 2, name: 'Isha' },
{ id: 3, name: 'Kabir' },
]


return (
<ul>
{students.map((s) => (
<li key={s.id}>{s.id}. {s.name}</li>
))}
</ul>
)
}