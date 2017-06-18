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
		getChampion,
		getChampions,
		getMatchups
	};



	/*
	 * Get all champions
	 * --
	 * @return {Promise} from .exec
	 */
	function getChampions () {
		return exec({
			method: 'get',
			url: '/champs'
		});
	}

	/*
	 * Get single champion
	 * --
	 * @param {String} champ - champion name
	 * @return {Promise} from .exec
	 */
	function getChampion (champ) {
		return exec({
			method: 'get',
			url: '/champ',
			query: {
				'name': champ
			}
		});
	}

	/*
	 * gets all matchups for a champion
	 * --
	 * @param {String} champ - champion name
	 * @return {Promise} from .exec
	 */
	function getMatchups (champ) {
		return exec({
			method: 'get',
			url: '/matchup',
			query: {
				'name': champ
			}
		});
	}

}
