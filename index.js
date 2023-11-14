const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

app.get('/', (req, res) => {
  res.send('<p>сервер работает</p>');
}); 

app.listen(PORT);
