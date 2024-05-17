import React, { useState } from 'react'

function Todo() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isTaskDone, setIsTaskDone] = useState(false);

    const addTask = () => {
        const newTaskObj = document.getElementById("taskInput").value;
        setTasks(t => [...t, newTaskObj]);

        setNewTask("");
    };

    const removeTask = (idx) => {
        setTasks(t => t.filter((_, i) => i !== idx));
    };

    const handleTaskChange = (e) => {setNewTask(e.target.value)};

    const toggleStrikeThrough = (idx) => {
        const updatedItems = [...tasks];
        updatedItems[idx] = updatedItems[idx].startsWith('~~') ? updatedItems[idx].slice(2, -2) : '~~' + updatedItems[idx] + '~~';
        setTasks(updatedItems);
      };

  return (
    <div>
        <div className='task-input'>
            <input type='text'
                   placeholder='Enter a task'
                   value={newTask}
                   id='taskInput'
                   onChange={handleTaskChange}
            />
            <button className='add-button'
            onClick={addTask}>Add</button>
        </div>

        <div className='task-display'>
            <ul>
                {tasks.map((task, index) => 
                <li key={index} style={{textDecoration: task.startsWith('~~') ? 'line-through' : 'none'}}>    
                    {task.startsWith('~~') ? task.slice(2, -2) : task}
                    <button onClick={() => toggleStrikeThrough(index)}> {task.startsWith('~~') ? 'Undo' : 'Done'} </button>
                    <button className='delete-btn' onClick={() => removeTask(index)}>Delete</button> 
                </li> )}
            </ul>
        </div>
    </div>
  )
}

export default Todo