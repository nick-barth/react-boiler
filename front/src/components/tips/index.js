/*
 * Dependencies
 */

// Vendors
import React from 'react';

import Form from 'components/form/index.js';
import Vote from 'components/vote/index.js';
import Button from 'components/button/index.js';

/*
 * TIPS
 * ====
 */

class Tips extends React.Component {


	static propTypes = {
		title: React.PropTypes.string.isRequired,
		records: React.PropTypes.array,
		list: React.PropTypes.array.isRequired,
		onVote: React.PropTypes.func.isRequired,
		onAdd: React.PropTypes.func.isRequired
	};

	static defaultProps = {
		records: []
	};



	constructor (props) {
		super(props);

		this.state = {
			text: '',
			visibleTips: 3
		};
	}

	showMore () {
		this.setState({
			visibleTips: this.state.visibleTips + 3
		});
	}

	render () {
		const { title, list, records, onVote, onAdd } = this.props;
		const { visibleTips } = this.state;

		return (
			<div className="tips">
				<div className="tips__title">
					{title}
				</div>
				<ul className="tips__list">
					{list.slice(0, visibleTips).map(item => {
						const duplicates = records.filter(record => record.tip === item.tip);
						const canVote = records.length === 0 || duplicates.length === 0;

						return (
							<li className="tips__tip" key={Math.random()}>
								<div className="tips_tip-name">
									{item.tip}
								</div>
								<Vote
									voteInfo={item}
									upVote={canVote ? onVote(item.tip, 1) : () => null}
									downVote={canVote ? onVote(item.tip, 0) : () => null}
								/>
							</li>

						);
					})}
				</ul>
				<Button
					click={this.showMore}
					classes="tips__show-more-btn"
					text="show more"
				/>
				<Form
					onSubmit={e => {
						e.preventDefault();
						onAdd(this.state.text);
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
					click={() => onAdd(this.state.text)}
					text="Submit"
				/>
			</div>
		);
	}
}

export default Tips;
