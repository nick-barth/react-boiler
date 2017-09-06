/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';

// Store
import { actions as championActions } from 'store/champion.js';
import { actions as userActions } from 'store/user.js';

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
		matchUpdate: championActions.matchUpdate,
		setRecords: userActions.setRecords

	}
)
export default class ChampionLayout extends React.Component {

	static propTypes = {
		store: React.PropTypes.object.isRequired,
		match: React.PropTypes.object.isRequired,
		fetchChampionAndMatchups: React.PropTypes.func.isRequired,
		matchUpdate: React.PropTypes.func.isRequired,
		setRecords: React.PropTypes.func.isRequired
	};

	constructor (props) {
		super(props);

		this.vote = this.vote.bind(this);

	}

	componentDidMount () {
		const { fetchChampionAndMatchups, setRecords } = this.props;
		const id = this.props.match.params.champion;

		fetchChampionAndMatchups(id);

		if (localStorage.getItem('quakechampionselect')) {
			setRecords(JSON.parse(localStorage.getItem('quakechampionselect')));
		}
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
		const { store } = this.props;
		const { matchups, champion } = store.championStore;

		return (
			<div>
				{matchups.length > 0 && champion.name ? (
					<div>
						<Matchup
							title={`Worst matchups vs ${champion.name}`}
							list={matchups}
							champ={champion}
							onChange={this.vote}
							records={store.userStore.records.matchupVotes}
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
