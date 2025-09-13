import React from 'react'
import {useState} from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if(input.trim() === "") return;
        setTasks([...tasks, {
            id: Date.now(), // Generate unique ID
            text: input,
            completed: false
        }]);
        setInput("");
    };

    const toggleTask = (id) => {
        const newTasks = tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        );
        setTasks(newTasks);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <>
            <h1>To Do App</h1>
            
            <input 
                value={input} 
                type='text'
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span 
                            style={{textDecoration: task.completed ? "line-through" : "none"}} 
                            onClick={() => toggleTask(task.id)}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoApp