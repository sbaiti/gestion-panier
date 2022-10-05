const express = require('express');
const path = require('path');

const productRoutes = require('./routes/product');

const app = express();

require("./middleware/cors")(app);

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/products', productRoutes);

module.exports = app;
