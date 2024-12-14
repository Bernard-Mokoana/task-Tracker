import { useState } from "react";
import './App.css'

function Task({ taskName }) {
    return <li>{taskName}</li>;
}

function TaskList() {
    const [tasks, setTasks] = useState(['Buy groceries'
    ,'Clean room']);

    const addTask = () => {
        const newTask = `Task ${tasks.length + 1}`;
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
        <ul>
            {tasks.map((task, index) => {
               return <Task key={index} taskName={task}/>
            })}
        </ul>
        <button
        onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskList;