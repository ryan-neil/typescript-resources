import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { usersRouter } from './routes/users.route';

const app: Application = express();
const PORT: number = 9001;

// middleware
app.use(cors());
app.use(express.json()); // handle json data in the request body

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the inside...');
});

// routes
app.use('/api/users', usersRouter);

// DJ, spin that sh*t
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
