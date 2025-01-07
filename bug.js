const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Assume this is an asynchronous operation, like fetching data from a database
  setTimeout(() => {
    res.send('Hello from Express!');
  }, 5000); // Simulate a 5-second delay
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});