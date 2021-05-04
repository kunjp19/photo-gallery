import {LIKE,CREATE,UPDATE,DELETE,FETCH_ALL} from '../constants/actionTypes.js';

export default (todos = [],action) => {
    switch(action.type){
        case FETCH_ALL:
            console.log("Fectch asction");
            return action.payload;
        case CREATE:
            return [...todos, action.payload];
        case UPDATE:
            return todos.map((todo) => todo._id = action.payload._id ? action.payload : todo);
        case DELETE:
            return todos.filter((post) => post._id != action.payload )
        case LIKE:
            return todos.map((todo) => todo._id = action.payload._id ? action.payload : todo);
        default:
            return todos;
    }
}