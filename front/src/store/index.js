/*
 * STORE
 * =====
 */

// Vendors
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { reducer as champion } from './champion.js';

/*
 * Create store
 * --
 * Combines reducers to create global store
 */
const reducers = combineReducers({
	champion: champion
});

const store = applyMiddleware(thunk)(createStore)(
	(state, action) => {
		return reducers(state, action);
	}
);

/*
 * Expose Store
 */
export default store;
