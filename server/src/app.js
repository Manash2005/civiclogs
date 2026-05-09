import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', authRoutes);

// Error handler middleware must be last
app.use(errorHandler);

export default app; 
