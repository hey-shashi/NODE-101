const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
  res.send('Welcome to the electronics Express app!');
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});


app.get('/search', (req, res) => {
  const { query } = req.query;
  res.send(`Search results for: ${query}`);
});

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Headphones', price: 200 },
  ];
  res.json(products);
});


app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Form received. Name: ${name}, Email: ${email}, Message: ${message}`);
});


app.use((req, res, next) => {
  res.status(404).send('404 - Page Not Found');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went bad error.');
});


app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
