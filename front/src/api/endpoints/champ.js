/*
 * ADMIN
 * =====
 */

export default function getAdminAPI (exec) {

	/*
	 * Expose API
	 * --
	 * On top for clarity, mind the hoisting
	 */
	return {
		getChampions
	};



	/*
	 * Get all champions
	 * --
	 * @param {String} providerId - a provider id
	 * @return {Promise} from .exec
	 */
	function getChampions () {
		return exec({
			method: 'get',
			url: '/champs'
		});
	}

}
