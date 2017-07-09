/*
 * Dependencies
 */

// Vendors
import React from 'react';
import API from 'api';

import Login from 'components/login/index.js';

/*
 * LAYOUT - MATCHUP
 * =================
 */
export default class MatchupIndex extends React.Component {

	static propTypes = {
		match: React.PropTypes.object.isRequired
	};

	constructor (props) {
		super(props);

		this.state = {
			matchup: null
		};

	}

	componentWillMount () {
		const champ1 = this.props.match.params.champion1;
		const champ2 = this.props.match.params.champion2;

		API.matchup.getMatchup(champ1, champ2)
		.promise
		.then(res => {
			this.setState({
				matchup: res.data
			});
		})
		.catch(res => {
			console.log(res);
		});
	}


	render () {
		return (
			<div>
				<Login />
			</div>
		);
	}

}
