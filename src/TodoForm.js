import React from 'react';
import {Paper, TextField} from '@material-ui/core';
import useInputState from './hooks/useInputState';

function TodoForm(props){
    const [value, handleChange, reset] = useInputState('');
    return(
        <Paper>
            {value}
            <TextField value = {value} onChange={handleChange} />

        </Paper>
    )
}

export default TodoForm;