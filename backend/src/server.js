const app = require('./app'); // Assuming app.js is in the backend/src

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
