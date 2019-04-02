'use strict';

const express = require('express');
const router = express.Router();

let cartController = require('../controllers/cart');
let validator = require('../validators/user');


/* POST add cart Items */
router.post('/', validator.redirect, cartController.add);

/* DELETE delete items from the cart */
router.delete('/', validator.redirect, cartController.delete);

/* GET  items from the cart */
router.get('/', validator.redirect, cartController.get);

module.exports = router;
