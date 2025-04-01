import pool from '@config/db';

const createTodoTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;

  try {
    pool.query(queryText);
    console.log('Todo table created if not exists');
  } catch (error) {
    console.log('Error creating todo table : ', error);
  }
};

export default createTodoTable;
