const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

/* users */
router.get('/', usersController.users);

module.exports = router;
