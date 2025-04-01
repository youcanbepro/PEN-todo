import app from './app';
import createTodoTable from './data/createTodosTable';

const port = process.env.PORT || 3000;
//Create table before starting server
createTodoTable();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
