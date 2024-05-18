const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const port = process.env.PORT || 80; // Use the provided port or default to 80

app.use(cors());

// Define a route to fetch data
app.get('/sayHello', (req, res) => {
  res.status(200).json({ message: "Hello User" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
