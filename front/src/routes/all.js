
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingLayout from './layout.js';
import ProfileLayout from './profile/layout.js';


/*
 * Routes tree
 * ===========
 */

function Routes () {
	return (
		<Router>
	       <div>
	         <Route exact path="/" component={LandingLayout}/>
	         <Route path="/profile" component={ProfileLayout}/>
	       </div>
	     </Router>
	);
}

export default Routes;
