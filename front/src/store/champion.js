/*
 * DEPENDENCIES
 * ============
 */

/*
 * ACTION TYPES
 * ============
 */
const USER_LIKE_TOGGLE = 'USER_LIKE_TOGGLE';


/*
 * INITIAL STATE
 * =============
 */
const initalState = {
	likedList: []
};

/*
 * Expose all action creators
 */
export const actions = {
	matchUpdate
};

/*
 * Changing a matchup
 * --
 * @param {array} movies
 * @return {Function} an `actionCreator`
 */
function matchUpdate (champ, update) {
	return dispatch => {
		dispatch({
			type: USER_LIKE_TOGGLE,
			payload: {
				likedList: movies
			}
		});
	};
}

/*
 * REDUCER
 * =======
 */
export function reducer (state = initalState, action) {
	switch (action.type) {
		case USER_LIKE_TOGGLE:
			return Object.assign({}, state, {
				likedList: action.payload.likedList
			});
		default:
			return state;
	}
}
