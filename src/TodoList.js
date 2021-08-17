
import React from 'react';
import {Paper, List, Divider, ListItem, ListItemText} from '@material-ui/core';

function TodoList(props) {
    return (
        <Paper> 
            <List>
                {props.todos.map((todo, i) => (
                    <>
                        <ListItem key={`item-${i}`}>
                            <ListItemText key={`list-item-${i}`}>{todo.task}</ListItemText>
                        </ListItem>
                        <Divider key={`divider-${i}`} />
                    </>
                ))}
            </List>
        </Paper>

    )
}

export default TodoList;