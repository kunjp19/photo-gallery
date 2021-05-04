import express from 'express';
import{getTodos, createTodo, updateTodo, deleteTodo, likePost} from '../controller/todo.js';

const router = express.Router();

router.get('/',getTodos);
router.post('/',createTodo);
router.patch('/:id',updateTodo);
router.delete('/:id',deleteTodo);
router.patch('/:id/likePosts', likePost);

export default router;