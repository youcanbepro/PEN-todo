import express from 'express';
import {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo
} from '@controllers/todosController'; // Importing the controller functions

const router = express.Router();

router.route('/').get(getAllTodos).post(createTodo);

router.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo);

export default router;
