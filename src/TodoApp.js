import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {AppBar} from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp(){
    const initialTodos= [
        {id: 1, task: 'Get a job', completed: false},
        {id: 2, task: 'Apply', completed: true},
        {id: 3, task: 'Study', completed: false}
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, {id: 4, task: newTodoText, completed: false}]);
    }
    return(
    <Paper 
        style={{
            padding:0,
            margin: 0,
            height: "100vh",
            backgroundColor:"white"
        }}
        elevation={0}
    >
        {/* <AppBar color="primary" postion='static' style={{height: '64px'}}>
            <Toolbar>
                <Typography color="inherit">TODOS HOOKS</Typography>
            </Toolbar>
        </AppBar> */}
        < TodoForm addTodo={addTodo}/>
        <TodoList className="todo-list" todos={todos} />
    </Paper>
    )
}

export default TodoApp;