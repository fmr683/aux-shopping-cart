/**
 * @name authentication.js
 * @fileOverview Authenticate each API requests. Perform JWT validation and API key validations
 * @author Fazlul R M
 */

(function() {

	'use strict';

	var config = require('config');
	var User = require('../models/user');
	var isEmpty = require('is-empty');
	var _ = require('lodash');
	var responseMessages = require('../lib/response-messages');
	var urlPattern = require('url-pattern');
	var proxy = require('http-proxy').createProxyServer({}),
		proxyApiKey,
		proxyApiSecret;

	/**
	 * Authenticate request
	 * @param {object} req - Request data
	 * @param {object} res - Response data
	 * @param {object} next - Next data
	 */
	function authRequest(req, res, next) {
		var logger = req.logger;

		if (req.headers["api-key"] == config.get('api.key') && req.headers["api-secret"] == config.get('api.secret')) {
			if (isGuestAction(req.path, req.method)) {
				// No need to check access token for guest actions
				next();
			} else {
				if (!isEmpty(req.headers['authorization'])) {
					var jwt = req.headers['authorization'];
					jwt = jwt.replace('Bearer', '');
					jwt = jwt.trim();

					let user = new User();

					var tokenInfo = user.validateJwt(jwt);

					if (!isEmpty(tokenInfo)) {
						// JWT validation success & set user data to the request where it can be accessed from 
						// anyewhere
						req.user = tokenInfo;
						next();

					} else {
						var response = responseMessages.commonResponse(responseMessages.AUTH_FAILED, 
							null, null, 'Invalid Authorization token');
						res.status(401).json(response);
					}
				} else {
					var response = responseMessages.commonResponse(responseMessages.AUTH_FAILED, null, 
						null, 'Authorization token is required');
					res.status(401).json(response);
				}
			}
		} else {
			var response = responseMessages.commonResponse(responseMessages.AUTH_FAILED, null, 
				null, 'API access keys are required');
			res.status(401).json(response);
		}
	}

	/**
	 * Check whether current request is a guest action request
	 * @param {string} url - Request url
	 * @param {string} method - Request method. Ex:POST, GET
	 * @return {boolean}
	 */
	function isGuestAction(url, method) {
		var isGuestAction = false;
		var guestActions = config.get('api.guestActions');
		for (var i=0; i<guestActions.length; i++) {
			var pattern = new urlPattern(guestActions[i].url);
			var matchRes = pattern.match(url);
			if (method == guestActions[i].method && matchRes) {
				if (!isEmpty(matchRes.id) && !isEmpty(guestActions[i].ignore)) {
					if (_.indexOf(guestActions[i].ignore, matchRes.id) > -1) {
						isGuestAction = false;
					} else {
						isGuestAction = true;
					}
				} else {
					isGuestAction = true;
				}
				break;
			}
		}

		return isGuestAction;
	}

    proxy.on('proxyReq', function (proxyReq, req, res, options) {
        proxyReq.setHeader('api-key', proxyApiKey);
        proxyReq.setHeader('api-secret', proxyApiSecret);
        proxyReq.setHeader('Content-Type', 'application/json');
    });

    proxy.on('error', function (err) {
        let log = new Logger();
        log.logData.logType = log.API;
        log.logData.action = 'proxy';
	});
	
	/**
	 * Export module functions to be accessed from outside
	 */
	module.exports = {
		authRequest: authRequest
	}

})();