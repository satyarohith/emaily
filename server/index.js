const express = require('express'),
  app = express(),
  port = 5000;

app.get('/', (req, res) => {
  res.send('Hello There');
});

app.listen(port, () => {
  console.log(`server running at localhost:${port}`);
});
