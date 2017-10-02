import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './app.js';
import LandingIndex from './index.js';
import ChampionIndex from './champion/index.js';
import MatchupIndex from './matchup/index.js';
import FourOhFour from './fourohfour/index.js';

function Routes () {
	return (
		<Router>
			<App>
				<div>
					<Switch>
						<Route exact path="/" component={LandingIndex}/>
						<Route path="/champion/:champion" component={ChampionIndex}/>
						<Route path="/matchup/:champion1/:champion2" component={MatchupIndex}/>
						<Route component={FourOhFour} />
					</Switch>
				</div>
			</App>
		</Router>
	);
}

export default Routes;
