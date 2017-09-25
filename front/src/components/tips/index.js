/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';

import Form from 'components/form/index.js';
import Vote from 'components/vote/index.js';
import Button from 'components/button/index.js';

// Store
import { actions as championActions } from 'store/champion.js';
import { actions as userActions } from 'store/user.js';

/*
 * TIPS
 * ====
 */

@connect(
	state => ({
		store: state
	}), {
		addTip: championActions.addTip,
		updateTip: championActions.updateTip,
		setRecords: userActions.setRecords
	}
)
class Tips extends React.Component {


	static propTypes = {
		title: React.PropTypes.string.isRequired,
		records: React.PropTypes.array,
		champion: React.PropTypes.object,
		matchup: React.PropTypes.array,
		tips: React.PropTypes.array.isRequired,

		//Store
		store: React.PropTypes.object.isRequired,
		addTip: React.PropTypes.func.isRequired,
		updateTip: React.PropTypes.func.isRequired,
		setRecords: React.PropTypes.func.isRequired
	};

	static defaultProps = {
		tips: [],
		records: []
	};

	constructor (props) {
		super(props);

		this.state = {
			text: ''
		};
	}

	saveTip () {
		const { champion, addTip } = this.props;
		const { text } = this.state;

		addTip(champion.name, text);

	}

	onVote (item, direction) {
		return () => {
			const { updateTip, champion, store } = this.props;
			const { userStore } = store;

			updateTip(champion.name, item.tip, direction);

			userStore.records.tips.push({ champion: champion.name, tip: item.tip, direction: direction });

			this.props.setRecords(userStore.records.tips, 'tips');
			localStorage.setItem('quakechampionselect', JSON.stringify(userStore.records));

		};

	}



	render () {
		const { title, tips, records } = this.props;

		return (
			<div className="tips">
				<div className="tips__title">
					{title}
				</div>
				<ul className="tips__list">
					{tips.map(item => {
						const duplicates = records.filter(record => record.tip === item.tip);
						const canVote = records.length === 0 || duplicates.length === 0;

						return (
							<li className="tips_tip" key={Math.random()}>
								<div className="tips_tip-name">
									{item.tip}
								</div>
								<Vote
									voteInfo={item}
									upVote={canVote ? this.onVote(item, 1) : () => null}
									downVote={canVote ? this.onVote(item, 0) : () => null}
								/>
							</li>
						);
					})}
				</ul>
				<Form
					onSubmit={e => {
						e.preventDefault();
						this.saveTip();
					}}
				>
					<Form.Input
						id="tip"
						type="longtext"
						value={this.state.text}
						onChange={val => this.setState({
							text: val
						})}
					/>
				</Form>
				<Button
					submit
					click={() => this.saveTip()}
				/>
			</div>
		);
	}
}

export default Tips;
