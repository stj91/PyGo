const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());



// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server is running smoothly on http://localhost:${PORT}`);
});
