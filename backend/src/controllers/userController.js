const { validationResult } = require('express-validator');
const { pool } = require('../db/dbConnection'); // Import the database connection pool
const { isValidEmail } = require('../utils/utils'); // Import the utility function

async function createUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { username, email } = req.body;
  
    // Validate the email using the utility function
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
  
    try {
      // Insert user data into the database using a parameterized query
      const query = 'INSERT INTO users(username, email) VALUES($1, $2) RETURNING *';
      const values = [username, email];
  
      const result = await pool.query(query, values);
  
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  

module.exports = {
  createUser,
};
