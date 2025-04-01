import { Request, Response, NextFunction } from 'express';
import { asyncErrorHandler } from '@utils/asyncErrorHandler';
import pool from '@config/db';

// Standardized response function
const handleResponse = (res: Response, status: number, data: any = null) => {
  res.status(status).json(data);
};

export const getAllTodos = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await pool.query('SELECT * FROM todos');
    handleResponse(res, 200, result.rows);
  }
);

export const getTodo = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await pool.query('SELECT * FROM todos WHERE id = $1', [req.params.id]);
    handleResponse(res, 200, result.rows[0]);
  }
);

export const createTodo = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, completed } = req.body;
    const result = await pool.query(
      'INSERT INTO todos (title, description, completed) VALUES ($1, $2, $3) RETURNING *',
      [title, description, completed]
    );
    handleResponse(res, 201, result.rows[0]);
  }
);

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  console.log('updateTodo', req.body);
  const { title, description, completed } = req.body;
  const result = await pool.query(
    'UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *',
    [title, description, completed, req.params.id]
  );
  handleResponse(res, 200, result.rows[0]);
};

export const deleteTodo = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await pool.query('DELETE FROM todos WHERE id = $1', [req.params.id]);
    handleResponse(res, 204, result.rows[0]);
  }
);
