'use strict';

const User = require('../models/user');
const bcrypt = require('bcryptjs');
const config = require('config');
var isEmpty = require('is-empty');

// Libraries
var responseMessages = require('../lib/response-messages');

/* POST User signup */
module.exports.signUp = async (req, res, next) => {

    try {

        let salt = bcrypt.genSaltSync(config.get('saltRound')); // get the salt

        let user = new User();
        let dataArray = [];
        dataArray["email"] = req.sanitize(req.body.email);
        dataArray["password"] = bcrypt.hashSync(req.body.password, salt);
        dataArray["fname"] = req.sanitize(req.body.fname);
        dataArray["lname"] = req.sanitize(req.body.lname);

        let data = await user.insert(dataArray); // insert into user table

        let dataObj = {
            id: data.insertId, 
            email: dataArray["email"], 
            fname: dataArray["fname"]
        };

        let jwt = user.getJwt(dataObj);

        req.session.userId = data.insertId; // Store the id in the session
        
        let response = responseMessages.commonResponse(responseMessages.SUCCESS, "", {user: jwt});
        return res.status(200).json(response);
    }
    catch(error) { // error

        if (error.errno == 1062) { // duplicate record
            let response = responseMessages.commonResponse(responseMessages.DUPLICATE_RECORD);
            return res.status(422).json(response);
        } else { // something went wrong
            let response = responseMessages.commonResponse(responseMessages.FAIL);
            return res.status(500).json(response);
        }
    }
}


/* POST User login */
module.exports.login = async (req, res, next) => {

    try {

        let dataArray = [];
        dataArray["email"] = req.sanitize(req.body.email);

        let user = new User();
        let data = await user.where([
            'email',
            'password',
            'fname',
            'id'
        ],
        dataArray);

        if (data == '' || data == undefined) { // No result
            let response = responseMessages.commonResponse(responseMessages.AUTH_FAILED);
            return res.status(404).json(response);
        } else if (!bcrypt.compareSync(req.body.password, data[0].password)) { // password mismatch
            let response = responseMessages.commonResponse(responseMessages.AUTH_FAILED);
            return res.status(404).json(response);
        } else { // result found
            let jwt = user.getJwt(data[0]);

            req.session.userId = data[0].id; // Store the id in the session

            let response = responseMessages.commonResponse(responseMessages.SUCCESS, "", {user: jwt});
            return res.status(200).json(response);
        }
    }
    catch(error) {
        let response = responseMessages.commonResponse(responseMessages.FAIL);
        return res.status(500).json(response);
    }
}


/* POST User Update */
module.exports.updateUser = async (req, res, next) => {

    try {

        let user = new User();
        let dataArray = [];
        let whereDataArray = [];
        whereDataArray["id"] = req.user.userId;

        if (!isEmpty(req.body.password)) { // if password is passed
            let salt = bcrypt.genSaltSync(config.get('saltRound')); // get the salt
            dataArray["password"] = bcrypt.hashSync(req.bodyString('password'), salt);
        }

        if (!isEmpty(req.body.email))
            dataArray["email"] = req.sanitize(req.body.email);
        
        if (!isEmpty(req.body.fname))
            dataArray["fname"] = req.sanitize(req.body.fname);

        if (!isEmpty(req.body.lname))
            dataArray["lname"] = req.sanitize(req.body.lname);

        await user.update(dataArray, whereDataArray); // insert into user table

        let response = responseMessages.commonResponse(responseMessages.SUCCESS, "", "");
        return res.status(200).json(response);
    }
    catch(error) { // error

        if (error.errno == 1062) { // duplicate record
            let response = responseMessages.commonResponse(responseMessages.DUPLICATE_RECORD);
            return res.status(422).json(response);
        } else { // something went wrong
            let response = responseMessages.commonResponse(responseMessages.FAIL);
            return res.status(500).json(response);
        }
    }
}


/* GET User logout */
module.exports.logout = async (req, res, next) => {

    try {

        req.session.destroy(); // delete all session (User and Cart)

        let response = responseMessages.commonResponse(responseMessages.SUCCESS);
        return res.status(200).json(response);
    }
    catch(error) {
        let response = responseMessages.commonResponse(responseMessages.FAIL);
        return res.status(500).json(response);
    }
}