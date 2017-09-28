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
		getChampions,
		addChampTip,
		updateChampTip
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
	 * Add champion tip
	 * --
	 * @param {String} champ - champion name
	 * @param {tipo} tip - tip string
	 * @return {Promise} from .exec
	 */
	function addChampTip (champ, tip) {
		return exec({
			method: 'post',
			url: '/champ/addTip',
			data: {
				'champ': champ,
				'tip': tip
			}
		});
	}

	/*
	 * Add champion tip
	 * --
	 * @param {String} champ - champion name
	 * @param {tipo} tip - tip string
	 * @return {Promise} from .exec
	 */
	function updateChampTip (name, tip, direction) {
		return exec({
			method: 'post',
			url: '/champ/updateTip',
			data: {
				'name': name,
				'tip': tip,
				'direction': direction
			}
		});
	}

}
