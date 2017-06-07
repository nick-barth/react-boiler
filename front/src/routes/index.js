/*
 * Dependencies
 */

// Vendors
import React from 'react';

// API
import API from 'api';

// Components
import Card from 'components/card/index.js';

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
			console.log('success');
			console.log(res);
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
		const { champions } = this.state;

		console.log(champions);

		return (
			<div>
			{champions ? (
				champions.map(champ => {
					return (
						<Card />
					);
				})
			) : null}
			</div>
		);
	}

}
