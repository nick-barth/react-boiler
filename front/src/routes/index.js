/*
 * Dependencies
 */

// Vendors
import React from 'react';

import API from 'api';

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class App extends React.Component {

	constructor (props) {
		super(props);

	}

	componentWillMount () {
		API.champ.getChampions();
	}

	render () {
		return (
			<div>
				fuck
			</div>
		);
	}

}
