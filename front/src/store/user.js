/*
 * DEPENDENCIES
 * ============
 */

/*
 * ACTION TYPES
 * ============
 */
const USER_FETCH_ATTEMPT        = 'USER_FETCH_ATTEMPT';
const USER_FETCH_SUCCESS        = 'USER_FETCH_SUCCESS';
const USER_FETCH_FAILURE        = 'USER_FETCH_FAILURE';
const USER_TOKEN_NOT_FOUND      = 'USER_TOKEN_NOT_FOUND';
const LOGIN_RESET_FORM          = 'LOGIN_RESET_FORM';
const LOGIN_ATTEMPT             = 'LOGIN_ATTEMPT';
const LOGIN_SUCCESS             = 'LOGIN_SUCCESS';
const LOGIN_FAILURE             = 'LOGIN_FAILURE';
const PWD_RESET_RESET_FORM      = 'PWD_RESET_RESET_FORM';
const PWD_RESET_REQUEST_ATTEMPT = 'PWD_RESET_REQUEST_ATTEMPT';
const PWD_RESET_REQUEST_SUCCESS = 'PWD_RESET_REQUEST_SUCCESS';
const PWD_RESET_REQUEST_FAILURE = 'PWD_RESET_REQUEST_FAILURE';
const PWD_RESET_ATTEMPT         = 'PWD_RESET_ATTEMPT';
const PWD_RESET_SUCCESS         = 'PWD_RESET_SUCCESS';
const PWD_RESET_FAILURE         = 'PWD_RESET_FAILURE';
const ACCEPT_INVITE_ATTEMPT     = 'ACCEPT_INVITE_ATTEMPT';
const ACCEPT_INVITE_SUCCESS     = 'ACCEPT_INVITE_SUCCESS';
const ACCEPT_INVITE_FAILURE     = 'ACCEPT_INVITE_FAILURE';
const UPDATE_ATTEMPT            = 'UPDATE_ATTEMPT';
const UPDATE_SUCCESS            = 'UPDATE_SUCCESS';
const UPDATE_FAILURE            = 'UPDATE_FAILURE';
const CHANGE_PWD_ATTEMPT        = 'CHANGE_PWD_ATTEMPT';
const CHANGE_PWD_SUCCESS        = 'CHANGE_PWD_SUCCESS';
const CHANGE_PWD_FAILURE        = 'CHANGE_PWD_FAILURE';
const RECEIVE_NEW_AVATAR        = 'RECEIVE_NEW_AVATAR';
const ADD_USER                  = 'ADD_USER';

export const LOGOUT = 'LOGOUT'; // Exported because its used in global store
export const FORCE_LOGIN = 'FORCE_LOGIN';  // Exported because its used in signup store

/*
 * ACTION CREATORS
 * ===============
 */

/*
 *
 */
function resetResetPasswordForm () {
	return dispatch => dispatch({ type: PWD_RESET_RESET_FORM });
}

/*
 *
 */
function resetLoginForm () {
	return dispatch => dispatch({ type: LOGIN_RESET_FORM });
}


/*
 * Update user avatar
 * --
 */
function receiveNewAvatar (avatarObject) {
	return dispatch => {
		dispatch({
			type: RECEIVE_NEW_AVATAR,
			payload: {
				avatar: avatarObject
			}
		});
	};
}

/*
 * Expose all action creators
 */
export const actions = {
	resetLoginForm,
	receiveNewAvatar,
	resetResetPasswordForm
};

/*
 * INITIAL STATE
 * =============
 */
const initalState = {
	isAuthenticated: false,
	isFetching: false,
	isUpdating: false,
	errors_user: [],
	errors_update: [],

	// User data
	data: {},

	// Login
	login: {
		isFetching: false,
		errors: []
	},

	// Changing user password
	password: {
		isFetching: false,
		success: false,
		errors: []
	},

	// Requesting a password reset
	passwordResetRequest: {
		isFetching: false,
		errors: []
	},

	// Selecting new password after reset
	passwordReset: {
		isFetching: false,
		errors: []
	},

	// Accepting an invite
	invite: {
		isFetching: false,
		errors: []
	}
};

/*
 * REDUCER
 * =======
 */
// eslint-disable-next-line complexity
export function reducer (state = initalState, action) {
	switch (action.type) {

		case USER_FETCH_ATTEMPT:
			return Object.assign({}, state, {
				isFetching: true
			});

		case USER_FETCH_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: true
			});

		case USER_FETCH_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				errors_user: action.payload.errors
			});

		case USER_TOKEN_NOT_FOUND:
			return Object.assign({}, state, {
				isFetching: false,
				data: {}
			});

		case LOGIN_RESET_FORM:
			return Object.assign({}, state, {
				login: initalState.login
			});

		case LOGIN_ATTEMPT:
			return Object.assign({}, state, {
				login: {
					...state.login,
					isFetching: true
				}
			});

		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				login: {
					...state.login,
					isFetching: false,
					errors: []
				},
				isAuthenticated: true
			});

		case PWD_RESET_RESET_FORM:
			return Object.assign({}, state, {
				passwordResetRequest: initalState.passwordResetRequest
			});

		case PWD_RESET_REQUEST_ATTEMPT:
			return Object.assign({}, state, {
				passwordResetRequest: {
					...state.passwordResetRequest,
					isFetching: true
				}
			});

		case PWD_RESET_REQUEST_SUCCESS:
			return Object.assign({}, state, {
				passwordResetRequest: {
					...state.passwordResetRequest,
					isFetching: false,
					errors: [],
					success: true
				}
			});

		case PWD_RESET_REQUEST_FAILURE:
			return Object.assign({}, state, {
				passwordResetRequest: {
					...state.passwordResetRequest,
					isFetching: false,
					errors: action.payload.errors
				}
			});

		case PWD_RESET_ATTEMPT:
			return Object.assign({}, state, {
				passwordReset: {
					...state.passwordReset,
					isFetching: true
				}
			});

		case PWD_RESET_SUCCESS:
			return Object.assign({}, state, {
				passwordReset: {
					...state.passwordReset,
					isFetching: false,
					errors: [],
					success: true
				}
			});

		case PWD_RESET_FAILURE:
			return Object.assign({}, state, {
				passwordReset: {
					...state.passwordReset,
					isFetching: false,
					errors: action.payload.errors
				}
			});

		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				login: {
					...state.login,
					isFetching: false,
					errors: action.payload.errors
				}
			});

		case ADD_USER:
			return Object.assign({}, state, {
				data: action.payload.user
			});

		case LOGOUT:
			return Object.assign({}, state, {
				data: {},
				isAuthenticated: false
			});

		case UPDATE_ATTEMPT:
			return Object.assign({}, state, {
				isUpdating: true
			});

		case UPDATE_SUCCESS:
			return Object.assign({}, state, {
				isUpdating: false,
				data: Object.assign({}, state.data, action.payload.user), // Response does not include user token so we merge user data
				errors_update: []
			});

		case UPDATE_FAILURE:
			return Object.assign({}, state, {
				isUpdating: false,
				errors_update: action.payload.errors
			});

		case CHANGE_PWD_ATTEMPT:
			return Object.assign({}, state, {
				password: {
					...state.password,
					isFetching: true,
					success: false
				}
			});

		case CHANGE_PWD_SUCCESS:
			return Object.assign({}, state, {
				password: {
					...state.password,
					isFetching: false,
					success: true,
					errors: []
				}
			});

		case CHANGE_PWD_FAILURE:
			return Object.assign({}, state, {
				password: {
					...state.password,
					isFetching: false,
					errors: action.payload.errors
				}
			});

		case ACCEPT_INVITE_ATTEMPT:
			return Object.assign({}, state, {
				invite: {
					...state.invite,
					isFetching: true
				}
			});

		case ACCEPT_INVITE_SUCCESS:
			return Object.assign({}, state, {
				invite: {
					...state.invite,
					isFetching: false,
					errors: []
				}
			});

		case ACCEPT_INVITE_FAILURE:
			return Object.assign({}, state, {
				invite: {
					...state.invite,
					isFetching: false,
					errors: action.payload.errors
				}
			});

		case RECEIVE_NEW_AVATAR:
			return Object.assign({}, state, {
				data: {
					...state.data,
					avatar: action.payload.avatar
				}
			});
		case FORCE_LOGIN:
			return Object.assign({}, state, {
				data: action.payload.user,
				login: {
					...state.login,
					isFetching: false,
					errors: []
				},
				isAuthenticated: true
			});

		default:
			return state;
	}
}
