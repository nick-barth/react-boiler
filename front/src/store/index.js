/*
 * STORE
 * =====
 */

// Vendors
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { reducer as championStore } from './champion.js';
import { reducer as userStore } from './user.js';

/*
 * Create store
 * --
 * Combines reducers to create global store
 */
const reducers = combineReducers({
	championStore: championStore,
	user: userStore
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
