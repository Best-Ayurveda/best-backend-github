// // config/db.js
// const { Pool } = require('pg');

// const pool = new Pool({
//   user: String(process.env.DB_USER),        // Force string type
//   host: String(process.env.DB_HOST),
//   // host: 'localhost', // Replace process.env.DB_HOST with this
//   database: String(process.env.DB_NAME),
//   password: String(process.env.DB_PASSWORD), // Force string conversion
//   port: Number(process.env.DB_PORT) || 5432,
// });

// module.exports = pool;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',          // Hardcoded username
  host: 'localhost',
  database: 'best_backend_db',
  password: 'best1236',       // Hardcoded password
  port: 5432,
});

module.exports = pool;