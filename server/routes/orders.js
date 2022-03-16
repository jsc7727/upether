const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


// @swagger
// components:
//     schemas:
//     Book:
//         type: object
//         required:
//         - title
//         - author
//         - finished
//         properties:
//         id:
//             type: integer
//             description: The auto-generated id of the book.
//         title:
//             type: string
//             description: The title of your book.
//         author:
//             type: string
//             description: Who wrote the book?
//         finished:
//             type: boolean
//             description: Have you finished reading it?
//         createdAt:
//             type: string
//             format: date
//             description: The date of the record creation.
//         example:
//         title: The Pragmatic Programmer
//         author: Andy Hunt / Dave Thomas
//         finished: true



router.get('/login', controllers.orders.chart);
router.post('/order', controllers.orders.order);
router.post('/orders', controllers.orders.orders);
router.post('/orderbook', controllers.orders.orderbook);

module.exports = router;
