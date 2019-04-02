'use strict';

const Model = require("./Model");

module.exports = class Product extends Model { 
    constructor() { 
        super("products","id"); 
    } 
 }