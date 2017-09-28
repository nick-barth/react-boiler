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
		addMatchupTip: matchupActions.addMatchupTip,
		getMatchup: matchupActions.getMatchup,
		updateMatchupTip: matchupActions.updateMatchupTip,
		setRecords: userActions.setRecords
	}
)
export default class MatchupIndex extends React.Component {

	static propTypes = {
		store: React.PropTypes.object.isRequired,
		match: React.PropTypes.object.isRequired,
		getMatchup: React.PropTypes.func.isRequired,
		addMatchupTip: React.PropTypes.func.isRequired,
		updateMatchupTip: React.PropTypes.func.isRequired,
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

	onAddTip (champion1, champion2, text) {
		const { addMatchupTip } = this.props;

		addMatchupTip(champion1, champion2, text);

	}

	onTipVote (champion1, champion2) {
		console.log('binding');
		return (tip, direction) => {
			const { updateMatchupTip, store } = this.props;
			const { userStore, championStore } = store;
			const { champion } = championStore;

			console.log(champion1);
			console.log(champion2);
			console.log(tip);


			updateMatchupTip(champion1, champion2, tip, direction);

			userStore.records.tips.push({ champion: champion.name, tip: tip, direction: direction });

			this.props.setRecords(userStore.records.matchupTips, 'matchupTips');
			localStorage.setItem('quakechampionselectMatchupTips', JSON.stringify(userStore.records));

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
							onVote={this.onTipVote(champion1, champion2)}
							onAdd={(text) => this.onAddTip(champion1, champion2, text)}
							list={matchup.champions.find(matchup => matchup.name === champion1).tips}
						/>
						<Tips
							title={`Tips for playing ${champion2} vs. ${champion1}`}
							onVote={() => this.onTipVote(champion2, champion1)}
							onAdd={(text) => this.onAddTip(text)}
							list={matchup.champions.find(matchup => matchup.name === champion2).tips}
						/>
					</div>
				) : null}
			</div>
		);
	}

}
