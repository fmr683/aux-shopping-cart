'use strict';

const Model = require("./model");
const jwt = require('jsonwebtoken');
const config = require('config');
const ENV = (process.env.ENV || 'dev');

module.exports = class User extends Model { 
    constructor() { 
        super("users","id"); 
    } 

    /*
        @param:
            User object details eg: id, type, email, fname
        Return the JWT token
    */
    getJwt (user) {

        let data = {
            userId: user.id, 
            email: user.email, 
            fname: user.fname,
        };
        let jwtEncrypted = jwt.sign(data, config.get('jwtSecKey'));

        return {
            ...data,
            accessToken: jwtEncrypted
        }
    }


    validateJwt (token) {

        var decoded = null;
        try {
            decoded = jwt.verify(token, config.get('jwtSecKey'));
        } catch(err) {
          // err
        }

        return decoded;
    }

     /*
        @param: none
        @post: Return the generated auth JWT token
    */
    async generateAuthenticationToken(email) {

        let dataArray = [];
        dataArray["email"] = email;
        let data = await this.where(['email'],dataArray);
        return this.getJwt(data[0]);
    }
 }