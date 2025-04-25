const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

// Load env variables
dotenv.config();

const app = express();

// === MIDDLEWARE === //
app.use(cors());                    // Enable CORS
app.use(express.json());           // Parse JSON bodies
app.use(logger);                   // Custom logging middleware

// === ROUTES === //
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));

// === DEFAULT ROUTE === //
app.get('/', (req, res) => {
  res.send('API is running...');
});

// === START SERVER === //
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
