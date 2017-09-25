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
//import Matchup from 'components/matchup/index.js';
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

	}

	componentDidMount () {
		const { fetchChampionAndMatchups, setRecords } = this.props;
		const id = this.props.match.params.champion;

		fetchChampionAndMatchups(id);

		if (localStorage.getItem('quakechampionselect')) {
			setRecords(JSON.parse(localStorage.getItem('quakechampionselect')), 'matchups');
		}
	}

	/*
	* Recording a vote
	* --
	* @param {item} Object
	* @param {direction} Boolean
	*/
	matchupVote (item, direction) {

		const { championStore, userStore } = this.props.store;
		const { matchUpdate } = this.props;
		const { champion } = championStore;

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

		userStore.records.matchups.push({ champions: [item.name, champion.name], direction: direction });

		this.props.setRecords(userStore.records.matchups, 'matchups');
		localStorage.setItem('quakechampionselect', JSON.stringify(userStore.records.matchups));
	}

	tipsVote () {
		console.log('wow');
	}

	render () {
		const { store } = this.props;
		const { matchups, champion, errors } = store.championStore;

		return (
			<div>
				{matchups.length > 0 && champion.name ? (
						<Tips
							title={`Tips for ${champion.name}`}
							champion={champion}
							list={champion.tips}
							records={store.userStore.records.tips}
							onChange={() => this.tipsVote}
							key={champion.name}
							tips={champion.tips}
						/>
						// <Matchup
						// 	title={`Worst matchups vs ${champion.name}`}
						// 	list={matchups}
						// 	champ={champion}
						// 	onChange={(item, direction) => this.matchupVote(item, direction)}
						// 	records={store.userStore.records.matchups}
						// />
				) :null}
				{errors.length > 0 ? (
					<div>
						No Champion Found
					</div>
				) :null}
			</div>
		);
	}

}

