
/**
 * @name util.js
 * @fileOverview Helper class to handle various utility functions
 * @author Fazlul RM
 */

(function() {

  'use strict';

	/**
	 * Check whether user has permission to parituclar action
	 * @param {string} date - DB date string
	 * @returns {string}
	 */
	function hasPermission(permission, userPermissions) {
		if (_.indexOf(userPermissions, permission) > -1) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Export module fumctions to be accessed from outside
	 */
	module.exports = {
		hasPermission,
	}

})();