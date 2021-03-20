const express = require('express')
const products =  require('./data/products')

const app = express()


app.get('/products', function (req, res, next) {
    res.json(products);
});

app.get('/product/:id', function (req, res, next) {
    const product = products.filter((p) => p._id=== req.params.id)
    res.json(product);
});


app.listen(5000, console.log("server running 5000"))

