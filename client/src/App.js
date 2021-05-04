import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import todos from "./images/todos.png";
import Todos from './components/Todos/Todos';
import Form from './components/Form/Form.js';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {getTodos} from './actions/todos';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTodos());
    },[currentId, dispatch]);

    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant="h2" align="center">Photo Gallery</Typography>
                <img className={classes.image} src={todos} alt="todos" height="100"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="strech" spacing="3">
                        <Grid item xs={12} sm={7}>
                            <Todos setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;