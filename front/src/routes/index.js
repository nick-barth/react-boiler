/*
 * Dependencies
 */

// Vendors
import React from 'react';

// API
import API from 'api';

// Components
import Card from 'components/card/index.js';
import ChampionGrid from 'components/championGrid/index.js'

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class App extends React.Component {


	render () {

		return (
			<ChampionGrid />
		);
	}

}
