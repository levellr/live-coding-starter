import express, { Application, Request, Response } from 'express';
import { env, exit } from 'process';
import Database from 'better-sqlite3';
require('dotenv').config();

const PORT: number = 3001;

// Create an Express webapp
const app: Application = express();
// Open a SQLite database, stored in memory for this exercise
const database = new Database(':memory:');

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello world! 👋');
});

app.listen(PORT, (): void => {
  console.log(`Server is up on port ${PORT}`);
});
