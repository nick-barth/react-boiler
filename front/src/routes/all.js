
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingLayout from './layout.js';


/*
 * Routes tree
 * ===========
 */

function Routes () {
	return (
		<Router>
	       <div>
	         <Route exact path="/" component={LandingLayout}/>
	       </div>
	     </Router>
	);
}

export default Routes;
