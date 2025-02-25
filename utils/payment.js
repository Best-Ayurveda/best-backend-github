const Razorpay = require('razorpay');
const dotenv = require('dotenv');

dotenv.config();
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (amount) => {
  return instance.orders.create({
    amount: amount * 100, // INR in paise
    currency: 'INR',
    receipt: 'order_rcpt_123',
  });
};

module.exports = { createOrder };