/*
 * STORE
 * =====
 */

// Vendors
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { reducer as user } from './user.js';

/*
 * Create store
 * --
 * Combines reducers to create global store
 */
const reducers = combineReducers({
	user: user
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
