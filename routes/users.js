'use strict';

const express = require('express');
const router = express.Router();

let userController = require('../controllers/user');
let validator = require('../validators/user');


/* POST User sign up */
router.post('/', validator.signUp, userController.signUp);

/* POST User login */
router.post('/login', validator.login, userController.login);

/* POST User update */
router.put('/', [validator.redirect, validator.updateUser], userController.updateUser);

/* POST User logout */
router.post('/logout', validator.redirect, userController.login);


module.exports = router;
