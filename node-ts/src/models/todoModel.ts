import pool from '@config/db';

export const getAllTodos = async () => {
  const result = await pool.query('SELECT * FROM todos');
  return result.rows;
};

export const createTodo = async (title: string, description: string) => {
  const result = await pool.query(
    'INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  );
  return result.rows[0];
};

export const getTodo = async (id: any) => {
  const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
  return result.rows[0];
};

export const updateTodo = async (title: string, description: string, id: any) => {
  const result = await pool.query(
    'UPDATE todos SET title = $1, description = $2 WHERE id = $3 RETURNING *',
    [title, description, id]
  );
  return result.rows[0];
};

export const deleteTodo = async (id: any) => {
  const result = await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  return result.rows[0];
};
