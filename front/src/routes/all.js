import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingLayout from './layout.js';
import ChampionLayout from './champion/layout.js';

function Routes () {
    return (
        <Router>
            <div>
                <Route exact path="/" component={LandingLayout}/>
                <Route path="/champion" component={ChampionLayout}/>
            </div>
        </Router>
    );
}

export default Routes;