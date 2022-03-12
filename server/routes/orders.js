const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/login', controllers.orders.chart);
router.post('/order', controllers.orders.order);
router.post('/orders', controllers.orders.orders);
router.post('/orderbook', controllers.orders.orderbook);

module.exports = router;
