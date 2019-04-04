'use strict';

const express = require('express');
const router = express.Router();

let productController = require('../controllers/product');


/* GET product */
router.get('/', productController.get);


module.exports = router;
