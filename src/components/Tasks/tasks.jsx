import React, { useState, useEffect } from 'react';
import '../Tasks/tasks.css';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Load tasks from local storage when the component mounts
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // Update local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (inputValue.trim() !== '') {
            const newTask = {
                id: Math.random(),
                text: inputValue,
                completed: false
            };
            setTasks(prevTasks => [...prevTasks, newTask]);
            setInputValue('');
        }
    };

    const toggleTaskCompletion = (id) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };                    
                }
                return task;
            });
        });
    };

    return (
        <div className="tasks-container">
            <h3>Keep track of your tasks</h3>
            <div className="task-input">
                <input
                    type="text"
                    placeholder="Enter task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            {tasks.map(task => (
                <div key={task.id} className="task">
                    <label className="task-label">
                        {task.completed ? (
                            <div style={{width:"100%"}}>
                                <span><b>-  </b>{task.text}</span>
                                <span className="task-check">Completed!  </span>
                            </div>
                        ) : (
                            <>
                                <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                                <b>-   </b>{task.text}
                                </span>
                                <input 
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
                                />
                            </>
                        )}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Tasks;
