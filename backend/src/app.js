const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const jwtController = require('./controllers/jwtController'); // Import jwtController

const app = express();

app.use(bodyParser.json());

// User route
app.post('/api/users', userController.createUser);

// JWT token issuance route
app.post('/api/token', jwtController.issueToken);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app; // Export the app for testing
