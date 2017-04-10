/*
 * DEPENDENCIES
 * ============
 */

/*
 * ACTION TYPES
 * ============
 */
const USER_LIKE_TOGGLE        = 'USER_LIKE_TOGGLE';


/*
 * INITIAL STATE
 * =============
 */
const initalState = {
	likedList: []
};

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
