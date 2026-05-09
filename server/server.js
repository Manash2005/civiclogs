import app from './src/app.js';
import colors from 'colors';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';

dotenv.config();


const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
    });
  } catch (error) {
    console.log('Server Error: '.red.bold, error);
    process.exit(1);
  }
};

const stopServer = () => {
  console.log('Shutting down server...'.red.bold);
  process.exit(0);
};

process.on('SIGINT', stopServer);
process.on('SIGTERM', stopServer);

startServer();