const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

app.get('/login', controllers.users.login);
app.post('/logout', controllers.users.logout);
app.post('/myInfo', controllers.users.myInfo);
app.post('/register', controllers.users.register);

module.exports = router;
