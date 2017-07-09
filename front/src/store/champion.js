/*
 * DEPENDENCIES
 * ============
 */

import API from 'api';

/*
 * ACTION TYPES
 * ============
 */
const FETCH_CHAMP_AND_MATCHUP_ATTEMPT = 'FETCH_CHAMP_AND_MATCHUP_ATTEMPT';
const FETCH_CHAMP_SUCCESS = 'FETCH_CHAMP_SUCCESS';
const FETCH_MATCHUP_SUCCESS = 'FETCH_MATCHUP_SUCCESS';
const UPDATE_MATCHUP_SUCCESS = 'UPDATE_MATCHUP_SUCCESS';


/*
 * INITIAL STATE
 * =============
 */
const initalState = {
	champion: {},
	matchups: [],
	isLoadingChamp: false,
	isLoadingMatchup: false
};

/*
 * Expose all action creators
 */
export const actions = {
	fetchChampionAndMatchups,
	matchUpdate
};

/*
 * Fetch place by its id
 * --
 * @param {String} id - a place id
 * @return {ActionCreator}
 */
function fetchChampionAndMatchups (champ) {
	return (dispatch) => {
		dispatch({
			type: FETCH_CHAMP_AND_MATCHUP_ATTEMPT,
			payload: {
				id: champ
			}
		});

		API.matchup.getMatchups(champ)
		.promise
		.then(res => {
			dispatch({
				type: FETCH_MATCHUP_SUCCESS,
				payload: {
					matchups: [].concat.apply([],res.data.map(m => {
						return m.champions.filter(c => c.name.toLowerCase() !== champ);
					}))
				}
			});
		})
		.catch(res => {
			console.log(res);
		});

		API.champ.getChampion(champ)
		.promise
		.then(res => {
			dispatch({
				type: FETCH_CHAMP_SUCCESS,
				payload: {
					champ: res.data
				}
			});
		})
		.catch(res => {
			console.log(res);
		});

	};

}

/*
 * Changing a matchup
 * --
 * @param {array} movies
 * @return {Function} an `actionCreator`
 */
function matchUpdate (champ, update) {
	return dispatch => {
		API.matchup.updateMatchup(champ, update)
			.promise
			.then(res => {
				console.log('fuck', res);
				return dispatch => {
					dispatch({
						type: UPDATE_MATCHUP_SUCCESS,
						payload: {
							champ: champ,
							update: update
						}
					});
				};
			})
			.catch(res => {
				console.log(res);
				console.log('error');
			});
	};

}

/*
 * REDUCER
 * =======
 */
export function reducer (state = initalState, action) {
	switch (action.type) {
		case FETCH_CHAMP_AND_MATCHUP_ATTEMPT:
			return Object.assign({}, state, {
				isLoadingChamp: true,
				isLoadingMatchup: true
			});

		// Successfully fetched champ
		case FETCH_CHAMP_SUCCESS:
			return Object.assign({}, state, {
				champion: action.payload.champ,
				isLoadingChamp: false,
				errors: []
			});

		// Successfully fetched matchups of champ
		case FETCH_MATCHUP_SUCCESS:
			return Object.assign({}, state, {
				matchups: action.payload.matchups,
				isLoadingMatchup: false,
				errors: []
			});

		// Update of a matchup attempt
		case UPDATE_MATCHUP_SUCCESS:
			return Object.assign({}, state, {
				current: {
					id: null,
					isFetching: false,
					errors: action.payload.errors
				}
			});

		default:
			return state;
	}
}
