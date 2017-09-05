/*
 * DEPENDENCIES
 * ============
 */

import API from 'api';

/*
 * ACTION TYPES
 * ============
 */
const USER_LOGIN_ATTEMPT = 'USER_LOGIN_ATTEMPT';
const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';


/*
 * INITIAL STATE
 * =============
 */
const initalState = {
	user: {}
};

/*
 * Expose all action creators
 */
export const actions = {
	login
};

/*
 * Fetch place by its id
 * --
 * @param {String} id - a place id
 * @return {ActionCreator}
 */
function login (user, password) {
	return (dispatch) => {
		dispatch({
			type: USER_LOGIN_ATTEMPT,
			payload: {
				user: user
			}
		});

		API.user.signin(user, password)
		.promise
		.then(res => {
			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: {
					user: res.data.username
				}
			});
		})
		.catch(res => {
			dispatch({
				type: USER_LOGIN_FAILURE,
				payload: {
					errors: res.errors
				}
			});
		});
	};

}

/*
 * REDUCER
 * =======
 */
export function reducer (state = initalState, action) {
	switch (action.type) {
		case USER_LOGIN_ATTEMPT:
			return Object.assign({}, state, {
				isLoggingIn: true
			});

		// Successfully fetched champ
		case USER_LOGIN_SUCCESS:
			return Object.assign({}, state, {
				user: action.payload.user,
				isLoggingIn: false,
				errors: []
			});

		// Successfully fetched matchups of champ
		case USER_LOGIN_FAILURE:
			return Object.assign({}, state, {
				errors: action.payload.errors
			});

		default:
			return state;
	}
}
