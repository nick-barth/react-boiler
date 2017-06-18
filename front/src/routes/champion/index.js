/*
 * Dependencies
 */

// Vendors
import React from 'react';
import API from 'api';

// Components
import Matchup from 'components/matchup/index.js';
import Tips from 'components/tips/index.js';

/*
 * LAYOUT - CHAMPION
 * =================
 */
export default class ChampionLayout extends React.Component {

	static propTypes = {
		match: React.PropTypes.object.isRequired
	};

	constructor (props) {
		super(props);

		this.state = {
			matchups: [],
			champ: null
		};

	}


	componentWillMount () {
		const champ = this.props.match.params.champion;

		API.champ.getChampion(champ)
		.promise
		.then(res => {
			this.setState({
				champ: res.data
			});
		})
		.catch(res => {
			console.log(res);
		});

		API.champ.getMatchups(champ)
		.promise
		.then(res => {
			this.setState({
				matchups: [].concat.apply([],res.data.map(m => {
					return m.champions.filter(c => c.name.toLowerCase() !== champ);
				}))
			});
		})
		.catch(res => {
			console.log(res);
		});
	}


	render () {
		const { matchups, champ } = this.state;

		return (
			<div>
				{matchups && champ ? (
					<div>
						<Matchup
							title={`Worst matchups vs ${champ.name}`}
							list={matchups}
						/>
						<Matchup
							title={`Best matchups vs ${champ.name}`}
							list={matchups}
						/>
						<Tips
							title={`Tips for fighting against ${champ.name}`}
							list={champ.tips}
						/>
					</div>
				) :null}
			</div>
		);
	}

}
