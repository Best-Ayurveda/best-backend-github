const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const pool = require('./config/db');
const { createProductTable } = require('./models/Product'); // Import the function

// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to Best Ayurveda Backend!');
});

// Import and use product routes
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes); // Mount under '/api' endpoint

const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api', paymentRoutes);

// Create the products table on server start
createProductTable();

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connection successful. Current timestamp:', res.rows[0].now);
  }
});

// Debug logs
console.log('[DEBUG] DB_USER:', process.env.DB_USER);
console.log('[DEBUG] DB_HOST:', process.env.DB_HOST);
console.log('[DEBUG] DB_NAME:', process.env.DB_NAME);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});