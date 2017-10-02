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

// import Matchup from 'components/matchup/index.js';
import Tips from 'components/tips/index.js';
import Spinner from 'components/spinner/index.js';
import ChampBanner from 'components/champbanner/index.js';
import Adcontainer from 'components/adcontainer/index.js';
import Advertisement from 'components/adcontainer/advertisement/index.js';


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
		setRecords: userActions.setRecords,
		addTip: championActions.addTip,
		updateTip: championActions.updateTip

	}
)
export default class ChampionLayout extends React.Component {

	static propTypes = {
		store: React.PropTypes.object.isRequired,
		match: React.PropTypes.object.isRequired,
		fetchChampionAndMatchups: React.PropTypes.func.isRequired,
		matchUpdate: React.PropTypes.func.isRequired,
		setRecords: React.PropTypes.func.isRequired,
		addTip: React.PropTypes.func.isRequired,
		updateTip: React.PropTypes.func.isRequired
	};

	constructor (props) {
		super(props);

	}

	componentDidMount () {
		const { fetchChampionAndMatchups } = this.props;
		const id = this.props.match.params.champion;

		fetchChampionAndMatchups(id);

		const { setRecords } = this.props;

		if (localStorage.getItem('quakechampionselect')) {
			const storage = JSON.parse(localStorage.getItem('quakechampionselect'));

			if (storage) {
				setRecords(storage.matchups, 'matchups');
				setRecords(storage.tips, 'tips');
				setRecords(storage.matchupTips, 'matchupTips');
			}

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
		localStorage.setItem('quakechampionselect', JSON.stringify(userStore.records));
	}

   /*
	* Adding a tip
	* --
	* @param {text} String
	*/
	addTip (text) {
		const { addTip } = this.props;
		const { champion } = this.props.store.championStore;

		addTip(champion.name, text);

	}

   /*
	* Voting on a tip
	* Curried function
	* --
	* @param {item} Object
	* @param {direction} Boolean
	*/
	tipVote (item, direction) {
		return () => {
			const { updateTip, store } = this.props;
			const { userStore, championStore } = store;
			const { champion } = championStore;

			updateTip(champion.name, item, direction);

			userStore.records.tips.push({ champion: champion.name, tip: item, direction: direction });

			this.props.setRecords(userStore.records.tips, 'tips');
			localStorage.setItem('quakechampionselect', JSON.stringify(userStore.records));

		};

	}

	render () {
		const { store } = this.props;
		const { matchups, champion, errors, isLoadingChamp, isLoadingMatchup } = store.championStore;

		return (
			<div>
				{!isLoadingChamp && !isLoadingMatchup && matchups.length > 0 && champion.name ? (
					<div>
						<ChampBanner
							champ={champion}
							key={champion.id}
						/>
					{matchups.length > 0 && champion.name && champion.tips.length > 0 ? (
							<Tips
								title={`Tips for ${champion.name}`}
								list={champion.tips}
								records={store.userStore.records.tips}
								onVote={(item, direction) => this.tipVote(item, direction)}
								onAdd={(text) => this.addTip(text)}
							/>
							<Adcontainer location="ad-container-horizontal">
								<Advertisement aspect="ad-horizontal-example">
									check out this relevant ad that you should click on
								</Advertisement>
							</Adcontainer>
							<Matchup
								title={`Worst matchups vs ${champion.name}`}
								list={matchups}
								champ={champion}
								onChange={(item, direction) => this.matchupVote(item, direction)}
								records={store.userStore.records.matchups}
							/>
						</div>
				) :null}
				{errors.length > 0 ? (
					<div>
						No Champion Found
					</div>
				) : <Spinner />}
			</div>
		);
	}

}

