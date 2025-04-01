import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import pool from '@config/db';
import todoRoutes from '@routes/todosRoutes';

const app: Express = express();

app.use(express.json());
app.use(cors());

//USING ROUTES
app.get('/', async (req: Request, res: Response) => {
  const result = await pool.query('SELECT current_database()');
  res.status(200).json({
    status: 'success',
    data: result.rows[0].current_database
  });
});

app.use('/api/v1/todos', todoRoutes);

export default app;
