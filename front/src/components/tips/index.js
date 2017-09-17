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

/*
 * MATCHUP
 * =======
 */

@connect(
	state => ({
		store: state
	}), {
		addTip: championActions.addTip
	}
)
class Tips extends React.Component {


	static propTypes = {
		title: React.PropTypes.string.isRequired,
		records: React.PropTypes.array,
		champion: React.PropTypes.object,
		matchup: React.PropTypes.array,
		addTip: React.PropTypes.func.isRequired,
		tips: React.PropTypes.array.isRequired
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
		console.log('bound');
		return () => {
			console.log(item);
			console.log(direction);
		};
	}



	render () {
		const { title, tips, records } = this.props;

		console.log(tips);

		return (
			<div className="tips">
				<div className="tips__title">
					{title}
				</div>
				<ul className="tips__list">
					{tips.map(item => {
						const duplicates = records.filter(record => record.champions.tips.includes(tips.text));
						const canVote = records.length === 0 || duplicates.length === 0;

						return (
							<div className="tips_tip" key={item._id}>
								<div className="tips_tip-name">
									{item.tip}
								</div>
								<Vote
									voteInfo={item}
									upVote={canVote ? this.onVote(item, 1) : null}
									downVote={canVote ? this.onVote(item, 0) : null}
								/>
							</div>
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
