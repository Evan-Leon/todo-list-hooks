
import React from 'react';

function TodoList(props) {
    return (
        <div>
            {props.todos.map((todo, i) => (
                <li key={i}>{todo.task}</li>
            ))}
        </div>
    )
}

export default TodoList;