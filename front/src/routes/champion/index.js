/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';

// Store
import { actions as championActions } from 'store/champion.js';

// Components
import Matchup from 'components/matchup/index.js';
import Tips from 'components/tips/index.js';

/*
 * LAYOUT - CHAMPION
 * =================
 */
@connect(
	state => ({
		store: state
	}), {
		fetchChampionAndMatchups: championActions.fetchChampionAndMatchups
	}
)
export default class ChampionLayout extends React.Component {

	static propTypes = {
		store: React.PropTypes.object.isRequired,
		match: React.PropTypes.object.isRequired,
		fetchChampionAndMatchups: React.PropTypes.func.isRequired
	};

	constructor (props) {
		super(props);

	}


	componentDidMount () {
		const id = this.props.match.params.champ;

		this.props.fetchChampionAndMatchups(id);
	}

	render () {
		const { matchups, champion } = this.props.store;

		console.log(this.props.store);

		return (
			<div>
				{matchups && champion ? (
					<div>
						<Matchup
							title={`Worst matchups vs ${champion.name}`}
							list={matchups}
							champ={champion}
						/>
						<Matchup
							title={`Best matchups vs ${champion.name}`}
							list={matchups}
							champ={champion}
						/>
						<Tips
							title={`Tips for fighting against ${champion.name}`}
							list={champion.tips}
						/>
					</div>
				) :null}
			</div>
		);
	}

}
