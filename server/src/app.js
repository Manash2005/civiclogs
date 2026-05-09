import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app; 
