import * as api from '../api/index.js';
import {DELETE,CREATE,UPDATE,FETCH_ALL,LIKE} from '../constants/actionTypes.js';
//Action creators
//Redux thunk is used for asynchronous actions
export const getTodos = () => async (dispatch) => {
    try {
        const {data} = await api.fetchTodos();
        const action = {type:FETCH_ALL, payload:data}
        console.log("Fetching",data);
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const createTodo = (todo) => async (dispatch) => {
    try {
        console.log("Todo getting called");
        const {data} =await api.createTodo(todo);
        dispatch({type :CREATE, payload: data});
  
    } catch (error) {
        console.log(error.message);   
    }
}

export const updateTodo = (_id,todo) =>  async(dispatch) => {
    try {
        const {data} = await api.updateTodo(_id,todo);
        dispatch({type :UPDATE, payload: data});
    } catch (error) {
        console.log(error); 
    }
}

export const deleteTodo = (_id) => async(dispatch) =>{
    try {
        
        await api.deleteTodo(_id);
        //console.log("here");
        dispatch({type:DELETE, payload:_id})
    } catch (error) {
        console.log(error);
    }
}

export const likePosts = (_id) => async(dispatch) =>{
    try {
        console.log("like posts111");
        const {data} = await api.likePosts(_id);
        console.log(data);
        dispatch({type :LIKE, payload: data});
    } catch (error) {
        console.log(error); 
    }
}