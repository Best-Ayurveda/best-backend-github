const pool = require('../config/db');

// Function to create the products table
const createProductTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price NUMERIC NOT NULL,
      category VARCHAR(50),  
      description TEXT,
      stock INT DEFAULT 0,
      imageURL VARCHAR(255)
    );
  `;
  await pool.query(query);
};

// Call the function to create the table
createProductTable();

// Export the function for use in server.js
module.exports = {
  createProductTable,
};