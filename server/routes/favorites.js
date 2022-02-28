const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

app.get('/getFavorites', controllers.favorites.getFavorites);
app.post('/updateFavorites', controllers.favorites.updateFavorites);

module.exports = router;
