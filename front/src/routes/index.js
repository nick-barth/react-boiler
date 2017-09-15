/*
 * Dependencies
 */

// Vendors
import React from 'react';

// API
import API from 'api';

// Components
import ChampionGrid from 'components/championGrid/index.js'

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class App extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			champions: []
		};

	}

	componentWillMount () {
		API.champ.getChampions()
		.promise
		.then(res => {
			this.setState({
				champions: res.data
			});
		})
		.catch(res => {
			console.log(res);
			console.log('error');
		});
	}

	render () {
		return (
			<ChampionGrid champions={ this.state.champions } />
		);
	}

}
