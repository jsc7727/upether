const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.post('/login', controllers.users.login);
router.post('/logout', controllers.users.logout);
router.post('/myInfo', controllers.users.myInfo);
router.post('/register', controllers.users.register);

module.exports = router;
