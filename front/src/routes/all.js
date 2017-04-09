
import React from 'react';
import { Route, Router, createRoutes } from 'react-router';

import LandingLayout from './layout.js';


/*
 * Routes tree
 * ===========
 */
const routes = createRoutes(
	<Route>
		<Route name="layout" path="/" component={LandingLayout} />
	</Route>,
);

// Hacky way to pass routes to utils/routes.js without ciruclar references
// There seems to be a bug with SystemsJS Builder and zebra striping :(
window.routes = routes;

/*
 * Expose router component
 * ======
 */
export const router = (<Router routes={routes} />);
