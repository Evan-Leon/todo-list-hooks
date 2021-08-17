
import React from 'react';
import {Paper, List, Divider, ListItem, ListItemText} from '@material-ui/core';

function TodoList(props) {
    return (
        <Paper> 
            <List>
                {props.todos.map((todo, i) => (
                    <>
                        <ListItem key={`item-${i}`}>
                            <ListItemText key={i}>{todo.task}</ListItemText>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>

    )
}

export default TodoList;