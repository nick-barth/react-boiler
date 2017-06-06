import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './app.js';
import LandingIndex from './index.js';
import ChampionIndex from './champion/index.js';

function Routes () {
    return (
        <Router>
            <App>
                <div>
                    <Route exact path="/" component={LandingIndex}/>
                    <Route path="/champion" component={ChampionIndex}/>
                </div>
            </App>
        </Router>
    );
}

export default Routes;
