import app from './src/app.js';
import colors from 'colors';


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.green);
});