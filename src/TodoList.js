import React, { useState, useEffect } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos
            ? JSON.parse(savedTodos)
            : [
                { text: 'Mopping', completed: false },
                { text: 'Sweeping', completed: false },
                { text: 'Cleaning the Stove', completed: false },
            ];
    });
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo !== '') {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const handleToggleCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const handleDelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'remaining') return !todo.completed;
        return true;
    });

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new todo"
                    className="todo-input"
                    aria-label="Add a new task" />
                <button type="submit" className="todo-button" aria-label="Add task">Add</button>
            </form>

            <div className="filter-container">
                <button
                    className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                    aria-label="Show all tasks" >
                    Show All </button>
                <button
                    className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                    aria-label="Show completed tasks" >
                    Show Completed </button>
                <button
                    className={`filter-button ${filter === 'remaining' ? 'active' : ''}`}
                    onClick={() => setFilter('remaining')}
                    aria-label="Show remaining tasks" >
                    Show Remaining </button>
            </div>

            {filteredTodos.length === 0 ? (
                <p className="empty-message">No tasks to show</p>
            ) : (
                <ul className="todo-list">
                    {filteredTodos.map((todo, index) => (
                        <li key={index} className="todo-item">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleCompleted(index)}
                                className="todo-checkbox"
                                aria-label={`Mark task "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
                            />
                            <span className={todo.completed ? 'todo-text completed' : 'todo-text'}>
                                {todo.text}
                            </span>
                            <button
                                onClick={() => handleDelete(index)}
                                className="delete-button"
                                aria-label={`Delete task "${todo.text}"`}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;
