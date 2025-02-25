const express = require('express');
const router = express.Router();
const { createOrder } = require('../utils/payment');

router.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  try {
    const order = await createOrder(amount);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;