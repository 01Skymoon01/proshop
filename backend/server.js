import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()
const app = express()


app.get('/products', function (req, res, next) {
    res.json(products);
});

app.get('/products/:id', function (req, res, next) {
    const product = products.filter((p) => p._id === req.params.id)
    res.json(product)
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running ${PORT}`))

