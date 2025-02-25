const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Get all products
router.get('/products', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a product
router.post('/products', async (req, res) => {
  const { name, price, category, description, stock, imageURL } = req.body; // Include category
  try {
    const { rows } = await pool.query(
      'INSERT INTO products (name, price, category, description, stock, imageURL) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, price, category, description, stock, imageURL] // Include category
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;