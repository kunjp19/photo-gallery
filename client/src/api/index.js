import axios from 'axios';

const url = 'https://photo-gallery-gaurang.herokuapp.com/todos';

export const fetchTodos = () => axios.get(url);

export const createTodo = (newTodo) => axios.post(url, newTodo);

export const updateTodo = (_id, updateTodo) => axios.patch(`${url}/${_id}`, updateTodo);

export const deleteTodo = (_id) => axios.delete(`${url}/${_id}`);

export const likePosts = (_id) => axios.patch(`${url}/${_id}/likePosts`);
