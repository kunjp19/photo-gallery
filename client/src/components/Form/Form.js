import React, {useState, useEffect} from 'react';
import useStyles from './style';
import {TextField, Typography, Button, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createTodo, updateTodo} from '../../actions/todos';
import {useSelector} from 'react-redux';
const Form = ({currentId,setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const todo = useSelector((state) => currentId ? state.todos.find((t) => t._id == currentId): null);  
    const [postData, setPostData] = useState({
        creator:'', 
        title:'',
        message:'',
        selectedFile:''
    });

    useEffect(()=>{
        if(todo) setPostData(todo);
    },[todo])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updateTodo(currentId,postData));
        }
        else{
            dispatch(createTodo(postData));
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator:'', 
            title:'',
            message:'',
            selectedFile:''
        })
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit' : 'Upload'} a photo</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({ ...postData, creator:e.target.value})}></TextField>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({ ...postData, title:e.target.value})}></TextField>
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e)=>setPostData({ ...postData, message:e.target.value})}></TextField>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone ={({base64}) => setPostData({...postData, selectedFile:base64})}/> 
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

                <Button variant="contained" color="secondary" size="size" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;