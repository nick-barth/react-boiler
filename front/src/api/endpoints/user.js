/*
 * MATCHUP
 * =======
 */

export default function getUserApi (exec) {

	/*
	 * Expose API
	 * --
	 * On top for clarity, mind the hoisting
	 */
	return {
		signup
	};



/*
	 * gets all matchups for a champion
	 * --
	 * @param {String} champ - champion name
	 * @return {Promise} from .exec
	 */
	function signup (username, password) {
		return exec({
			method: 'post',
			url: '/signup',
			query: {
				'username': username,
				'password': password
			}
		});
	}

}
