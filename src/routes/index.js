const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);
router.get('/about', indexController.about);
router.get('/contact', indexController.contact);
router.get('/music', indexController.music);

module.exports = router;
