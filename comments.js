// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Create a get route that sends back the comments data
// 4. Start the server on port 3000

// 1. Import express
const express = require('express');
const comments = require('./data/comments');
const products = require('./data/products');

// 2. Create an instance of express
const app = express();

// 3. Create a get route that sends back the comments data
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product._id === Number(id));
    res.json(product);
});

// 4. Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});