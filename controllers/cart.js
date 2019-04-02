'use strict';

var isEmpty = require('is-empty');

// Libraries
var responseMessages = require('../lib/response-messages');

/* POST Add items to the cart */
module.exports.add = async (req, res, next) => {
    //console.log(req.body.item);

    let cart = req.session.cart || []; 

    for (let i=0; i<= (req.body.item.length - 1); i++) {
        cart.push({p_id: req.sanitize(req.body.item[i].p_id), qty: req.sanitize(req.body.item[i].p_qty)});
    }

    req.session.cart = cart;

    let response = responseMessages.commonResponse(responseMessages.SUCCESS, "", {cart: cart});
    return res.status(200).json(response);
}


/* DELETE Delete items from the cart */
module.exports.delete = async (req, res, next) => {

    if (isEmpty(req.session.cart)) {
        let response = responseMessages.commonResponse(responseMessages.RECORD_NOT_FOUND);
        return res.status(404).json(response);
    }

    for (let i=0; i<= (req.body.item.length - 1); i++) { // body item loop
        for (let k=0; k<= (req.session.cart.length - 1); k++) { // cart item loop
            if (req.session.cart[k] !== undefined && req.body.item[i] == req.session.cart[k].p_id) {
                req.session.cart.splice(k,1);
            }
        }
    }
    
    let response = responseMessages.commonResponse(responseMessages.SUCCESS, "", {cart: req.session.cart});
    return res.status(200).json(response);
}


/* GET Cart items of the user */
module.exports.get = async (req, res, next) => {
    //console.log(req.body.item);

    if (isEmpty(req.session.cart)) {
        let response = responseMessages.commonResponse(responseMessages.RECORD_NOT_FOUND);
        return res.status(404).json(response);
    }

    let response = responseMessages.commonResponse(responseMessages.SUCCESS, "", {cart: req.session.cart});
    return res.status(200).json(response);
}