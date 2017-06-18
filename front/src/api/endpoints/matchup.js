/*
 * MATCHUP
 * =======
 */

export default function getMatchupApi (exec) {

	/*
	 * Expose API
	 * --
	 * On top for clarity, mind the hoisting
	 */
	return {
		getMatchups,
		getMatchup
	};



/*
	 * gets all matchups for a champion
	 * --
	 * @param {String} champ - champion name
	 * @return {Promise} from .exec
	 */
	function getMatchups (champ) {
		return exec({
			method: 'get',
			url: '/matchups',
			query: {
				'name': champ
			}
		});
	}

	/*
	 * Get single champion
	 * --
	 * @param {String} champ - champion name
	 * @return {Promise} from .exec
	 */
	function getMatchup (champ1, champ2) {

		return exec({
			method: 'get',
			url: '/matchup',
			query: {
				'champ1': champ1,
				'champ2': champ2
			}
		});
	}

}
