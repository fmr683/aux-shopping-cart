
/**
 * @name response-messages.js
 * @fileOverview Prepare response JSON messages
 * @author Fazlul Rahman
 */

(function() {

  'use strict';

	/**
	 * Prepare common response JSON
	 * @param {string} code - Error code
	 * @param {string} attribute - Attribute name. This should available only for validation errors
	 * @param {object} data - Any other date to be sent. Ex:view record data
	 * @param {string} message - Optional message to be sent
	 * @returns {object}
	 */
	function commonResponse(code, attribute = '', data = '', message = '') {
		var msg = {
			'code': code,
			'attribute': attribute,
			'data': data,
			'message': message
		}

		return msg;
	}


	/**
	 * Export module functions to be accessed from outside
	 */
	module.exports = {
		// Responses
		commonResponse: commonResponse,

		// Error codes
		SUCCESS: 'SUCCESS',
		FAIL: 'FAIL',
		MISSING_MANDATORY_ATTRIBUTE: 'MISSING_MANDATORY_ATTRIBUTE',
		DUPLICATE_RECORD: 'DUPLICATE_RECORD',
		NOT_FOUND: 'NOT_FOUND',
		INVALID_EMAIL: 'INVALID_EMAIL',
		AUTH_FAILED: 'AUTH_FAILED',
		PERMISSION_DENIED: 'PERMISSION_DENIED',
		UNKNOWN_ERROR: 'UNKNOWN_ERROR',
		INVALID_OR_EXPIRED_TOKEN: 'INVALID_OR_EXPIRED_TOKEN',
		INACTIVE_USER: 'INACTIVE_USER',
		INVALID_USER_ID: 'INVALID_USER_ID',
		EMAIL_NOT_VERIFIED: 'EMAIL_NOT_VERIFIED',
		INVALID_VERIFICATION_CODE: 'INVALID_VERIFICATION_CODE',
		INVALID_INVITE_CODE: 'INVALID_INVITE_CODE',
		INVITATION_EXPIRED: 'INVITATION_EXPIRED',
		EMAIL_ALREADY_VERIFIED: 'EMAIL_ALREADY_VERIFIED',
		INVALID_PHONE: 'INVALID_PHONE',
		ALREADY_SUBSCRIBED: 'ALREADY_SUBSCRIBED',
		USER_NOT_REGISTERED: 'USER_NOT_REGISTERED',
		USER_NOT_SUBSCRIBED: 'USER_NOT_SUBSCRIBED',
		INVALID_DATA_TYPE: 'INVALID_DATA_TYPE',
		INVALID_DATE_FORMAT: 'INVALID_DATE_FORMAT',
		INVALID_DEVICE_TYPE: 'INVALID_DEVICE_TYPE',
		INVALID_ACTION: 'INVALID_ACTION',
		USER_NOT_LOGGED_IN: 'USER_NOT_LOGGED_IN'
	}

})();