import React from 'react';
import Todo from './Todo/Todo';
import useStyles from './style';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';

const Todos = ({setCurrentId}) => {
    const classes = useStyles();
    const todos = useSelector((state)=>state.todos);

    console.log("The",todos.length);
    return(
        !todos.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {todos.map((todo) =>(
                    <Grid key={todo._id} item xs={12} sm={6}>
                        <Todo todo={todo} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Todos;