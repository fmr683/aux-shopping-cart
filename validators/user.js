

const Joi = require('joi');

// Libraries
var responseMessages = require('../lib/response-messages');
var isEmpty = require('is-empty');

exports.signUp = function (req, res, next) {
    const data = req.body;

    // define the validation schema
     const schema = Joi.object().keys({

        // email is required
        // email must be a valid email string
        email: Joi.string().email().required(),

        // password is required
        password: Joi.string().min(6).max(254).required(),

        // fname is required
        fname: Joi.string().min(3).max(99).required(),

        // lname is required
        lname: Joi.string().min(3).max(99).required(),

    });

    Joi.validate(data, schema, (err, value) => {

        if (err) {
            // send a 422 error response if validation fails
            response = responseMessages.commonResponse(responseMessages.FAIL, data,'',err.details[0].message);
            res.status(422).json(response);
        } else {
            next();
        }

    });
}

exports.login = function (req, res, next) {
    const data = req.body;

    // define the validation schema
     const schema = Joi.object().keys({

        // email is required
        // email must be a valid email string
        email: Joi.string().email().required(),

        // password is required
        password: Joi.string().min(6).required()

    });

    Joi.validate(data, schema, (err, value) => {

        if (err) {
            // send a 422 error response if validation fails
            response = responseMessages.commonResponse(responseMessages.FAIL, data,'',err.details[0].message);
            res.status(422).json(response);
        } else {
            next();
        }

    });
}


exports.updateUser = function (req, res, next) {
    const data = req.body;

    // define the validation schema
     const schema = Joi.object().keys({

        // email is required
        // email must be a valid email string
        email: Joi.string().email().optional(),

        // password is required
        password: Joi.string().min(6).max(254).optional(),

        // fname is required
        fname: Joi.string().min(3).max(99).optional(),

        // lname is required
        lname: Joi.string().min(3).max(99).optional(),

    });

    Joi.validate(data, schema, (err, value) => {

        if (err) {
            // send a 422 error response if validation fails
            response = responseMessages.commonResponse(responseMessages.FAIL, data,'',err.details[0].message);
            res.status(422).json(response);
        } else {
            next();
        }

    });
}


exports.redirect = function (req, res, next) {

    if (isEmpty(req.session.userId)) {
       response = responseMessages.commonResponse(responseMessages.USER_NOT_LOGGED_IN);
       res.status(403).json(response);
    } else {
        next();
    }
}