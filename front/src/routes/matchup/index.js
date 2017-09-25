/*
 * Dependencies
 */

// Vendors
import React from 'react';
import API from 'api';

import { connect } from 'react-redux';

import Login from 'components/login/index.js';

/*
 * Components
 */

import Matchup from 'components/matchup/index.js';

/*
 * LAYOUT - MATCHUP
 * =================
 */

@connect(
	s => ({ store: s })
)
export default class MatchupIndex extends React.Component {

	static propTypes = {
		store: React.PropTypes.object.isRequired,
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
		const { champion1, champion2 } = this.props.match.params;
		const { matchup } = this.state;

		return (
				 <Matchup
				 	title={`${champion1} vs ${champion2}`}
				 	list={matchups}
				 	champ={champion}
				 	onChange={(item, direction) => this.matchupVote(item, direction)}
				 	records={store.userStore.records.matchups}
				 />
		);
	}

}
