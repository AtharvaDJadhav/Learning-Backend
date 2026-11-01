require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send('I am Atharva');
});

app.get('/login', (req, res) => {
  res.send('<h1>Login Atharva</h1>');
});

app.listen(process.env.PORT, () => {
  console.log(`Site running onn ${port}`);
});