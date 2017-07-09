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
		fetchChampionAndMatchups: championActions.fetchChampionAndMatchups,
		matchUpdate: championActions.matchUpdate
	}
)
export default class ChampionLayout extends React.Component {

	static propTypes = {
		store: React.PropTypes.object.isRequired,
		match: React.PropTypes.object.isRequired,
		fetchChampionAndMatchups: React.PropTypes.func.isRequired,
		matchUpdate: React.PropTypes.func.isRequired
	};

	constructor (props) {
		super(props);

	}

	componentDidMount () {
		const id = this.props.match.params.champion;

		this.props.fetchChampionAndMatchups(id);
	}

	/*
	* Recording a vote
	* --
	* @param {item} Object
	* @param {direction} Boolean
	*/
	vote (item, direction) {
		return () => {
			const state = this.props.store.championStore;
			const { matchUpdate } = this.props;
			const { champion } = state;

			if (direction) {
				const update = {
					name: item.name,
					up: item.up + 1
				};

				matchUpdate(champion, update);
			}
			else {
				const update = {
					name: item.name,
					down: item.down + 1
				};

				matchUpdate(champion, update);
			}

		};
	}

	render () {
		const state = this.props.store.championStore;
		const { matchups, champion } = state;

		return (
			<div>
				{matchups.length > 0 && champion.name ? (
					<div>
						<Matchup
							title={`Worst matchups vs ${champion.name}`}
							list={matchups}
							champ={champion}
							onChange={this.vote.bind(this)}
						/>
						<Matchup
							title={`Best matchups vs ${champion.name}`}
							list={matchups}
							champ={champion}
							onChange={this.vote.bind(this)}
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
