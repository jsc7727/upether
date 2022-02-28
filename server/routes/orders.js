const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

app.get('/login', controllers.orders.chart);
app.post('/order', controllers.orders.order);
app.post('/orders', controllers.orders.orders);
app.post('/orderbook', controllers.orders.orderbook);

module.exports = router;
