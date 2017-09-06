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
	records: {
		matchups: []
	}
};

/*
 * Expose all action creators
 */
export const actions = {
	setRecords
};

/*
 * Fetch place by its id
 * --
 * @param {String} id - a place id
 * @return {ActionCreator}
 */
function setRecords (records) {
	return (dispatch) => {
		dispatch({
			type: FETCH_CHAMP_AND_MATCHUP_ATTEMPT,
			payload: {
				records: records
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
		case FETCH_CHAMP_AND_MATCHUP_ATTEMPT:
			return Object.assign({}, state, {
				records: action.payload.records
			});

		default:
			return state;
	}
}
