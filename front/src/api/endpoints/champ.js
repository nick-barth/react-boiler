/*
 * ADMIN
 * =====
 */

export default function getChampionApi (exec) {

	/*
	 * Expose API
	 * --
	 * On top for clarity, mind the hoisting
	 */
	return {
		getChampion,
		getChampions
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

}
