import { useEffect, useState } from "react";
import './App.css'
import './TaskTracker.css'

function Task({ taskName }) {
    return <li>{taskName}</li>;
}

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if(newTask.trim()) {
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }
    };

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            addTask();
        }
    };

    return (
        <div>
            <h1>Task List</h1>
        <ul>
            {tasks.map((task, index) => (
                <Task key={index} taskName={task}/>
            ))}
        </ul>
        <div>
            <input type="text" placeholder="Enter a new task" value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyPress}
            />
        <button
        onClick={addTask}>Add Task</button>
        </div>
        </div>
    );
}

export default TaskList;