/*
 * DEPENDENCIES
 * ============
 */
import _ from 'lodash';

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
	toggleLike
};

/*
 * Like toggle attempt
 * --
 * @param {array} movies
 * @return {Function} an `actionCreator`
 */
function toggleLike (movies) {
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
			return _.merge({}, state, {
				likedList: action.payload.likedList
			});

		default:
			return state;
	}
}
