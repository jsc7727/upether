const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/getFavorites', controllers.favorites.getFavorites);
router.post('/updateFavorites', controllers.favorites.updateFavorites);

module.exports = router;
