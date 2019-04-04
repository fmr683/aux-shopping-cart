'use strict';

const Model = require("./model");

module.exports = class Product extends Model { 
    constructor() { 
        super("products","id"); 
    } 
 }