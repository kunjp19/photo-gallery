import React from 'react';
import useStyles from './style';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deleteTodo, likePosts} from '../../../actions/todos';

const Todo = ({todo, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={todo.selectedFile} title={todo.title}>
            </CardMedia>
            <div className={classes.overlay}>
            <Typography variant="h6">{todo.creator}</Typography>
            <Typography variant="body2">{moment(todo.creator).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <button style={{color:'white'}} size='small' onClick={()=>setCurrentId(todo._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </button>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{todo.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{todo.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={()=>dispatch(likePosts(todo._id))}>
                    <ThumbUpAltIcon fontSize="small"/>&nbsp;
                    Like&nbsp;{todo.likeCount}
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Button size="small" color="primary" onClick={()=>dispatch(deleteTodo(todo._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Todo;