/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';

// Store
import { actions as matchupActions } from 'store/matchup.js';
import { actions as userActions } from 'store/user.js';

// Components
import Tips from 'components/tips/index.js';

/*
 * LAYOUT - MATCHUP
 * =================
 */

@connect(
	state => ({
		store: state
	}), {
		addTip: matchupActions.addTip,
		getMatchup: matchupActions.getMatchup,
		updateTip: matchupActions.updateTip,
		setRecords: userActions.setRecords
	}
)
export default class MatchupIndex extends React.Component {

	static propTypes = {
		store: React.PropTypes.object.isRequired,
		match: React.PropTypes.object.isRequired,
		getMatchup: React.PropTypes.func.isRequired,
		addTip: React.PropTypes.func.isRequired,
		updateTip: React.PropTypes.func.isRequired,
		setRecords: React.PropTypes.func.isRequired
	};

	constructor (props) {
		super(props);

		this.state = {
			matchup: {}
		};

	}

	componentWillMount () {
		const champ1 = this.props.match.params.champion1;
		const champ2 = this.props.match.params.champion2;
		const { getMatchup } = this.props;

		getMatchup(champ1, champ2);

	}

	addTip (champion1, champion2, text) {
		const { addTip } = this.props;

		addTip(champion1, champion2, text);

	}

	tipVote (champion1, champion2, tip, direction) {
		return () => {
			const { updateTip, store } = this.props;
			const { userStore, championStore } = store;
			const { champion } = championStore;


			updateTip(champion.name, tip, direction);

			userStore.records.tips.push({ champion: champion.name, tip: tip, direction: direction });

			this.props.setRecords(userStore.records.tips, 'tips');
			localStorage.setItem('quakechampionselectTips', JSON.stringify(userStore.records));

		};

	}



	render () {
		const { champion1, champion2 } = this.props.match.params;
		const { matchup } = this.props.store.matchupStore;

		return (
			<div>
				{Object.keys(matchup).length > 0 ? (
					<div>
						<Tips
							title={`Tips for playing ${champion1} vs. ${champion2}`}
							onVote={(champion1, champion2, tip, direction) => this.tipVote(champion1, champion2, tip, direction)}
							onAdd={(text) => this.addTip(champion1, champion2, text)}
							list={matchup.champions.find(matchup => matchup.champion === champion1.name).tips}
						/>
						<Tips
							title={`Tips for playing ${champion2} vs. ${champion1}`}
							onVote={(item, direction) => this.tipVote(item, direction)}
							onAdd={(text) => this.addTip(text)}
							list={matchup.champions.find(matchup => matchup.champion === champion2.name).tips}
						/>
					</div>
				) : null}
			</div>
		);
	}

}
