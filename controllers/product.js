'use strict';

const Product = require('../models/product');

// Libraries
var responseMessages = require('../lib/response-messages');

/* GET Product */
module.exports.get = async (req, res, next) => {
    try {

        let product = new Product();
        let data = await product.getAll();

        if (data == '' || data == undefined) { // No result
            let response = responseMessages.commonResponse(responseMessages.NOT_FOUND);
            return res.status(404).json(response);
        } else { // result found
            let response = responseMessages.commonResponse(responseMessages.SUCCESS, "", {product: data} );
            return res.status(200).json(response);
        }
    }
    catch(error) {
        let response = responseMessages.commonResponse(responseMessages.FAIL);
        return res.status(500).json(response);
    }
}